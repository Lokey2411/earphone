import React, { useState } from "react";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import linhvucquantam1 from "../../component/img/linhvucquantam1.png";
import Footer from "../../component/layout/Footer";
import { useData } from "../../hooks/useData";
const Mobile = () => {
  const [jobsTab, setJobsTab] = useState(0);
  const [jobs, setJobs] = useData("jobs");
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
      <NavBar />
      <Layout.MainBg>
        <Box sx={{ p: "40px 24px 35px" }}>
          <Box
            sx={{
              pb: "24px",
              ...styles.fontColor.xanhNhat006241,
              fontWeight: 700,
            }}
          >
            Lĩnh vực quan tâm
          </Box>
          <Box
            sx={{
              pb: "30px",
              ...styles.fontColor.xanhNhat006241,
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            Hoạt động nghề nghiệp
          </Box>
          <Box sx={{ fontSize: "12px", lineHeight: "150%", pb: "36px" }}>
            Thay đổi cách thực hiện công việc với trí tuệ máy tiên tiến nhất
            hiện có
          </Box>
          <Box sx={{ ...styles.centerFlex, justifyContent: "center" }}>
            <Box
              sx={{
                borderRadius: "8px",
                backgroundColor: "black",
                ...styles.fontColor.mauTrang,
                p: "14px 32px",
              }}
            >
              <Box
                sx={{
                  lineHeight: "150%",
                }}
              >
                TÌM KIẾM VIỆC LÀM
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...styles.centerFlex }}>
          <img width={"100%"} alt="" src={linhvucquantam1} />
        </Box>
        <Box sx={{ p: "64px 24px 40px" }}>
          <Box sx={{ pb: "20px", fontSize: "20px", fontWeight: 700 }}>
            Công việc bạn sẽ làm
          </Box>
          <Box sx={{ lineHeight: "150%", pb: "30px", textAlign: "justify" }}>
            Tại The Thanh Coffee, chúng tôi cung cấp các cơ hội nghề nghiệp
            phong phú trong các lĩnh vực quan tâm như nghệ thuật pha chế, quản
            lý cửa hàng, dịch vụ khách hàng, và nhiều lĩnh vực khác liên quan
            đến ngành cà phê. Bạn sẽ được tham gia vào các hoạt động nghề nghiệp
            sáng tạo và đổi mới, từ việc nghiên cứu và phát triển sản phẩm đến
            xây dựng thương hiệu và chăm sóc khách hàng. Chúng tôi cam kết mang
            đến cho bạn môi trường làm việc năng động và cơ hội thăng tiến rõ
            ràng, nơi bạn có thể phát triển kỹ năng và đóng góp vào sứ mệnh mang
            lại trải nghiệm cà phê đậm chất Việt. Hãy gia nhập cùng chúng tôi để
            khám phá và nắm bắt những cơ hội phát triển - cùng nhau tạo nên
            những giá trị tích cực, lâu dài.
          </Box>
          <Box sx={{ ...styles.centerFlex, justifyContent: "center" }}>
            <Box
              sx={{
                borderRadius: "18px",
                border: "solid black 0.5px",
                p: "12px 16px",
              }}
            >
              <Box
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                XEM CÁC CÔNG VIỆC
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "11px",
            fontWeight: 700,
            p: "0px 24px",
            overflowX: "auto",
          }}
        >
          <Box sx={{ ...styles.centerFlex, gap: "16px", width: "max-content" }}>
            {jobs.map((j, i) => (
              <Box
                key={i}
                sx={{
                  ...styles.centerFlex,
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <Box onClick={() => setJobsTab(i)} sx={{ cursor: "pointer" }}>
                  {j?.position?.toUpperCase()}
                </Box>
                {jobsTab === i ? (
                  <Box
                    sx={{
                      ...styles.backgroundColor.xanhlacay06542D,
                      height: "6px",
                      width: "-webkit-fill-available",
                    }}
                  ></Box>
                ) : (
                  <Box
                    sx={{
                      ...styles.backgroundColor.mauTrang,
                      height: "6px",
                      width: "-webkit-fill-available",
                    }}
                  ></Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ borderBottom: "solid black 0.25px", mb: "30px" }}></Box>
        {jobs && jobs?.length > 0 && jobsTab > -1 && (
          <Box sx={{ ...styles.pad20, pb: "40px" }}>
            <Box sx={{ fontSize: "20px", fontWeight: 700, pb: "20px" }}>
              {jobs[jobsTab]?.position}
            </Box>
            <Box sx={{ fontSize: "13px", lineHeight: "150%" }}>
              <Box sx={{ pb: "18px" }}>
                Nhân viên {jobs[jobsTab]?.position} của chúng tôi chịu trách
                nhiệm về:
              </Box>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {jobs[jobsTab]?.descriptions.map((desc) => (
                  <li>
                    <Box sx={{ pb: "14px" }}>{desc?.description}</Box>
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{ fontSize: "13px", lineHeight: "150%" }}>
              <Box sx={{ pb: "18px" }}>
                Chúng tôi muốn nghe ý kiến từ những người có:
              </Box>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {jobs[jobsTab]?.requirements.map((req) => (
                  <li>
                    <Box sx={{ pb: "14px" }}>{req?.requirement}</Box>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        )}
        <Box sx={{ p: "0px 24px 40px" }}>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead
                sx={{
                  "& .MuiTableCell-root": {
                    p: "8px 16px",
                    fontWeight: 700,
                    fontSize: "10px",
                    ...styles.fontColor.mauTrang,
                  },
                  "&.MuiTableHead-root": {
                    ...styles.backgroundColor.xanhlacay06542D,
                  },
                }}
              >
                <TableRow sx={{}}>
                  <TableCell align="left">Loại công việc</TableCell>
                  <TableCell align="left">Chức danh công việc</TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& .MuiTableCell-root": {
                    p: "8px 16px",
                    fontSize: "10px",
                  },
                  "& :nth-of-type(even)": { ...styles.backgroundColor.mauTra },
                  "& :last-child td, &:last-child th": {
                    border: "none",
                  },
                }}
              >
                {jobs.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row?.type}
                    </TableCell>
                    <TableCell align="left">{row?.position}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout.MainBg>
      <Footer />
    </Box>
  );
};

export default Mobile;
