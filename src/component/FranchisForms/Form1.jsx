import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styles } from "../../styles";
import React from "react";
const Form1 = React.memo(({ formState, onFormStateChange, onNext }) => {
  const [citizen, setCitizen] = React.useState("United States");
  const [permanent, setPermanent] = React.useState("United States");
  const handleCitizenChange = (event) => {
    setCitizen(event.target.value);
  };
  const handlePermanentChange = (event) => {
    setPermanent(event.target.value);
  };
  const provinces = [
    "An Giang",
    "Bà Rịa-Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
    "Phú Yên",
    "Cần Thơ",
    "Đà Nẵng",
    "Hải Phòng",
    "Hà Nội",
    "TP HCM",
  ];
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "16px" }}>
      <div style={{ fontSize: "24px", paddingBottom: "15px" }}>
        Thông tin cá nhân
      </div>
      <div
        style={{
          fontSize: "19px",
          borderBottom: "1px solid #d3d3d3",
          marginBottom: "20px",
        }}
      >
        Vui lòng cung cấp thông tin liên hệ của bạn.
      </div>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <InputLabel htmlFor="firstName" required>
              Họ của bạn
            </InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              name="firstName"
              value={formState?.firstName}
              onChange={onFormStateChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="lastName" required>
              Tên của bạn
            </InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              name="lastName"
              value={formState?.lastName}
              onChange={onFormStateChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="email" required>
              E-mail
            </InputLabel>
            <TextField
              type="email"
              fullWidth
              required
              name="email"
              value={formState?.email}
              onChange={onFormStateChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="phoneNumber" required>
              Số điện thoại
            </InputLabel>
            <TextField
              type="tel"
              fullWidth
              required
              name="phoneNumber"
              value={formState?.phoneNumber}
              onChange={onFormStateChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="national" required>
              Quốc Tịch
            </InputLabel>
            <TextField
              fullWidth
              required
              name="national"
              value={formState?.national}
              onChange={onFormStateChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="zipCode" required>
              Mã bưu điện
            </InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              name="zipCode"
              value={formState?.zipCode}
              onChange={onFormStateChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="city" required>
              Quận/ Huyện
            </InputLabel>
            <TextField
              fullWidth
              required
              name="city"
              value={formState?.city}
              onChange={onFormStateChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="state" required>
              Tỉnh/ Thành phố
            </InputLabel>
            <Select
              fullWidth
              labelId="select-label"
              name="state"
              value={formState?.state}
              onChange={onFormStateChange}
              label="State/Province"
            >
              {provinces.map((province, index) => (
                <MenuItem key={index} value={index + 1}>
                  {province}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="professionalBackground" required>
              Vui lòng cung cấp thêm thông tin về chuyên môn/ lĩnh vực yêu thích
              của bạn.
            </InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              name="professionalBackground"
              value={formState?.professionalBackground}
              onChange={onFormStateChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#464646",
            color: "#FFFFFF",
            borderRadius: "20px",
            "&:hover": {
              boxShadow: "1px 2px #888888",
              background: "black",
            },
          }}
          onClick={onNext}
        >
          Tiếp
        </Button>
      </Box>
    </Box>
  );
});
export default Form1;
