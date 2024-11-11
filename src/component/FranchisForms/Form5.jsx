import { Box, Button, Grid, InputLabel, TextField } from "@mui/material";
import { styles } from "../../styles";
const Form5 = ({ formState, onFormStateChange, onPrevious, submit }) => {
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "16px" }}>
      <div style={{ fontSize: "24px", paddingBottom: "15px" }}>
        Cơ cấu sở hữu
      </div>
      <div
        style={{
          fontSize: "19px",
          borderBottom: "1px solid #d3d3d3",
          marginBottom: "20px",
        }}
      >
        Tỉ lệ Cấu trúc sở hữu
      </div>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <InputLabel
              htmlFor="firstname"
              required
              sx={{
                whiteSpace: "normal",
                width: "100%",
                display: "block",
                mb: "8px",
              }}
            >
              Vui lòng cung cấp thông tin về mô hình sở hữu hoạt động kinh doanh
              của bạn hiện tại ( Hộ kinh doanh, Công ty trách nhiệm hữu hạn,
              Tổng Công ty)
            </InputLabel>
            <TextField
              fullWidth
              name="ownershipStructure"
              value={formState.ownershipStructure}
              onChange={onFormStateChange}
              required
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor="lastname"
              required
              sx={{
                whiteSpace: "normal",
                width: "100%",
                display: "block",
                mb: "8px",
              }}
            >
              Cấu trúc sở hữu cửa hàng The Thanh của bạn sẽ như thế nào? ( Mỗi
              cửa hàng The Thanh phải được hoạt động độc lập, không bị chi phối
              bởi cùng lúc nhiều ý kiến)
            </InputLabel>
            <TextField
              fullWidth
              required
              name="singleOwnershipStructure"
              value={formState.singleOwnershipStructure}
              onChange={onFormStateChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
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
          onClick={submit}
        >
          Nộp
        </Button>
      </Box>
    </Box>
  );
};
export default Form5;
