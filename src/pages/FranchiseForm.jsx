import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Form1, Form2, Form3, Form4, Form5 } from "../component/FranchisForms";
import emailjs from "@emailjs/browser";
import bg1nhuongquyen from "../component/img/bg1nhuongquyen.jpg";
import { env, validateEmail, validatePhoneNumber } from "../functions/controller";
const FranchiseForm = () => {
	const [currentForm, setCurrentForm] = useState(1);
	const [formState, setFormState] = useState({});
	const updateFormState = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	useEffect(() => {
		console.log(formState);
	}, [formState]);
	const handleNext = () => {
		setCurrentForm((prevForm) => prevForm + 1);
	};

	const handlePrevious = () => {
		setCurrentForm((prevForm) => prevForm - 1);
	};
	const handleSubmit = () => {
		const emailTemplate = env("FRANCHISE_EMAIL_TEMPLATE");
		const emailService = env("FRANCHISE_EMAIL_SERVICE");
		const publicKey = env("FRANCHISE_EMAIL_PUBLIC_KEY");
		let isValid = Object.keys(formState).length > 0;
		const exceptKeys = ["firstName", "lastName", "email", "phoneNumber", "national", "zipCode", "city", "state", "professionalBackground", "city-0", "state-0", "ownershipStructure", "singleOwnershipStructure"];
		isValid = exceptKeys.every((item) => formState[item]) && validateEmail(formState.email) && validatePhoneNumber(formState.phoneNumber);
		if (isValid)
			emailjs
				.send(
					emailService,
					emailTemplate,
					{
						...formState,
						to_name: process.env.REACT_APP_FRANCHISE_FORM_TO_NAME,
						to_email: process.env.REACT_APP_FRANCHISE_FORM_TO_EMAIL,
					},
					publicKey
				)
				.then(() => {
					alert("Đăng ký thành công");
					console.log(formState);
				})
				.catch((error) => {
					console.log(publicKey);
					console.log(error);
				});
		else {
			if (!validateEmail(formState.email)) alert("Email không hợp lệ");
			else if (!validatePhoneNumber(formState.phoneNumber)) alert("Số điện thoại không hợp lệ");
			else {
				alert("Vui lòng nhập đầy đủ thông tin");
			}
		}
	};

	const renderForm = () => {
		switch (currentForm) {
			case 1:
				return (
					<Form1
						onNext={handleNext}
						formState={formState}
						onFormStateChange={updateFormState}
					/>
				);
			case 2:
				return (
					<Form2
						onNext={handleNext}
						onPrevious={handlePrevious}
						formState={formState}
						onFormStateChange={updateFormState}
					/>
				);
			case 3:
				return (
					<Form3
						onNext={handleNext}
						onPrevious={handlePrevious}
						formState={formState}
						onFormStateChange={updateFormState}
					/>
				);
			case 4:
				return (
					<Form4
						onNext={handleNext}
						onPrevious={handlePrevious}
						formState={formState}
						onFormStateChange={updateFormState}
					/>
				);
			case 5:
				return (
					<Form5
						onPrevious={handlePrevious}
						formState={formState}
						onFormStateChange={updateFormState}
						submit={handleSubmit}
					/>
				);
			default:
				return <Form1 onNext={handleNext} />;
		}
	};
	return (
		<div style={{ ...styles.fontSize13, fontSize: "16px" }}>
			<Box sx={{ position: "relative" }}>
				<Box sx={{ ...styles.centerFlex }}>
					<img
						width={"100%"}
						height={"600px"}
						src={bg1nhuongquyen}
						alt="anh coffee"
						style={{ objectFit: "cover" }}
					/>
				</Box>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "black",
						opacity: "0.4",
					}}
				></Box>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						transform: "translate(0, -50%)",
						left: 0,
						right: 0,
						textAlign: "center",
						color: "white",
						padding: "0px 60px",
					}}
				>
					<Box
						sx={{
							fontSize: "55px",
							fontWeight: "900",
							"@media (max-width:900px)": {
								fontSize: "35px",
							},
						}}
					>
						Nhượng quyền Thương hiệu Cà Phê The Thanh
					</Box>
					<Box
						sx={{
							fontSize: "24px",
							fontWeight: "600",
							p: "30px 0",
							"@media (max-width:900px)": {
								fontSize: "20px",
							},
						}}
					>
						Chào mừng bạn tới với trang điền thông tin Nhượng Quyền cà phê The Thanh, vui lòng điền form bên dưới
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					p: "15px 90px",
					"@media (max-width:900px)": {
						p: "20px",
					},
				}}
			>
				<div
					style={{
						color: "black",
						fontSize: "26px",
						paddingBottom: "10px",
						fontWeight: "700",
					}}
				>
					NHƯỢNG QUYỀN THE THANH
				</div>
				<div style={{ fontSize: "19px" }}>Hoàn thành đơn đăng ký trực tuyến ngay bây giờ.</div>
			</Box>
			<Box
				sx={{
					...styles.flexCenter,
					width: "100vw",
					height: "100%",
				}}
			>
				<Box
					sx={{
						...styles.flexCenter,
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							position: "relative",
							marginBottom: "20px",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								width: "100%",
								height: "4px",
								backgroundColor: "gray",
								zIndex: 1,
							}}
						/>
						{Array.from({ length: 5 }).map((_, index) => (
							<Box
								key={index + 1}
								onClick={() => setCurrentForm(index + 1)}
								style={{
									width: currentForm === index + 1 ? "60px" : "40px",
									height: currentForm === index + 1 ? "60px" : "40px",
									borderRadius: "50%",
									backgroundColor: currentForm === index + 1 ? "black" : "gray",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "white",
									fontSize: "16px",
									fontWeight: "bold",
									zIndex: 2,
									position: "relative",
									cursor: "pointer",
								}}
							>
								{index + 1}
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					padding: "50px 200px",
					"@media (max-width:900px)": {
						padding: "20px",
					},
				}}
			>
				<div className="form-display">{renderForm()}</div>
			</Box>
		</div>
	);
};

export default FranchiseForm;
