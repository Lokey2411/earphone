import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "../../styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Form2 = ({ formState, onFormStateChange, onNext, onPrevious }) => {
  const [options, setOptions] = useState([
    { city: "", state: "" }, // Mảng ban đầu với một cặp TextField và Select
  ]);

  const handleChange = (index, field, value) => {
    const updatedOptions = [...options];
    updatedOptions[index][field] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    if (options.length < 3) {
      setOptions([...options, { city: "", state: "" }]);
    }
  };
  const deleteOption = () => {
    if (options.length > 1) {
      setOptions(options.slice(0, -1));
    }
  };
  const [checkedValue1, setCheckedValue1] = useState("");
  const [checkedValue2, setCheckedValue2] = useState("");
  const handleChange1 = (event) => {
    setCheckedValue1(event.target.checked ? event.target.value : "");
  };
  const handleChange2 = (event) => {
    setCheckedValue2(event.target.checked ? event.target.value : "");
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
        Thông tin nhu cầu kinh doanh
      </div>
      <div
        style={{
          fontSize: "19px",
          borderBottom: "1px solid #d3d3d3",
          marginBottom: "20px",
        }}
      >
        Bạn quan tâm tới việc mở rộng hoạt động kinh doanh tại khu vực nào?
      </div>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box sx={{ fontSize: "16px" }}>
              Tỉnh/ Thành phố nào bạn quan tâm đến việc phát triển? (Bạn có thể
              thêm tối đa 3 tùy chọn) *
            </Box>
          </Grid>
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <Grid item xs={5}>
                <InputLabel htmlFor={`city-${index}`} required>
                  Quận/ Huyện
                </InputLabel>
                <TextField
                  fullWidth
                  required
                  id={`city-${index}`}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  name={`city-${index}`}
                  value={formState[`city-${index}`]}
                  onChange={onFormStateChange}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel htmlFor={`state-${index}`} required>
                  Tỉnh/ Thành phố
                </InputLabel>
                <Select
                  fullWidth
                  id={`state-${index}`}
                  name={`state-${index}`}
                  value={formState[`state-${index}`]}
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
              <Grid item xs={1}>
                <Box sx={{ fontSize: "40px" }} onClick={addOption}>
                  <AddIcon />
                </Box>
                <Box sx={{ fontSize: "40px" }} onClick={deleteOption}>
                  <RemoveIcon />
                </Box>
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12}>
            <Box>Bạn đang muốn phát triển bao nhiêu cửa hàng?</Box>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    name="numShopsRange"
                    checked={formState.numShopsRange === "1 đến 5"}
                    onChange={onFormStateChange}
                    value="1 đến 5"
                  />
                }
                label="1 đến 5"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="numShopsRange"
                    checked={formState.numShopsRange === "6 đến 14"}
                    onChange={onFormStateChange}
                    value="6 đến 14"
                  />
                }
                label="6 đến 14"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="numShopsRange"
                    checked={formState.numShopsRange === "15+"}
                    onChange={onFormStateChange}
                    value="15+"
                  />
                }
                label="15+"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Box>
              Bạn có muốn xây dựng trang web cho cửa hàng của minh không?
            </Box>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    name="hasPotentialWeb"
                    checked={formState.hasPotentialWeb === "có"}
                    onChange={onFormStateChange}
                    value="có"
                  />
                }
                label="Có"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="hasPotentialWeb"
                    checked={formState.hasPotentialWeb === "không"}
                    onChange={onFormStateChange}
                    value="không"
                  />
                }
                label="không"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#afafaf",
            color: "#FFFFFF",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#6d6969",
            },
          }}
          onClick={onPrevious}
        >
          Trước
        </Button>
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
};
export default Form2;
