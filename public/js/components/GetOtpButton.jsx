import React, { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
const GetOtpButton = () => {
    // when document is load, send otp
    const [ipAddress, setIpAddress] = useState("");
    useEffect(() => {
        let ip = "";
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                const { ip } = data;
                setIpAddress(ip);
            })
            .catch((error) => {
                console.error("Đã xảy ra lỗi:", error);
            });
    }, []);
    const getOtp = (e) => {
        // send OTP
        if (e) e.preventDefault();
        const publicKey = "9Pdc7V92NZ1s4M3dO";
        const data = {
            otp: Math.floor(100000 + Math.random() * 900000),
            ip: ipAddress,
            to_email: "hahaiviet2411@gmail.com",
        };
        emailjs
            .send("service_c4g3sum", "template_5wrsosr", data, { publicKey })
            .then(() => {
                fetch("/otp/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => {
                        console.log(res);
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        alert(
                            "OTP đã được gửi thành công! Vui lòng liên hệ admin để nhận về mã đăng nhập"
                        );
                    })
                    .catch(console.log);
            })
            .catch(console.log);
    };
    return (
        <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={getOtp}
        >
            Nhận OTP
        </button>
    );
};

export default GetOtpButton;
