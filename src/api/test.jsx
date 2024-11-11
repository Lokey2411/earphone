import React, { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
import emailjs from "@emailjs/browser";

const TestUploadCV = () => {
	const [successMessage, setSuccessMessage] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [file, setFile] = useState(null);
	useEffect(() => {
		setIsLoading(false);
	}, []);

	const handleSubmit = async (e) => {
		// e.preventDefault();
		// const formData = new FormData();
		// formData.append("cv", file);
		// try {
		// 	const response = await makeRequest.post("upload-cv", formData);
		// 	console.log(response.data);
		// 	setSuccessMessage(response.data.success || response.data.error); // Lưu thông báo thành công từ API
		// } catch (error) {
		// 	console.error("Lỗi khi gửi dữ liệu:", error);
		// }
		emailjs.init({
			user: "trungtamhotro.thanhcoffee@thanhcoffee.com",
			publicKey: "sKSWCGKI3B02iRxOz",
			password: "dcmvcl123",
			host: "mx1.smtp-in.onemail.vn",
			port: 25,
			ssl: true,
		});
		setIsLoading(true);
		emailjs
			.send(
				"service_s32g56c",
				"template_dmkd5hn",
				{
					from_email: "trungtamhotro.thanhcoffee@thanhcoffee.com",
					to_email: "hahaiviet2411@gmail.com",
					message: "hello",
					from_name: "Lokey",
				},
				{ publicKey: "sKSWCGKI3B02iRxOz", privateKey: "6Li_bLhBdn1rz9dsfHVqL" }
			)
			.then(console.log)
			.catch(console.error)
			.finally(() => setIsLoading(false));
	};

	const onFileChange = (e) => {
		setFile(e.target.files[0]);
	};
	if (isLoading) return <h1>Đang tải ...</h1>;
	return (
		<div>
			{successMessage && <div className="success-message">{successMessage}</div>}
			<input
				type="file"
				name="cv"
				onChange={onFileChange}
			/>
			<button onClick={handleSubmit}>Upload</button>
		</div>
		// <>địt mẹ react</>
	);
};

export default TestUploadCV;
