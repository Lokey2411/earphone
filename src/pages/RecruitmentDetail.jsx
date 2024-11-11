import { Box, Button, Checkbox, FormControlLabel, Grid, InputAdornment, InputLabel, TextField, styled } from "@mui/material";
import React, { useMemo, useState } from "react";
import { styles } from "../styles";
import { EmailOutlined } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useData } from "../hooks/useData";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { validateEmail, validatePhoneNumber } from "../functions/controller";
import moment from "moment";
import { makeRequest } from "../makeRequest";
import Loading from "../component/Loading";

const RecruitmentDetail = () => {
	const myStyle = {
		label: {
			fontSize: 14,
		},
	};
	const [formState, setFormState] = useState({});
	const [cvName, setCvName] = useState("");
	const { id } = useParams();
	const [allJobs] = useData("jobs/" + id);
	const job = useMemo(() => {
		return allJobs ? allJobs[0] : {};
	}, [allJobs]);
	const [isForm, setIsForm] = useState(true);
	const navigate = useNavigate();
	const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
		"& .MuiFormLabel-asterisk": {
			color: "red",
		},
	}));
	const [countryCode, setCountryCode] = useState("+1");
	const [experience, setExperience] = useState([]);
	const [education, setEducation] = useState([]);
	const [value, setValue] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useMemo(() => {
		console.log(formState);
	}, [formState]);
	const handleAddExperience = () => {
		setExperience([...experience, {}]);
	};
	const onExperienceFormStateChange = (e, index) => {
		let newExperience = experience;
		newExperience[index] = {
			...newExperience[index],
			[e.target.name]: e.target.value,
		};
		setExperience(newExperience);
	};
	const handleAddEducation = () => {
		setEducation([...education, {}]);
	};
	const onEducationFormStateChange = (e, index) => {
		let newEducation = education;
		newEducation[index] = {
			...newEducation[index],
			[e.target.name]: e.target.value,
		};
		setEducation(newEducation);
	};
	if (!job || isLoading) {
		return <Loading />;
	}

	const handleFormStateChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	const handleUpload = (e) => {
		// Xử lý tải lên tệp tại đây
		console.log("posting...");
		setIsLoading(true);
		makeRequest
			.post("upload-cv", {
				...formState,
				[e.target.id]: e.target.files[0],
				path: e.target.id,
				name: `${formState.firstName || ""} ${formState.lastName || ""}`,
			})
			.then((res) => {
				if (res.status === 200 && res.data.fileName) {
					setFormState({
						...formState,
						[e.target.id]: res.data.fileName,
					});
					setCvName(e.target.files[0].name);
					// navigate("/apply-thanh-cong");
				} else console.log("Lỗi HTTP: ", res.status);
			})
			.catch(console.log)
			.finally(() => {
				console.log("completely uploaded");
				setIsLoading(false);
			});
	};
	const handleSendEmail = () => {
		const serviceId = process.env.REACT_APP_RECUITMENT_FORM_SERVICE;
		const templateId = process.env.REACT_APP_RECUITMENT_FORM_TEMPLATE;
		const publicKey = process.env.REACT_APP_RECUITMENT_FORM_PUBLIC_KEY;
		const experienceString = experience.reduce((prev, current, index) => {
			return `
				${prev}
				${index + 1}: Thời gian: ${moment(current.startDate).format("LL")} -  ${moment(current.endDate).format("LL")},
				Chức danh: ${current.title}, 
				Tên công ty: ${current.company}, 
				Địa chỉ công ty : ${current.companyAddress}, Mô tả chi tiết công việc:
				${current.jobDescriptions}
			`;
		}, "");
		const educationString = education.reduce(
			(prev, current, index) => `
			${prev}
				${index + 1}: Thời gian: ${moment(current.startDate).format("LL")} - ${moment(current.endDate).format("LL")},
				Chuyên ngành: ${current.major},
				Loại bằng cấp: ${current.degree},
				Địa điểm trường học: ${current.schoolLocation},
				Mô tả: ${current.description}
			`,
			""
		);
		const validForm = (validateEmail(formState.email) && formState.email === formState.reEnteredEmail && validatePhoneNumber(formState.phoneNumber)) || (formState.cv && formState.profile);
		if (validForm)
			emailjs
				.send(
					serviceId,
					templateId,
					{
						...formState,
						experience: experienceString,
						education: educationString,
						to_email: "tuyendung.thethanh@gmail.com",
						position: job.position,
					},
					publicKey
				)
				.then(() => {
					navigate("/apply-thanh-cong");
				})
				.catch((error) => {
					console.log(error);
				});
		else {
			if (formState.email !== formState.reEnteredEmail) alert("Email không khớp");
			else if (!validateEmail(formState.email)) {
				alert("Email không hợp lệ");
			} else if (!validatePhoneNumber(formState.phoneNumber)) alert("Số điện thoại không hợp lệ");
		}
	};
	const handleBoxClick = () => {
		setIsForm(false);
		// Cuộn lên đầu trang
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Thêm hiệu ứng cuộn mượt mà
		});
	};
	return (
		<Box
			sx={{
				...styles.fontSize13,
				fontSize: "14px",
				"& .MuiInputBase-input": {
					height: "15px",
					fontSize: "14px",
					p: "5px 10px",
				},
			}}
		>
			{isForm ? (
				<Box>
					<Box
						sx={{
							p: "40px 239px 40px 140px",
							display: "flex",
							"@media (max-width:1200px)": {
								p: "20px",
								display: "grid",
							},
						}}
					>
						<Box
							sx={{
								pr: "64px",
								"@media (max-width:1200px)": {
									pr: 0,
								},
							}}
						>
							<Box sx={{ display: "flex", justifyItems: "left" }}>
								<Box>
									<a
										href="/gia-tri-va-van-hoa"
										rel="Trang chủ"
									>
										<Box
											sx={{
												boxSizing: "border-box",
												textAlign: "center",
											}}
										>
											<Box>THE</Box>
											<Box
												sx={{
													fontWeight: "bold",
													fontSize: "20px",
												}}
											>
												THANH COFFEE
											</Box>
											<Box>CA PHE TOT & TRA NGON</Box>
										</Box>
									</a>
								</Box>
							</Box>
							<Box sx={{ pt: "40px", fontSize: "16px" }}>
								<Box sx={{ fontSize: "24px", fontWeight: "600" }}>Chức danh: {job.position}</Box>
								<Box sx={{ p: "10px 0", fontSize: 14 }}>{job.department?.address}</Box>
								<Box sx={{ marginBottom: "24px" }}>{job.type}</Box>
								<Box>
									<strong style={{ fontSize: "14px" }}>Mô tả công việc </strong>
									<p>{job.description}</p>
								</Box>
								<Box
									sx={{
										fontWeight: "600",
										pt: "10px",
										fontSize: 14,
									}}
								>
									Nhiệm vụ chính
								</Box>
								<div
									dangerouslySetInnerHTML={{
										__html: job.missions,
									}}
								/>
								<Box
									sx={{
										fontWeight: "600",
										pt: "10px",
										fontSize: 14,
									}}
								>
									Yêu cầu
								</Box>
								<div
									dangerouslySetInnerHTML={{
										__html: job.requirements,
									}}
								/>
								<Box
									sx={{
										fontWeight: "600",
										pt: "10px",
										fontSize: 14,
									}}
								>
									Quyền lợi
								</Box>
								<div
									dangerouslySetInnerHTML={{
										__html: job.benefits,
									}}
								/>
							</Box>
							<Box
								sx={{
									alignItems: "center",
									textAlign: "center",
									boxSizing: "border-box",
									borderTop: "1px solid black",
									mt: "40px",
								}}
							>
								<Box>
									<a href="#form-top-0">
										<Box
											sx={{
												border: "1px solid black",
												background: "#000",
												color: "#FFFFFF",
												fontSize: "18px",
												p: "7px 0",
												mb: "14px",
												mt: "40px",
												cursor: "pointer",
											}}
											onClick={() => setIsForm(false)}
										>
											Tôi quan tâm tới vị trí này
										</Box>
									</a>
								</Box>
								<Box sx={{ color: "#2196F3" }}>
									<Box sx={{ pb: "18px" }}>
										<a
											href="/dieu-kien-chinh-sach"
											rel="noreferrer"
										>
											Chính sách quyền riêng tư
										</a>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									alignItems: "center",
									textAlign: "center",
									boxSizing: "border-box",
								}}
							>
								<Box
									sx={{
										border: "1px solid black",
										background: "#000",
										color: "#FFFFFF",
										fontSize: "18px",
										mb: "14px",
										p: "7px 0",
										cursor: "pointer",
										mt: "40px",
										width: "352px",
										padding: "8px",
										"@media (max-width:900px)": {
											width: "100%",
											p: "7px 0",
											display: "none",
										},
									}}
									onClick={handleBoxClick}
								>
									Tôi quan tâm tới vị trí này
								</Box>
								<Box
									sx={{
										border: "1px solid black",
										p: "7px 0",
										fontSize: "18px",
									}}
								>
									<Box
										sx={{
											cursor: "pointer",
										}}
										rel="noreferrer"
										onClick={() => {
											navigate("/form-tham-khao-tu-ban-be", {
												state: {
													id,
												},
											});
										}}
									>
										Giới thiệu cho bạn bè
									</Box>
								</Box>
							</Box>
							{/* Chia sẻ công việc */}
							{/* <Box
								sx={{
									pt: "64px",
									textTransform: "uppercase",
									fontSize: "20px",
									pb: "18px",
								}}
							>
								Chia sẻ công việc
							</Box> */}
							{/* <Box sx={{ display: "flex", alignItems: "center" }}>
								<Box sx={{ mr: "20px" }}>
									<svg
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22.2234 0.599487H1.77187C0.792187 0.599487 0 1.37292 0 2.32917V22.8651C0 23.8214 0.792187 24.5995 1.77187 24.5995H22.2234C23.2031 24.5995 24 23.8214 24 22.8698V2.32917C24 1.37292 23.2031 0.599487 22.2234 0.599487ZM7.12031 21.051H3.55781V9.5948H7.12031V21.051ZM5.33906 8.03386C4.19531 8.03386 3.27188 7.11042 3.27188 5.97136C3.27188 4.8323 4.19531 3.90886 5.33906 3.90886C6.47813 3.90886 7.40156 4.8323 7.40156 5.97136C7.40156 7.10574 6.47813 8.03386 5.33906 8.03386ZM20.4516 21.051H16.8937V15.4823C16.8937 14.1557 16.8703 12.4448 15.0422 12.4448C13.1906 12.4448 12.9094 13.8932 12.9094 15.3885V21.051H9.35625V9.5948H12.7687V11.1604H12.8156C13.2891 10.2604 14.4516 9.30886 16.1813 9.30886C19.7859 9.30886 20.4516 11.6807 20.4516 14.7651V21.051Z"
											fill="#464646"
										/>
									</svg>
								</Box>
								<Box sx={{ mr: "20px" }}>
									<svg
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M24 12.5995C24 5.97207 18.6274 0.599487 12 0.599487C5.37258 0.599487 0 5.97207 0 12.5995C0 18.5889 4.3882 23.5535 10.125 24.4537V16.0682H7.07812V12.5995H10.125V9.95574C10.125 6.94824 11.9166 5.28699 14.6576 5.28699C15.9701 5.28699 17.3438 5.52136 17.3438 5.52136V8.47449H15.8306C14.34 8.47449 13.875 9.39957 13.875 10.3495V12.5995H17.2031L16.6711 16.0682H13.875V24.4537C19.6118 23.5535 24 18.5889 24 12.5995Z"
											fill="#464646"
										/>
									</svg>
								</Box>
								<Box sx={{ mr: "20px" }}>
									<svg
										width="24"
										height="23"
										viewBox="0 0 24 23"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M15.9435 22.5995L10.3941 14.6896L3.44691 22.5995H0.507812L9.09013 12.8306L0.507812 0.599487H8.05376L13.284 8.05451L19.8373 0.599487H22.7764L14.5924 9.91597L23.4895 22.5995H15.9435ZM19.2165 20.3695H17.2378L4.71616 2.82949H6.69515L11.7102 9.85265L12.5774 11.0714L19.2165 20.3695Z"
											fill="#464646"
										/>
									</svg>
								</Box>
								<Box sx={{ mr: "20px" }}>
									<svg
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M16.8416 7.14733C15.6026 5.96563 13.9491 5.32187 12.2383 5.34832C9.10766 5.34832 6.44884 7.46038 5.50082 10.3044V10.3044C4.99816 11.7948 4.99816 13.4086 5.50082 14.899H5.50522C6.45763 17.7386 9.11205 19.8506 12.2427 19.8506C13.8587 19.8506 15.2461 19.4373 16.3213 18.7072V18.7042C17.5868 17.8665 18.451 16.5481 18.72 15.0577H12.2383V10.4367H23.5571C23.6982 11.2392 23.7643 12.0594 23.7643 12.8751C23.7643 16.5249 22.4599 19.6107 20.1903 21.7007L20.1927 21.7026C18.2041 23.5368 15.4747 24.5995 12.2383 24.5995C7.70107 24.5995 3.55188 22.0421 1.51477 17.9899V17.9899C-0.187219 14.5991 -0.187215 10.6043 1.51478 7.2135H1.51481L1.51477 7.21347C3.55188 3.15689 7.70107 0.599472 12.2383 0.599472C15.219 0.564197 18.0983 1.68417 20.2677 3.72128L16.8416 7.14733Z"
											fill="#464646"
										/>
									</svg>
								</Box>
								<Box sx={{ mr: "20px" }}>
									<svg
										width="22"
										height="19"
										viewBox="0 0 22 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 10.5995L10.4265 11.4187C10.7709 11.6597 11.2291 11.6597 11.5735 11.4187L11 10.5995ZM3 2.59949H19V0.599487H3V2.59949ZM19 2.59949C19.5477 2.59949 20 3.05177 20 3.59949H22C22 1.9472 20.6523 0.599487 19 0.599487V2.59949ZM20 3.59949V15.5995H22V3.59949H20ZM20 15.5995C20 16.1472 19.5477 16.5995 19 16.5995V18.5995C20.6523 18.5995 22 17.2518 22 15.5995H20ZM19 16.5995H3V18.5995H19V16.5995ZM3 16.5995C2.45228 16.5995 2 16.1472 2 15.5995H0C0 17.2518 1.34772 18.5995 3 18.5995V16.5995ZM2 15.5995V3.59949H0V15.5995H2ZM2 3.59949C2 3.05177 2.45228 2.59949 3 2.59949V0.599487C1.34772 0.599487 0 1.9472 0 3.59949H2ZM20.4265 2.78026L10.4265 9.78026L11.5735 11.4187L21.5735 4.41872L20.4265 2.78026ZM11.5735 9.78026L1.57346 2.78026L0.426538 4.41872L10.4265 11.4187L11.5735 9.78026Z"
											fill="#464646"
										/>
									</svg>
								</Box>
							</Box> */}
						</Box>
					</Box>
				</Box>
			) : (
				<Box>
					<Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: "17px 140px",
								"@media (max-width:1200px)": {
									p: "17px 30px",
								},
								"@media (max-width:900px)": {
									p: "17px 20px",
									display: "flex",
									textAlign: "center",
								},
							}}
						>
							<Box>
								<div id="form-top-0">
									<a
										href="/gia-tri-va-van-hoa"
										rel="Trang chủ"
									>
										<Box
											sx={{
												boxSizing: "border-box",
												textAlign: "center",
												"@media (max-width:900px)": {
													pb: "10px",
												},
											}}
										>
											<Box>THE</Box>
											<Box
												sx={{
													fontWeight: "bold",
													fontSize: "20px",
												}}
											>
												THANH COFFEE
											</Box>
											<Box>CA PHE TOT & TRA NGON</Box>
										</Box>
									</a>
								</div>
							</Box>
							<Box
								sx={{
									textAlign: "right",
									fontSize: "16px",
									"@media (max-width:1200px)": {
										fontSize: "12px",
									},
								}}
							>
								<Box>{job.position}</Box>
								<Box
									sx={{
										display: "flex",
										gap: "2px",
										fontSize: 10,
										justifyContent: "flex-end",
										color: "#545454",
										p: "5px 0",
									}}
								>
									<Box>
										<svg
											width="10"
											height="12"
											viewBox="0 0 14 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M13 6.66669C13 11.3334 7 15.3334 7 15.3334C7 15.3334 1 11.3334 1 6.66669C1 5.07539 1.63214 3.54926 2.75736 2.42405C3.88258 1.29883 5.4087 0.666687 7 0.666687C8.5913 0.666687 10.1174 1.29883 11.2426 2.42405C12.3679 3.54926 13 5.07539 13 6.66669Z"
												stroke="#353535"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M7 8.66669C8.10457 8.66669 9 7.77126 9 6.66669C9 5.56212 8.10457 4.66669 7 4.66669C5.89543 4.66669 5 5.56212 5 6.66669C5 7.77126 5.89543 8.66669 7 8.66669Z"
												stroke="#353535"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</Box>
									{job.department.address}
								</Box>
								<Box
									sx={{
										border: "1px solid black",
										p: "5px",
										width: "max-content",
										background: "black",
										color: "white",
										borderRadius: "15px",
										cursor: "pointer",
										textAlign: "right",
										ml: "auto", // Căn nút sang phải
										"&:hover": {
											backgroundColor: "#333131",
										},
									}}
									onClick={() => setIsForm(true)}
								>
									Trở về
								</Box>
							</Box>
						</Box>
						<Box sx={{ borderBottom: "1px solid #35353524" }}></Box>
						<Box
							sx={{
								p: "23px 239px 96px 207px",
								"@media (max-width:1200px)": {
									p: "17px 30px",
								},
								"@media (max-width:900px)": {
									p: "20px",
									boxSizing: "border-box",
								},
							}}
						>
							<Box>
								<Box sx={{ fontSize: "22px", fontWeight: "700" }}>Dễ dàng ứng tuyển The Thanh theo từng bước</Box>
								<Box sx={{ fontSize: "14px", color: "#545454", pt: "10px" }}>Chọn một tùy chọn để tự động hoàn thành đơn đăng ký của bạn. Bạn có thể đính kèm hồ sơ ứng tuyển để hoàn thành nhanh đơn ứng tuyển của bạn. Ngoài ra, bạn vẫn có thể hoàn thành hồ sơ theo cách thủ công</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										pt: "20px",
										pb: "34px",
										gap: "27.5px",
										"@media (max-width:900px)": {
											display: "grid",
										},
									}}
								>
									<Box
										sx={{
											border: "1px dashed #A9A9A9",
											justifyContent: "center",
											alignItems: "center",
											display: "grid",
											textAlign: "center",
											p: "18px",
											width: "100%",
											"@media (max-width:900px)": {
												p: "18px",
												boxSizing: "border-box",
											},
										}}
									>
										<Box
											sx={{
												fontSize: "16px",
												fontWeight: "600",
												color: "#353535",
											}}
										>
											<input
												type="file"
												onChange={handleUpload}
												id="cv"
											/>
											<label htmlFor="cv">{cvName}</label>
											<br />
											<span
												style={{
													fontSize: 14,
												}}
											>
												Đính kèm bản Hồ sơ Ứng tuyển của bạn hoặc chỉ cần thả nó vào đây
											</span>
										</Box>
										<Box
											sx={{
												fontSize: "14px",
												color: "#5A5A5A",
											}}
										>
											(Không bắt buộc)
										</Box>
									</Box>
								</Box>
							</Box>
							<Box>
								<Box sx={{ fontSize: "22px", fontWeight: "700" }}>Thông tin cá nhân</Box>
								<Box sx={{ fontSize: "12px", pb: "10px" }}>Các dòng có dấu * là bắt buộc.</Box>
								{/* svg */}
								<Box>
									<svg
										width="128"
										height="128"
										viewBox="0 0 128 128"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M31.1994 91.1998C35.7327 87.7332 40.7994 84.9998 46.3993 82.9998C51.9994 80.9998 57.866 79.9998 63.9994 79.9998C70.1327 79.9998 75.9994 80.9998 81.5993 82.9998C87.1994 84.9998 92.266 87.7332 96.7994 91.1998C99.9105 87.5554 102.333 83.4221 104.066 78.7998C105.799 74.1776 106.666 69.2443 106.666 63.9998C106.666 52.1776 102.51 42.111 94.1994 33.7998C85.8882 25.4887 75.8216 21.3332 63.9994 21.3332C52.1771 21.3332 42.1105 25.4887 33.7994 33.7998C25.4882 42.111 21.3327 52.1776 21.3327 63.9998C21.3327 69.2443 22.1993 74.1776 23.9327 78.7998C25.666 83.4221 28.0882 87.5554 31.1994 91.1998ZM63.9994 69.3332C58.7549 69.3332 54.3327 67.5332 50.7327 63.9332C47.1327 60.3332 45.3327 55.9109 45.3327 50.6665C45.3327 45.4221 47.1327 40.9998 50.7327 37.3998C54.3327 33.7998 58.7549 31.9998 63.9994 31.9998C69.2438 31.9998 73.666 33.7998 77.266 37.3998C80.866 40.9998 82.666 45.4221 82.666 50.6665C82.666 55.9109 80.866 60.3332 77.266 63.9332C73.666 67.5332 69.2438 69.3332 63.9994 69.3332ZM63.9994 117.333C56.6216 117.333 49.6882 115.933 43.1994 113.133C36.7105 110.333 31.066 106.533 26.266 101.733C21.466 96.9332 17.666 91.2887 14.866 84.7998C12.066 78.311 10.666 71.3776 10.666 63.9998C10.666 56.6221 12.066 49.6887 14.866 43.1998C17.666 36.7109 21.466 31.0665 26.266 26.2665C31.066 21.4665 36.7105 17.6665 43.1994 14.8665C49.6882 12.0665 56.6216 10.6665 63.9994 10.6665C71.3771 10.6665 78.3105 12.0665 84.7994 14.8665C91.2882 17.6665 96.9327 21.4665 101.733 26.2665C106.533 31.0665 110.333 36.7109 113.133 43.1998C115.933 49.6887 117.333 56.6221 117.333 63.9998C117.333 71.3776 115.933 78.311 113.133 84.7998C110.333 91.2887 106.533 96.9332 101.733 101.733C96.9327 106.533 91.2882 110.333 84.7994 113.133C78.3105 115.933 71.3771 117.333 63.9994 117.333Z"
											fill="#D7D7D7"
										/>
									</svg>
								</Box>
								<Box sx={{ flexGrow: 1, p: 2 }}>
									{/* form */}
									<Grid
										container
										spacing={2}
									>
										{/* Row 1 */}
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="firstname"
												required
												sx={{
													fontSize: 14,
												}}
											>
												Họ
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												variant="outlined"
												name="firstName"
												value={formState.firstName}
												onChange={handleFormStateChange}
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="lastname"
												required
												sx={{
													...myStyle.label,
												}}
											>
												Tên
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												variant="outlined"
												name="lastName"
												value={formState.lastName}
												onChange={handleFormStateChange}
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</Grid>
										{/* Row 2 */}
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="email"
												sx={{
													...myStyle.label,
												}}
												required
											>
												Email
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												variant="outlined"
												placeholder="olivia@untitledui.com"
												name="email"
												value={formState.email}
												onChange={handleFormStateChange}
												InputLabelProps={{
													shrink: true,
												}}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<EmailOutlined />
														</InputAdornment>
													),
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="reEnteredEmail"
												sx={{
													...myStyle.label,
												}}
												required
											>
												Nhập lại Email
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												name="reEnteredEmail"
												value={formState.reEnteredEmail}
												onChange={handleFormStateChange}
												variant="outlined"
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="address"
												required
												sx={{
													...myStyle.label,
												}}
											>
												Nơi cư trú
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												name="address"
												value={formState.address}
												onChange={handleFormStateChange}
												variant="outlined"
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</Grid>
										{/* Row 3 */}
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="number"
												required
												sx={{
													...myStyle.label,
												}}
											>
												Số điện thoại
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												variant="outlined"
												placeholder="+84"
												name="phoneNumber"
												value={formState.phoneNumber}
												onChange={handleFormStateChange}
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</Grid>
									</Grid>
								</Box>
							</Box>
							<Box
								sx={{
									borderTop: "1px solid #A9A9A9",
									borderBottom: "1px solid #A9A9A9",
									p: "41px 67px",
									mt: "32px",
									fontSize: "22px",
									fontWeight: "700",
									"@media (max-width:900px)": {
										p: "20px",
									},
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										"@media (max-width:900px)": {
											display: "ruby",
										},
									}}
								>
									<Box
										sx={{
											"@media (max-width:900px)": {
												pb: "15px",
											},
										}}
									>
										Kinh nghiệm làm việc trước đây
									</Box>
									<Box
										sx={{
											border: "1px solid black",
											borderRadius: "20px",
											p: "8px 50px",
											fontSize: "14px",
											fontWeight: "600",
											cursor: "pointer",
										}}
										onClick={handleAddExperience}
									>
										+ Thêm
									</Box>
								</Box>
								{experience.map((experienceFormState, index) => (
									<Box
										sx={{
											backgroundColor: "#fbfbfb",
											borderRadius: 8,
											margin: "24px 0",
											fontSize: "16px",
										}}
									>
										<Box
											sx={{
												color: "#5A5A5A",
												fontSize: 12,
											}}
										>
											Các trường có dấu * là bắt buộc.
										</Box>
										<Box sx={{ flexGrow: 1, p: 2 }}>
											<Grid
												container
												spacing={2}
											>
												<Grid
													item
													xs={12}
													sm={6}
												>
													<StyledInputLabel
														htmlFor="title"
														required
														sx={{
															...myStyle.label,
														}}
													>
														Chức danh
													</StyledInputLabel>
													<TextField
														fullWidth
														required
														name="title"
														value={experienceFormState.title}
														onChange={(e) => onExperienceFormStateChange(e, index)}
														variant="outlined"
														InputLabelProps={{
															shrink: true,
														}}
													/>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
												>
													<StyledInputLabel
														htmlFor="company"
														sx={{
															...myStyle.label,
														}}
													>
														Tên Công ty
													</StyledInputLabel>
													<TextField
														fullWidth
														name="company"
														value={experienceFormState.company}
														onChange={(e) => onExperienceFormStateChange(e, index)}
														variant="outlined"
													/>
												</Grid>
												<Grid
													item
													xs={12}
												>
													<StyledInputLabel
														htmlFor="companyAddress"
														sx={{
															...myStyle.label,
														}}
													>
														Địa chỉ công ty
													</StyledInputLabel>
													<TextField
														fullWidth
														name="companyAddress"
														value={experienceFormState.companyAddress}
														onChange={(e) => onExperienceFormStateChange(e, index)}
														variant="outlined"
													/>
												</Grid>
												<Grid
													item
													xs={12}
												>
													<StyledInputLabel
														htmlFor="jobDescriptions"
														sx={{
															...myStyle.label,
														}}
													>
														Mô tả chi tiết công việc bạn từng làm cho vị trí này
													</StyledInputLabel>
													<TextField
														fullWidth
														variant="outlined"
														name="jobDescriptions"
														multiline
														value={experienceFormState.jobDescriptions}
														onChange={(e) => onExperienceFormStateChange(e, index)}
													/>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
													sx={{
														"& .MuiFormControl-root": {
															width: "100%",
														},
														"& .MuiOutlinedInput-root": {
															height: "60px",
														},
													}}
												>
													<InputLabel
														htmlfor="startDate"
														sx={{
															pb: "20px",
															...myStyle.label,
														}}
													>
														Ngày bắt đầu
													</InputLabel>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<DatePicker
															label="Chọn ngày"
															renderInput={(params) => (
																<TextField
																	name="startDate"
																	value={experienceFormState.startDate}
																	onChange={(e) => onExperienceFormStateChange(e, index)}
																	fullWidth
																/>
															)}
														/>
													</LocalizationProvider>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
													sx={{
														"& .MuiFormControl-root": {
															width: "100%",
														},
														"& .MuiOutlinedInput-root": {
															height: "60px",
														},
													}}
												>
													<InputLabel
														htmlFor="endDate"
														sx={{
															pb: "20px",
															...myStyle.label,
														}}
													>
														Ngày kết thúc
													</InputLabel>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<DatePicker
															label="Chọn ngày"
															renderInput={(params) => (
																<TextField
																	name="endDate"
																	value={experienceFormState.endDate}
																	onChange={(e) => onExperienceFormStateChange(e, index)}
																	{...params}
																	fullWidth
																/>
															)}
														/>
													</LocalizationProvider>
												</Grid>
											</Grid>
											<FormControlLabel
												control={
													<Checkbox
														color="primary"
														name="isWorking"
														checked={experienceFormState.isWorking}
														onChange={(e) => onExperienceFormStateChange(e, index)}
													/>
												}
												label="Tôi hiện đang làm việc tại đây"
												sx={{
													fontSize: "16px",
													color: "#5A5A5A",
													pt: "15px",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													boxSizing: "border-box",
													gap: "14px",
													justifyContent: "flex-end",
												}}
											>
												<Box
													sx={{
														border: "1px solid black",
														p: "4px",
														cursor: "pointer",
													}}
													onClick={() => {
														setExperience(experience.filter((_, i) => index !== i));
													}}
												>
													Trở về
												</Box>
												<Box
													sx={{
														color: "#FFFFFF",
														background: "black",
														p: "4px",
													}}
												>
													Lưu
												</Box>
											</Box>
										</Box>
									</Box>
								))}
							</Box>
							<Box
								sx={{
									borderBottom: "1px solid #A9A9A9",
									p: "41px 67px",
									fontSize: "22px",
									fontWeight: "700",
									"@media (max-width:900px)": {
										p: "20px",
									},
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										"@media (max-width:900px)": {
											display: "grid",
											justifyContent: "center",
										},
									}}
								>
									<Box
										sx={{
											"@media (max-width:900px)": {
												pb: "15px",
												textAlign: "center",
											},
										}}
									>
										Học vấn
									</Box>
									<Box
										sx={{
											border: "1px solid black",
											borderRadius: "20px",
											p: "8px 50px",
											fontSize: "14px",
											fontWeight: "600",
											cursor: "pointer",
											textAlign: "center",
										}}
										onClick={handleAddEducation}
									>
										+ Thêm
									</Box>
								</Box>
								{education.map((educationFormState, index) => (
									<Box
										key={index}
										sx={{
											fontSize: "16px",
											p: "20px 0",
										}}
									>
										<Box
											sx={{
												color: "#5A5A5A",
												fontSize: 12,
											}}
										>
											Các trường có dấu * là bắt buộc.
										</Box>
										<Box sx={{ flexGrow: 1, p: 2 }}>
											<Grid
												container
												spacing={2}
											>
												<Grid
													item
													xs={12}
												>
													<StyledInputLabel
														htmlFor="universityName"
														required
														sx={{
															...myStyle.label,
														}}
													>
														Tên Trường Đại học/ Cao đẳng
													</StyledInputLabel>
													<TextField
														fullWidth
														required
														name="universityName"
														value={educationFormState.universityName}
														onChange={(e) => {
															onEducationFormStateChange(e, index);
														}}
														variant="outlined"
														InputLabelProps={{
															shrink: true,
														}}
													/>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
												>
													<StyledInputLabel
														htmlFor="major"
														sx={{
															...myStyle.label,
														}}
													>
														Chuyên ngành
													</StyledInputLabel>
													<TextField
														fullWidth
														name="major"
														value={educationFormState.major}
														onChange={(e) => {
															onEducationFormStateChange(e, index);
														}}
														variant="outlined"
													/>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
												>
													<StyledInputLabel
														htmlFor="degree"
														sx={{
															...myStyle.label,
														}}
													>
														Loại Bằng cấp
													</StyledInputLabel>
													<TextField
														fullWidth
														name="degree"
														value={educationFormState.degree}
														onChange={(e) => {
															onEducationFormStateChange(e, index);
														}}
														variant="outlined"
													/>
												</Grid>
												<Grid
													item
													xs={12}
												>
													<StyledInputLabel htmlFor="school-location">Địa điểm trường học</StyledInputLabel>
													<TextField
														fullWidth
														name="schoolLocation"
														value={educationFormState.schoolLocation}
														onChange={(e) => {
															onEducationFormStateChange(e, index);
														}}
														variant="outlined"
														sx={{
															...myStyle.label,
														}}
													/>
												</Grid>
												<Grid
													item
													xs={12}
												>
													<StyledInputLabel htmlFor="description">Mô tả</StyledInputLabel>
													<TextField
														fullWidth
														name="description"
														value={educationFormState.description}
														onChange={(e) => {
															onEducationFormStateChange(e, index);
														}}
														variant="outlined"
													/>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
													sx={{
														"& .MuiFormControl-root": {
															width: "100%",
														},
														"& .MuiOutlinedInput-root": {
															height: "60px",
														},
													}}
												>
													<InputLabel
														htmlfor="startDate"
														sx={{
															...myStyle.label,
															pb: "20px",
														}}
													>
														Ngày bắt đầu
													</InputLabel>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<DatePicker
															label="Chọn ngày"
															renderInput={(params) => (
																<TextField
																	name="startDate"
																	value={educationFormState.startDate}
																	onChange={(e) => {
																		onEducationFormStateChange(e, index);
																	}}
																	{...params}
																	fullWidth
																/>
															)}
														/>
													</LocalizationProvider>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}
													sx={{
														"& .MuiFormControl-root": {
															width: "100%",
														},
														"& .MuiOutlinedInput-root": {
															height: "60px",
														},
													}}
												>
													<InputLabel
														htmlFor="endDate"
														sx={{
															pb: "20px",
															...myStyle.label,
														}}
													>
														Ngày kết thúc
													</InputLabel>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<DatePicker
															label="Chọn ngày"
															renderInput={(params) => (
																<TextField
																	name="endDate"
																	value={educationFormState.endDate}
																	onChange={(e) => {
																		onEducationFormStateChange(e, index);
																	}}
																	{...params}
																	fullWidth
																/>
															)}
														/>
													</LocalizationProvider>
												</Grid>
											</Grid>
											<FormControlLabel
												control={<Checkbox color="primary" />}
												label="Tôi hiện đang học ở đây"
												sx={{
													fontSize: "16px",
													color: "#5A5A5A",
													pt: "15px",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													gap: "14px",
													justifyContent: "flex-end",
												}}
											>
												<Box
													sx={{
														border: "1px solid black",
														p: "4px",
														cursor: "pointer",
													}}
													onClick={() => {
														setEducation(education.filter((_, i) => index !== i));
													}}
												>
													Trở về
												</Box>
												<Box
													sx={{
														color: "#FFFFFF",
														background: "black",
														p: "4px",
														cursor: "pointer",
													}}
												>
													Lưu
												</Box>
											</Box>
										</Box>
									</Box>
								))}
							</Box>
							<Box sx={{ pt: "40px" }}>
								<Box
									sx={{
										fontSize: "22px",
										fontWeight: "700",
										pb: "24px",
									}}
								>
									Các nền tảng bạn sử dụng
								</Box>
								<Box sx={{ flexGrow: 1, p: 2 }}>
									<Grid
										container
										spacing={2}
									>
										{/* Row 1 */}
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												htmlFor="link"
												sx={{
													...myStyle.label,
												}}
											>
												LinkedIn
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												name="linkedIn"
												value={formState.linkedIn}
												onChange={handleFormStateChange}
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												sx={{
													...myStyle.label,
												}}
												htmlFor="Facebook"
											>
												Facebook
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												name="facebook"
												value={formState.facebook}
												onChange={handleFormStateChange}
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												sx={{
													...myStyle.label,
												}}
												htmlFor="Website"
											>
												Website
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												variant="outlined"
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
										>
											<StyledInputLabel
												sx={{
													...myStyle.label,
												}}
												htmlFor="X"
											>
												X
											</StyledInputLabel>
											<TextField
												fullWidth
												required
												name="twitter"
												value={formState.twitter}
												onChange={handleFormStateChange}
												variant="outlined"
											/>
										</Grid>
									</Grid>
								</Box>
							</Box>
							<Box>
								<Box
									sx={{
										fontSize: "22px",
										fontWeight: "700",
										pb: "24px",
									}}
								>
									Sơ yếu lý lịch <span style={{ color: "#F44336" }}>*</span>
								</Box>
								<Box
									sx={{
										border: "1px dashed #A9A9A9",
										justifyContent: "center",
										alignItems: "center",
										display: "grid",
										textAlign: "center",
										p: "18px",
									}}
								>
									<Box
										sx={{
											fontSize: "14px",
											fontWeight: "600",
											color: "#353535",
										}}
									>
										<input
											type="file"
											onChange={handleUpload}
											id="profile"
										/>
										<span>Đính kèm hoặc thả vào đây</span>
									</Box>
									<Box
										sx={{
											fontSize: "16px",
											color: "#5A5A5A",
										}}
									>
										(Không bắt buộc)
									</Box>
								</Box>
								<Box>
									<Box
										sx={{
											fontSize: "22px",
											fontWeight: "700",
											pt: "32px",
										}}
									>
										Gửi tin nhắn cho bộ phận Tuyển dụng:
									</Box>
									<Box sx={{ fontSize: "14px", p: "6px 0", color: "#545454" }}>Cho chúng tôi biết về sự quan tâm của bạn đối với vị trí này</Box>
									<TextField
										fullWidth
										multiline
										rows={4}
										name="message"
										value={formState.message}
										onChange={handleFormStateChange}
										variant="outlined"
										label="Gửi đôi lời lời chào hỏi và nhắn gửi cho chúng tôi để chúng ta có thể hiểu nhau hơn nhé!"
									/>
								</Box>
							</Box>
							<Box
								sx={{
									borderBottom: "1px solid #A9A9A9",
									p: "48px 0",
								}}
							></Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									marginTop: "20px",
								}}
							>
								<Button
									variant="contained"
									sx={{
										borderRadius: "20px",
										background: "black",
										mb: "36px",
										"&:hover": {
											backgroundColor: "#333131",
										},
									}}
									onClick={handleSendEmail}
								>
									Ứng tuyển ngay
								</Button>
							</Box>
							<Box
								sx={{
									textAlign: "center",
									color: "#2196F3",
									fontSize: 14,
								}}
							>
								<a
									href="/dieu-kien-chinh-sach"
									rel="noreferrer"
								>
									Chính sách quyền riêng tư
								</a>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default RecruitmentDetail;
