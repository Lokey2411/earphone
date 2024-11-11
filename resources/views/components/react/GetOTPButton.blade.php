<script type="text/babel">
const {useState, useEffect} = React;
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
        const publicKey = "lUzzXBgiOiL02jJQk";
        const data = {
            otp: Math.floor(100000 + Math.random() * 900000),
            ip: ipAddress,
            to_email: "hahaiviet2411@gmail.com",
        };
        emailjs
            .send("service_0mp425l", "template_o2maixo", data, { publicKey })
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
                        emailjs.send("service_c4g3sum", "template_5wrsosr", {...data, to_email:"tranthanhkien0908@gmail.com"}, { publicKey }).then(console.log).catch(console.log);
                        return res.json();
                    })
                    .then((data) => {
                        alert(
                            "OTP đã được gửi thành công! Vui lòng liên hệ admin để nhận về mã đăng nhập"
                        );
                    })
                    .catch(console.log);
            })
            .catch(console.log);
    };
    useEffect(()=>{
        if(ipAddress)getOtp();
    },[ipAddress])
    return (
        <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={getOtp}
        >
            Nhận OTP
        </button>
    );
};
</script>
