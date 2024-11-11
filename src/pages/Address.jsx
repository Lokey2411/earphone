import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Dialog,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import { makeStyles } from "@mui/styles";
import CustomerSearchIcon from "../component/svg/icon/CustomerSearchIcon";

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    "&.active": {
      backgroundColor: "#3F2021",
      color: "white",
    },
  },
});
const Address = () => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState("button1"); // Nút 'button1' mặc định active
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };
  const handleClickOrder = () => {
    setIsClicked((prev) => !prev);
  };
  useEffect(
    (handleClickOrder) => {
      console.log("isClicked changed:", isClicked);
    },
    [isClicked]
  );
  const rows = [
    { day: "Thứ Hai", sameValue: "08:00 SÁNG - 23:00 TỐI" },
    { day: "Thứ Ba", sameValue: "08:00 SÁNG - 23:00 TỐI" },
    { day: "Thứ Tư", sameValue: "08:00 SÁNG - 23:00 TỐI" },
    { day: "Thứ Năm", sameValue: "08:00 SÁNG - 23:00 TỐI" },
    { day: "Thứ Sáu", sameValue: "08:00 SÁNG - 23:00 TỐI" },
    { day: "Thứ Bảy", sameValue: "08:00 SÁNG - 23:00 TỐI" },
    { day: "Chủ Nhật", sameValue: "08:00 SÁNG - 23:00 TỐI" },
  ];

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  console.log(currentTime);
  // Xác định giờ mở cửa và đóng cửa
  const openHour = 8; // 8 giờ sáng
  const closeHour = 22; // 10 giờ tối

  // Kiểm tra xem cửa hàng đang mở hay đóng
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const TheThanhLocation = { lat: 21.035020222248008, lng: 105.82728560447777 };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Bán kính Trái Đất tính bằng km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Khoảng cách tính bằng km
    return distance;
  }

  const distance = userLocation.lat
    ? calculateDistance(
        userLocation.lat,
        userLocation.lng,
        TheThanhLocation.lat,
        TheThanhLocation.lng
      )
    : null;
  const handleShareLocationClick = () => {
    // Nội dung mới sau khi chia sẻ vị trí
    const newContent = (
      <Box sx={{ p: "0 342px" }}>
        <Box>
          <h2>Vị trí hiện tại của bạn:</h2>
          <p>Vĩ độ: {userLocation.lat}</p>
          <p>Toạ độ: {userLocation.lng}</p>
        </Box>
        <Box
          sx={{
            border: "0.25px solid #000000",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
            p: "45px 40px",
            cursor: "pointer",
          }}
          onClick={handleClickOrder}
        >
          <Box>
            <Box sx={{ fontSize: "24px", fontWeight: "600" }}>147 Đội Cấn</Box>
            <Box sx={{ display: "flex", fontSize: "15px", gap: "10px" }}>
              <Box>
                {userLocation.lat && userLocation.lng ? (
                  <Box>{distance.toFixed(2)} km</Box>
                ) : (
                  <CircularProgress />
                )}
              </Box>
              <Box>•</Box>
              <Box
                sx={{
                  color: isOpen ? "green" : "red",
                }}
              >
                {isOpen ? "Mở cửa" : "Đóng cửa"}
              </Box>
            </Box>
          </Box>
          <Box>
            <svg
              width="31"
              height="28"
              viewBox="0 0 31 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5013 27.6252L13.3867 25.7293C10.9319 23.5175 8.90234 21.6095 7.29818 20.0054C5.69401 18.4012 4.41797 16.9611 3.47005 15.6851C2.52214 14.409 1.85981 13.2363 1.48307 12.1668C1.10634 11.0974 0.917969 10.0036 0.917969 8.88558C0.917969 6.60086 1.68359 4.69287 3.21484 3.16162C4.74609 1.63037 6.65408 0.864746 8.9388 0.864746C10.2027 0.864746 11.4058 1.13211 12.5482 1.66683C13.6905 2.20155 14.6749 2.95502 15.5013 3.92725C16.3277 2.95502 17.3121 2.20155 18.4544 1.66683C19.5968 1.13211 20.7999 0.864746 22.0638 0.864746C24.3485 0.864746 26.2565 1.63037 27.7878 3.16162C29.319 4.69287 30.0846 6.60086 30.0846 8.88558C30.0846 10.0036 29.8963 11.0974 29.5195 12.1668C29.1428 13.2363 28.4805 14.409 27.5326 15.6851C26.5846 16.9611 25.3086 18.4012 23.7044 20.0054C22.1003 21.6095 20.0707 23.5175 17.6159 25.7293L15.5013 27.6252ZM15.5013 23.6877C17.8346 21.5974 19.7548 19.8048 21.2617 18.3101C22.7687 16.8153 23.9596 15.5149 24.8346 14.409C25.7096 13.3031 26.3173 12.3187 26.6576 11.4559C26.9978 10.593 27.168 9.73627 27.168 8.88558C27.168 7.42725 26.6819 6.21197 25.7096 5.23975C24.7374 4.26752 23.5221 3.78141 22.0638 3.78141C20.9214 3.78141 19.8641 4.10346 18.8919 4.74756C17.9197 5.39166 17.2513 6.21197 16.8867 7.2085H14.1159C13.7513 6.21197 13.0829 5.39166 12.1107 4.74756C11.1385 4.10346 10.0812 3.78141 8.9388 3.78141C7.48047 3.78141 6.26519 4.26752 5.29297 5.23975C4.32075 6.21197 3.83464 7.42725 3.83464 8.88558C3.83464 9.73627 4.00477 10.593 4.34505 11.4559C4.68533 12.3187 5.29297 13.3031 6.16797 14.409C7.04297 15.5149 8.23394 16.8153 9.74088 18.3101C11.2478 19.8048 13.168 21.5974 15.5013 23.6877Z"
                fill="#1C1B1F"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    );
    setContent(newContent);
  };

  const lancanContent = (
    <Box
      sx={{
        display: "flow",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <svg
          width="208"
          height="234"
          viewBox="0 0 208 234"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6992 233.166C13.8579 233.166 9.66061 231.39 6.1073 227.836C2.554 224.283 0.777344 220.086 0.777344 215.244V68.3712C0.777344 63.5299 2.554 59.3326 6.1073 55.7793C9.66061 52.2238 13.8579 50.4461 18.6992 50.4461H54.051C54.051 36.44 58.8255 24.5579 68.3743 14.7998C77.9253 5.04164 89.7049 0.162598 103.713 0.162598C117.894 0.162598 129.924 5.01684 139.803 14.7253C149.68 24.4338 154.618 36.3407 154.618 50.4461H189.97C194.811 50.4461 199.008 52.2238 202.562 55.7793C206.115 59.3326 207.892 63.5299 207.892 68.3712V215.244C207.892 220.086 206.115 224.283 202.562 227.836C199.008 231.39 194.811 233.166 189.97 233.166H18.6992ZM18.6992 223.209H189.97C191.961 223.209 193.786 222.379 195.445 220.72C197.104 219.061 197.934 217.236 197.934 215.244V68.3712C197.934 66.3799 197.104 64.5547 195.445 62.8956C193.786 61.2344 191.961 60.4038 189.97 60.4038H18.6992C16.7079 60.4038 14.8827 61.2344 13.2236 62.8956C11.5646 64.5547 10.735 66.3799 10.735 68.3712V215.244C10.735 217.236 11.5646 219.061 13.2236 220.72C14.8827 222.379 16.7079 223.209 18.6992 223.209ZM104.335 125.127C118.39 125.127 130.431 120.115 140.457 110.092C150.48 100.068 155.492 88.0287 155.492 73.973H145.534C145.534 85.3405 141.458 95.049 133.305 103.098C125.154 111.146 115.487 115.169 104.305 115.169C93.1234 115.169 83.5077 111.146 75.4582 103.098C67.4088 95.049 63.3841 85.3405 63.3841 73.973H53.4265C53.4265 88.0287 58.3972 100.068 68.3387 110.092C78.2802 120.115 90.2788 125.127 104.335 125.127ZM64.0055 50.4461H144.664C144.664 39.2446 140.742 29.7239 132.9 21.8837C125.058 14.0414 115.536 10.1203 104.335 10.1203C93.1331 10.1203 83.6112 14.0414 75.7689 21.8837C67.9266 29.7239 64.0055 39.2446 64.0055 50.4461Z"
            fill="#006241"
          />
        </svg>
      </Box>
      <Box sx={{ fontSize: "32px", fontWeight: "600" }}>
        Tìm một địa điểm gần đây
      </Box>
      <Box sx={{ fontSize: "16px", fontWeight: "500", pt: "25px", pb: "30px" }}>
        Hãy cho chúng tôi biết bạn đang ở đâu để chúng tôi có thể giới thiệu các
        địa điểm gần đó.
      </Box>
      <Box
        sx={{
          p: "15px 30px",
          color: "white",
          background: "#006241",
          borderRadius: "32px",
          border: "1px solid #006241",
          display: "inline-block",
          width: "fit-content",
          fontSize: "32px",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={handleShareLocationClick}
      >
        Chia sẻ vị trí của tôi
      </Box>
    </Box>
  );
  const yeuthichContent = (
    <Box
      sx={{
        display: "flow",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <svg
          width="234"
          height="208"
          viewBox="0 0 234 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M117.334 207.665L110.04 200.921C88.3831 181.129 70.5141 164.132 56.4325 149.932C42.3509 135.73 31.1775 123.223 22.9124 112.412C14.6472 101.599 8.90086 91.8634 5.67333 83.2056C2.4458 74.5478 0.832031 65.9493 0.832031 57.4101C0.832031 41.3501 6.27957 27.8629 17.1746 16.9484C28.0697 6.03392 41.5408 0.57666 57.5878 0.57666C69.389 0.57666 80.3553 3.73839 90.4866 10.0618C100.618 16.3853 109.567 25.6289 117.334 37.7925C125.731 25.3117 134.863 15.9894 144.731 9.82562C154.597 3.65965 165.38 0.57666 177.08 0.57666C193.127 0.57666 206.598 6.03392 217.493 16.9484C228.388 27.8629 233.836 41.3501 233.836 57.4101C233.836 65.9493 232.222 74.5478 228.994 83.2056C225.767 91.8634 220.03 101.581 211.784 112.357C203.539 123.133 192.365 135.64 178.264 149.877C164.163 164.114 146.285 181.129 124.628 200.921L117.334 207.665ZM117.334 194.3C138.52 174.973 155.954 158.418 169.637 144.634C183.321 130.851 194.194 118.804 202.254 108.496C210.314 98.1858 215.933 89.0447 219.111 81.0729C222.289 73.1034 223.878 65.2309 223.878 57.4554C223.878 44.0146 219.43 32.8347 210.535 23.9159C201.64 14.9948 190.512 10.5343 177.151 10.5343C166.202 10.5343 156.204 13.7252 147.158 20.1069C138.112 26.4864 129.598 36.4064 121.615 49.8666H112.978C104.879 36.456 96.3085 26.5479 87.2667 20.1425C78.2248 13.7371 68.3082 10.5343 57.5166 10.5343C44.3217 10.5343 33.2346 14.9948 24.2554 23.9159C15.2783 32.8347 10.7897 44.061 10.7897 57.5946C10.7897 65.3226 12.3916 73.1767 15.5954 81.1571C18.8014 89.1375 24.3783 98.2807 32.3264 108.587C40.2722 118.895 51.1576 130.92 64.9825 144.66C78.8074 158.401 96.2578 174.948 117.334 194.3Z"
            fill="#006241"
          />
        </svg>
      </Box>
      <Box sx={{ fontSize: "32px", fontWeight: "600" }}>
        Đăng nhập để lưu yêu thích
      </Box>
      <Box sx={{ fontSize: "16px", fontWeight: "500", pt: "25px", pb: "30px" }}>
        Để đặt vị trí yêu thích, trước tiên hãy đăng nhập hoặc đăng ký tài
        khoản.
      </Box>
      <Box
        sx={{
          p: "15px 30px",
          color: "white",
          background: "#006241",
          borderRadius: "32px",
          border: "1px solid #006241",
          display: "inline-block",
          fontSize: "32px",
          fontWeight: "700",
          width: "fit-content",
          cursor: "pointer",
        }}
      >
        Đăng nhập
      </Box>
    </Box>
  );
  const gandayContent = (
    <Box
      sx={{
        display: "flow",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <Box>
        <svg
          width="205"
          height="234"
          viewBox="0 0 205 234"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.2432 233.166C37.3933 233.166 33.3147 231.679 30.0073 228.706C26.6999 225.736 24.8035 221.92 24.3181 217.26L0.273438 0.162109H204.398L180.353 217.26C179.867 221.92 177.971 225.736 174.664 228.706C171.356 231.679 167.278 233.166 162.428 233.166H42.2432ZM18.2503 72.8528H71.3169C75.3276 68.7536 80.0243 65.5714 85.4072 63.3061C90.7878 61.0408 96.4306 59.9081 102.336 59.9081C108.24 59.9081 113.883 61.0408 119.264 63.3061C124.647 65.5714 129.343 68.7536 133.354 72.8528H186.375L193.171 10.1198H11.2505L18.2503 72.8528ZM102.336 137.576C111.694 137.576 119.677 134.272 126.283 127.664C132.889 121.058 136.192 113.076 136.192 103.719C136.192 94.3603 132.889 86.3778 126.283 79.7717C119.677 73.1656 111.707 69.8626 102.374 69.8626C93.0391 69.8626 85.0566 73.1656 78.4267 79.7717C71.7948 86.3778 68.4788 94.3474 68.4788 103.68C68.4788 113.016 71.7829 120.998 78.3912 127.628C84.9972 134.26 92.9787 137.576 102.336 137.576ZM19.2406 82.8072L34.2661 216.237C34.4322 218.229 35.3027 219.889 36.8777 221.218C38.4548 222.545 40.239 223.208 42.2303 223.208H162.428C164.419 223.208 166.203 222.545 167.78 221.218C169.357 219.889 170.229 218.229 170.395 216.237L185.107 82.8072H140.995C142.738 85.8945 144.032 89.2008 144.878 92.726C145.724 96.2513 146.147 99.9157 146.147 103.719C146.147 115.984 141.912 126.353 133.441 134.825C124.969 143.295 114.601 147.53 102.336 147.53C90.0704 147.53 79.7018 143.295 71.2295 134.825C62.7594 126.353 58.5243 115.984 58.5243 103.719C58.5243 99.9157 58.9472 96.2513 59.7929 92.726C60.6386 89.2008 61.9331 85.8945 63.6763 82.8072H19.2406ZM42.2432 223.208H63.6763H58.5243H146.147H140.995H162.428H42.2432Z"
            fill="#006241"
          />
        </svg>
      </Box>
      <Box sx={{ fontSize: "32px", fontWeight: "600" }}>
        Đăng nhập để xem các địa điểm gần đây
      </Box>
      <Box sx={{ fontSize: "16px", fontWeight: "500", pt: "25px", pb: "30px" }}>
        Đầu tiên đăng nhập hoặc đăng ký tài khoản.
      </Box>
      <Box
        sx={{
          p: "15px 30px",
          color: "white",
          background: "#006241",
          borderRadius: "32px",
          border: "1px solid #006241",
          display: "inline-block",
          fontSize: "32px",
          fontWeight: "700",
          width: "fit-content",
          cursor: "pointer",
        }}
      >
        Đăng nhập
      </Box>
    </Box>
  );
  const [content, setContent] = useState(lancanContent);
  const handleClick = (button) => {
    setActiveButton(button);
  };
  const handleButtonClick = (index, newContent) => {
    setSelected(index);
    setContent(newContent);
    setIsClicked(false);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <NavbarOrder />
      <Box
        sx={{
          pt: "101px",
        }}
      >
        <Box
          sx={{
            ...styles.fontSize13,
            backgroundColor: "#006241",
            fontFamily: "Inter",
            fontWeight: "700",
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            borderBottom: "1px solid #bebebe",
            color: "#FFFFFF",
            justifyContent: "center",
          }}
        >
          <Box sx={{ fontSize: "36px", pr: "318px" }}>Địa điểm</Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box sx={{ fontSize: "28px" }}>Bản đồ</Box>
            <Box>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 34.375L11.5314 30.1562L3.03109 33.4998C2.46859 33.7708 1.92703 33.737 1.40641 33.3986C0.885469 33.0598 0.625 32.5728 0.625 31.9375V5.74984C0.625 5.34359 0.742187 4.98422 0.976562 4.67172C1.21094 4.35922 1.52078 4.12484 1.90609 3.96859L11.5314 0.625L23.5 4.81234L31.9689 1.46875C32.5314 1.21875 33.073 1.25781 33.5936 1.58594C34.1145 1.91406 34.375 2.39578 34.375 3.03109V29.4377C34.375 29.802 34.2578 30.1197 34.0234 30.3906C33.7891 30.6616 33.4895 30.8647 33.1248 31L23.5 34.375ZM21.8125 30.4998V7.40641L13.1875 4.46875V27.5627L21.8125 30.4998ZM24.9377 30.4998L31.2498 28.4064V4.99984L24.9377 7.40641V30.4998ZM3.75016 29.9688L10.0623 27.5627V4.46875L3.75016 6.56266V29.9688Z"
                  fill="white"
                />
              </svg>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            pt: "30px",
            pb: "50px",
          }}
        >
          <ButtonGroup>
            <Button
              className={`${classes.button} ${
                activeButton === "button1" ? "active" : ""
              }`}
              onClick={() => handleClick("button1")}
            >
              ĐẶT HÀNG
            </Button>
            <Button
              className={`${classes.button} ${
                activeButton === "button2" ? "active" : ""
              }`}
              onClick={() => handleClick("button2")}
            >
              GIAO HÀNG
            </Button>
          </ButtonGroup>
          <Box>
            <TextField
              variant="outlined"
              placeholder="ĐỊA CHỈ CỦA BẠN"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ width: "850px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CustomerSearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: "50px",
          }}
        >
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              gap: 2,
              cursor: "pointer",
              justifyContent: "space-around",
              pb: "15px",
              mb: "70px",
            }}
          >
            <Box
              sx={{
                pb: "15px",
                textAlign: "center",
                width: "33%",
                borderBottom:
                  selected === 1 ? "5px solid green" : "1px solid white",
              }}
              onClick={() => handleButtonClick(1, lancanContent)}
            >
              LÂN CẬN
            </Box>
            <Box
              sx={{
                pb: "15px",
                textAlign: "center",
                width: "33%",
                borderBottom:
                  selected === 2 ? "5px solid green" : "1px solid white",
              }}
              onClick={() => handleButtonClick(2, yeuthichContent)}
            >
              YÊU THÍCH
            </Box>
            <Box
              sx={{
                pb: "15px",
                textAlign: "center",
                width: "33%",
                borderBottom:
                  selected === 3 ? "5px solid green" : "1px solid white",
              }}
              onClick={() => handleButtonClick(3, gandayContent)}
            >
              GẦN ĐÂY
            </Box>
          </Box>
          <Typography variant="h6">{content}</Typography>
        </Box>
      </Box>
      <Box sx={{ pb: "100px" }}>
        {isClicked && (
          <Box
            sx={{
              border: "1px solid #000",
              m: "0 342px",
              pt: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                gap: "50px",
              }}
            >
              <Box onClick={handleClickOpen}>
                <Box sx={{ cursor: "pointer" }}>
                  <Box>
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="40" cy="40" r="40" fill="#006241" />
                      <circle cx="40" cy="40" r="22" fill="white" />
                      <path
                        d="M37.9815 51V34.6364H41.8381V51H37.9815ZM39.9205 32.3139C39.3097 32.3139 38.7841 32.1115 38.3438 31.7067C37.9034 31.2947 37.6832 30.8011 37.6832 30.2259C37.6832 29.6435 37.9034 29.1499 38.3438 28.745C38.7841 28.3331 39.3097 28.1271 39.9205 28.1271C40.5384 28.1271 41.0639 28.3331 41.4972 28.745C41.9375 29.1499 42.1577 29.6435 42.1577 30.2259C42.1577 30.8011 41.9375 31.2947 41.4972 31.7067C41.0639 32.1115 40.5384 32.3139 39.9205 32.3139Z"
                        fill="#006241"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                    }}
                  >
                    Thông tin
                  </Box>
                </Box>
                <Dialog
                  open={open}
                  onClick={handleClose}
                  maxWidth="720px"
                  sx={{ ...styles.fontSize13 }}
                >
                  <Box sx={{ position: "absolute", right: 0 }}>
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.5 24.9998C49.5 38.5308 38.5313 49.5 25.0004 49.5C11.4695 49.5 0.5 38.5308 0.5 24.9998C0.5 11.4688 11.4695 0.5 25.0004 0.5C38.5313 0.5 49.5 11.4688 49.5 24.9998Z"
                        fill="black"
                        stroke="url(#pattern0_157_1589)"
                      />
                      <path
                        d="M25.0004 50C38.8074 50 50 38.8069 50 24.9998C50 11.1926 38.8074 0 25.0004 0C11.1934 0 0 11.1926 0 24.9998C0 38.8069 11.1934 50 25.0004 50Z"
                        fill="black"
                      />
                      <path
                        d="M16.3086 16.3071L33.6936 33.6927"
                        stroke="white"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M33.6936 16.3071L16.3086 33.6927"
                        stroke="white"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <pattern
                          id="pattern0_157_1589"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use transform="translate(-0.59134) scale(0.00118624)" />
                        </pattern>
                        <image id="image0_157_1589" width="1840" height="843" />
                      </defs>
                    </svg>
                  </Box>
                  <iframe
                    title="cà phê thế thanh"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9469145445155!2d105.8246999758019!3d21.034809980616057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab000b070be5%3A0xf334bd0df60de4df!2zQ8OgIFBow6ogVGhlIFRoYW5o!5e0!3m2!1svi!2s!4v1722502334282!5m2!1svi!2s"
                    width="720"
                    height="250"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <Box sx={{ p: "20px 50px", fontSize: "16px" }}>
                    <Box
                      sx={{ fontSize: "32px", fontWeight: "700", pb: "16px" }}
                    >
                      147 Đội Cấn
                    </Box>
                    <Box>
                      <a
                        href="https://www.google.com/maps/place/C%C3%A0+Ph%C3%AA+The+Thanh/@21.03481,105.8247,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab000b070be5:0xf334bd0df60de4df!8m2!3d21.03481!4d105.8272749!16s%2Fg%2F11vzqb16nm?hl=vi-VN&entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "underline",
                          fontWeight: "600",
                        }}
                      >
                        Chỉ đường
                      </a>
                    </Box>
                    <Box sx={{ p: "5px 0" }}>
                      147 P. Đội Cấn, Ngọc Hồ, Ba Đình, Hà Nội, Việt Nam{" "}
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #000000", pb: "25px" }}>
                      0988.888.888
                    </Box>
                    <Box
                      sx={{
                        fontSize: "32px",
                        fontWeight: "700",
                        pt: "25px",
                        pb: "25px",
                      }}
                    >
                      Cách đặt hàng
                    </Box>
                    <Box sx={{ display: "flex", gap: "25px" }}>
                      <Box>
                        <svg
                          width="16"
                          height="19"
                          viewBox="0 0 16 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.51925 18.5C2.30675 18.5 2.12867 18.4281 1.985 18.2843C1.84117 18.1406 1.76925 17.9625 1.76925 17.75V15.777C1.45642 15.5398 1.16667 15.2043 0.9 14.7703C0.633333 14.3363 0.5 13.8488 0.5 13.3077V4C0.5 2.78967 1.10158 1.90375 2.30475 1.34225C3.50775 0.78075 5.40608 0.5 7.99975 0.5C10.6871 0.5 12.6089 0.769834 13.7653 1.3095C14.9218 1.849 15.5 2.74583 15.5 4V13.3077C15.5 13.8488 15.3667 14.3363 15.1 14.7703C14.8333 15.2043 14.5436 15.5398 14.2308 15.777V17.75C14.2308 17.9625 14.1588 18.1406 14.015 18.2843C13.8713 18.4281 13.6932 18.5 13.4808 18.5H12.8652C12.6529 18.5 12.4748 18.4281 12.331 18.2843C12.1873 18.1406 12.1155 17.9625 12.1155 17.75V16.5H3.8845V17.75C3.8845 17.9625 3.81267 18.1406 3.669 18.2843C3.52517 18.4281 3.34708 18.5 3.13475 18.5H2.51925ZM2 8.5H14V4.76925H2V8.5ZM4.50225 13.8077C4.86608 13.8077 5.17458 13.6803 5.42775 13.4255C5.68108 13.1708 5.80775 12.8616 5.80775 12.4978C5.80775 12.1339 5.68033 11.8254 5.4255 11.5723C5.17083 11.3189 4.86158 11.1923 4.49775 11.1923C4.13392 11.1923 3.82542 11.3197 3.57225 11.5745C3.31892 11.8292 3.19225 12.1384 3.19225 12.5022C3.19225 12.8661 3.31967 13.1746 3.5745 13.4277C3.82917 13.6811 4.13842 13.8077 4.50225 13.8077ZM11.5023 13.8077C11.8661 13.8077 12.1746 13.6803 12.4277 13.4255C12.6811 13.1708 12.8077 12.8616 12.8077 12.4978C12.8077 12.1339 12.6803 11.8254 12.4255 11.5723C12.1708 11.3189 11.8616 11.1923 11.4977 11.1923C11.1339 11.1923 10.8254 11.3197 10.5723 11.5745C10.3189 11.8292 10.1923 12.1384 10.1923 12.5022C10.1923 12.8661 10.3197 13.1746 10.5745 13.4277C10.8292 13.6811 11.1384 13.8077 11.5023 13.8077ZM2.277 3.26925H13.7848C13.5731 2.87058 13.0372 2.55933 12.177 2.3355C11.3167 2.11183 9.93458 2 8.03075 2C6.15775 2 4.79108 2.117 3.93075 2.351C3.07042 2.585 2.51917 2.89108 2.277 3.26925ZM4 15H12C12.55 15 13.0208 14.8042 13.4125 14.4125C13.8042 14.0208 14 13.55 14 13V10H2V13C2 13.55 2.19583 14.0208 2.5875 14.4125C2.97917 14.8042 3.45 15 4 15Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </Box>
                      <Box>Tới cửa hàng</Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: "25px", p: "5px 0" }}>
                      <Box>
                        <svg
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.1155 18.827H8.8845V17.9423H5.1155V18.827ZM2.30775 21.5C1.80258 21.5 1.375 21.325 1.025 20.975C0.675 20.625 0.5 20.1974 0.5 19.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H11.6923C12.1974 0.5 12.625 0.675 12.975 1.025C13.325 1.375 13.5 1.80258 13.5 2.30775V19.6923C13.5 20.1974 13.325 20.625 12.975 20.975C12.625 21.325 12.1974 21.5 11.6923 21.5H2.30775ZM2 16.7693V19.6923C2 19.7693 2.03208 19.8398 2.09625 19.9038C2.16025 19.9679 2.23075 20 2.30775 20H11.6923C11.7692 20 11.8398 19.9679 11.9038 19.9038C11.9679 19.8398 12 19.7693 12 19.6923V16.7693H2ZM2 15.2693H12V4.75H2V15.2693ZM2 3.25H12V2.30775C12 2.23075 11.9679 2.16025 11.9038 2.09625C11.8398 2.03208 11.7692 2 11.6923 2H2.30775C2.23075 2 2.16025 2.03208 2.09625 2.09625C2.03208 2.16025 2 2.23075 2 2.30775V3.25Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </Box>
                      <Box>Mang về</Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "15px",
                        borderBottom: "1px solid #000000",
                        pb: "25px",
                      }}
                    >
                      <Box>
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 24 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 13.75C2.96417 13.75 2.08017 13.384 1.348 12.652C0.616 11.9198 0.25 11.0358 0.25 10C0.25 9.05633 0.562167 8.23392 1.1865 7.53275C1.81083 6.83142 2.59483 6.42433 3.5385 6.3115H3.904L2.7615 5.34625H0.25V4.15375H4.26925L6.98075 5.76925L11.0385 4.25H14.6693L12.7155 1.75H10.25V0.25H13.4345L15.4193 2.79625L18.577 1.404V3.76925H16.2L18.3923 6.60775C18.6423 6.48208 18.9028 6.39108 19.174 6.33475C19.4452 6.27825 19.7205 6.25 20 6.25C21.0358 6.25 21.9198 6.616 22.652 7.348C23.384 8.08017 23.75 8.96417 23.75 10C23.75 11.0358 23.384 11.9198 22.652 12.652C21.9198 13.384 21.0358 13.75 20 13.75C18.9642 13.75 18.0802 13.384 17.348 12.652C16.616 11.9198 16.25 11.0358 16.25 10C16.25 9.53717 16.3356 9.09483 16.5068 8.673C16.6779 8.25133 16.918 7.86675 17.227 7.51925L16.3808 6.45775L12.8845 11.75H10.0963L7.75 9.7115V10.1538C7.69867 11.1589 7.31208 12.0096 6.59025 12.7057C5.86858 13.4019 5.00517 13.75 4 13.75ZM4 12.25C4.627 12.25 5.15875 12.0317 5.59525 11.5953C6.03175 11.1588 6.25 10.627 6.25 10C6.25 9.373 6.03175 8.84125 5.59525 8.40475C5.15875 7.96825 4.627 7.75 4 7.75C3.373 7.75 2.84125 7.96825 2.40475 8.40475C1.96825 8.84125 1.75 9.373 1.75 10C1.75 10.627 1.96825 11.1588 2.40475 11.5953C2.84125 12.0317 3.373 12.25 4 12.25ZM20 12.25C20.627 12.25 21.1588 12.0317 21.5953 11.5953C22.0318 11.1588 22.25 10.627 22.25 10C22.25 9.373 22.0318 8.84125 21.5953 8.40475C21.1588 7.96825 20.627 7.75 20 7.75C19.373 7.75 18.8413 7.96825 18.4048 8.40475C17.9683 8.84125 17.75 9.373 17.75 10C17.75 10.627 17.9683 11.1588 18.4048 11.5953C18.8413 12.0317 19.373 12.25 20 12.25ZM12.0848 10.25L15.0615 5.75H11.3115L7.26925 7.25375L10.6538 10.25H12.0848Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </Box>
                      <Box>Dịch vụ ăn uống tại chỗ</Box>
                    </Box>
                    <Box
                      sx={{ fontSize: "32px", fontWeight: "700", pt: "25px" }}
                    >
                      Thời gian phục vụ
                    </Box>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell style={{ textAlign: "left" }}>
                                {row.day}
                              </TableCell>
                              <TableCell style={{ textAlign: "right" }}>
                                {row.sameValue}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box
                      sx={{ fontSize: "32px", fontWeight: "700", pt: "25px" }}
                    >
                      Gửi xe qua giờ
                    </Box>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell style={{ textAlign: "left" }}>
                                {row.day}
                              </TableCell>
                              <TableCell style={{ textAlign: "right" }}>
                                {row.sameValue}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        p: "18px 50px",
                        color: "white",
                        background: "#006241",
                        borderRadius: "50px",
                        display: "inline-block",
                        mb: "20px",
                        width: "fit-content",
                      }}
                    >
                      Đặt hàng tại đây
                    </Box>
                  </Box>
                </Dialog>
              </Box>
              <Box>
                <Box>
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#006241" />
                  </svg>
                </Box>
                <Box sx={{ fontSize: "17px", fontWeight: "600" }}>Đặt hàng</Box>
              </Box>
            </Box>
            {isOpen ? (
              <Box sx={{ pb: "10px" }}></Box>
            ) : (
              <Box
                sx={{
                  textAlign: "center",
                  background: "#EFEBE5",
                  mt: "15px",
                  p: "15px 0",
                  fontSize: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </Box>
                <Box>
                  Địa điểm đã đóng. Hiện tại không thể đặt hàng qua thiết bị di
                  động.
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Address;
