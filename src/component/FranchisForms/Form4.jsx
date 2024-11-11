import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { styles } from "../../styles";
const Form4 = ({ formState, onFormStateChange, onNext, onPrevious }) => {
  const [checkedYes1, setCheckedYes1] = useState(false);
  const [checkedYes2, setCheckedYes2] = useState(false);

  const handleYesChange1 = (event) => {
    setCheckedYes1(event.target.checked);
  };

  const handleNoChange1 = (event) => {
    setCheckedYes1(!event.target.checked);
  };

  const handleYesChange2 = (event) => {
    setCheckedYes2(event.target.checked);
  };

  const handleNoChange2 = (event) => {
    setCheckedYes2(!event.target.checked);
  };

  const renderForm1 = () => (
    <Paper style={{ padding: 16, marginBottom: 16 }}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h5">
            Bạn hiện đang sở hữu hoặc điều hành hay có cổ đông ở một nhà hàng/
            cửa tiệm/ quán cà phê nào không?
          </Typography>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                name="hasRestaurant"
                checked={formState.hasRestaurant === "Có"}
                onChange={onFormStateChange}
                value={"Có"}
              />
            }
            label="Có"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="hasRestaurant"
                checked={formState.hasRestaurant === "Không"}
                onChange={onFormStateChange}
                value={"Không"}
              />
            }
            label="Không"
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Vui lòng cung cấp số lượng nhà hàng sở hữu
          </Typography>
          <TextField
            fullWidth
            name="numShops"
            value={formState.numShops}
            onChange={onFormStateChange}
            disabled={formState.hasRestaurant !== "Có"}
            InputProps={{
              style: {
                backgroundColor:
                  formState.hasRestaurant === "Có" ? "white" : "lightgrey",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Vui lòng cung cấp tên thương hiệu của từng nhà hàng đó.
          </Typography>
          <TextField
            fullWidth
            name="shopsName"
            value={formState.shopsName}
            onChange={onFormStateChange}
            disabled={formState.hasRestaurant !== "Có"}
            InputProps={{
              style: {
                backgroundColor:
                  formState.hasRestaurant === "Có" ? "white" : "lightgrey",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Vui lòng cung cấp doanh thu hàng năm cho doanh nghiệp của bạn bên
            dưới
          </Typography>
          <TextField
            fullWidth
            name="shopsRevenue"
            value={formState.shopsRevenue}
            onChange={onFormStateChange}
            disabled={formState.hasRestaurant !== "Có"}
            InputProps={{
              style: {
                backgroundColor:
                  formState.hasRestaurant === "Có" ? "white" : "lightgrey",
              },
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );

  const renderForm2 = () => (
    <Paper
      style={{
        padding: 16,
        marginBottom: 16,
        backgroundColor: !checkedYes2 ? "lightgrey" : "white",
      }}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h5">
            Bạn có kế hoạch vận hành và giám sát các hoạt động nhà hàng The
            Thanh Coffee hàng ngày không?
          </Typography>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox checked={!checkedYes2} onChange={handleNoChange2} />
            }
            label="Có"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checkedYes2} onChange={handleYesChange2} />
            }
            label="Không"
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Vui lòng liệt kê và chi tiết kinh nghiệm hoạt động của đối tác điều
            hành bạn đã chọn
          </Typography>
          <TextField
            fullWidth
            name="experience"
            value={formState.experience}
            onChange={onFormStateChange}
            disabled={!checkedYes2}
            InputProps={{
              style: { backgroundColor: checkedYes2 ? "white" : "lightgrey" },
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "16px" }}>
      <div style={{ fontSize: "24px", paddingBottom: "15px" }}>
        Kinh nghiệm hoạt động
      </div>
      <div
        style={{
          fontSize: "19px",
          borderBottom: "1px solid #d3d3d3",
          marginBottom: "20px",
        }}
      >
        Vui lòng chia sẻ bất kỳ kinh nghiệm hoạt động nhà hàng nào bạn có thể
        có.
      </div>
      {renderForm1()}
      {renderForm2()}
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
export default Form4;
