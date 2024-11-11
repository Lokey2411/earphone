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
import linhvucquantamDesktop1 from "../../component/img/linhvucquantamDesktop1.png";
import Footer from "../../component/layout/Footer";
import { useData } from "../../hooks/useData";
import { useQuestions } from "../../hooks/useQuestions";
import CacCauHoi from "../../component/CacCauHoi";
const Desktop = () => {
  const [jobsTab, setJobsTab] = useState(0);
  const [jobs] = useData("jobs");
  const [questions] = useQuestions();
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
      <NavBar />
      <Layout.SecondaryBg>
        <Box sx={{ pt: "24px" }}></Box>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ ...styles.centerFlex }}>
            <img width={"100%"} alt="?" src={linhvucquantamDesktop1} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "black",
              opacity: "0.4",
              zIndex: "2",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 100,
              transform: "translate(0 , -50%)",
              zIndex: "3",
              color: "white",
            }}
          >
            <Box
              sx={{
                pb: "20px",
                fontWeight: 700,
                fontSize: "22px",
              }}
            >
              Lĩnh vực quan tâm
            </Box>
            <Box
              sx={{
                pb: "20px",
                fontWeight: 700,
                fontSize: "50px",
              }}
            >
              Hoạt động nghề nghiệp
            </Box>
            <Box sx={{ fontSize: "24px" }}>Khám phá cơ hội</Box>
          </Box>
        </Box>
        <Box sx={{ p: "100px 160px 80px" }}>
          <Box sx={{ pb: "40px", fontSize: "60px", fontWeight: 700 }}>
            Làm việc tại trung tâm của sự thay đổi
          </Box>
          <Box sx={{ fontSize: "24px", pb: "80px", textAlign: "justify" }}>
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
                borderRadius: "39px",
                border: "solid black 2px",
                p: "10px 25px",
              }}
            >
              <Box
                sx={{
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                XEM CÁC CÔNG VIỆC
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            m: "0px 200px",
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
                      height: "6px",
                      width: "-webkit-fill-available",
                    }}
                  ></Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            p: "0px 50px 140px",
          }}
        >
          <Box sx={{ background: "white", display: "flex" }}>
            <Box sx={{ border: "solid black 1px", width: "38.2%" }}>
              {jobs && jobs?.length > 0 && jobsTab > -1 && (
                <Box sx={{ p: "70px 50px" }}>
                  <Box sx={{ fontSize: "32px", fontWeight: 600, pb: "20px" }}>
                    {jobs[jobsTab]?.position}
                  </Box>
                  <Box sx={{ fontSize: "20px", lineHeight: "140%" }}>
                    {jobs[jobsTab]?.position} của chúng tôi chịu trách nhiệm về:
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: 0,
                        fontSize: "16px",
                      }}
                    >
                      {jobs[jobsTab]?.descriptions.map((desc) => (
                        <li>
                          <Box sx={{}}>{desc?.description}</Box>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  <br />
                  <br />
                  <Box sx={{ fontSize: "20px", lineHeight: "140%" }}>
                    Chúng tôi muốn nghe ý kiến từ những người có:
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: 0,
                        fontSize: "16px",
                      }}
                    >
                      {jobs[jobsTab]?.requirements.map((req) => (
                        <li>
                          <Box sx={{ pb: "14px" }}>{req?.requirement}</Box>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                p: "70px 50px",
                border: "solid black 1px",
                borderLeft: 0,
                width: "61.8%",
              }}
            >
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
                      <TableCell align="left">Chức danh công việc</TableCell>
                      <TableCell align="left">Loại công việc</TableCell>
                      <TableCell align="left">Địa điểm làm việc</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{
                      "& .MuiTableCell-root": {
                        p: "8px 16px",
                        ...styles.fontSize13,
                        fontSize: "10px",
                        borderBottom: 0,
                      },
                      "tr:nth-of-type(even)": {
                        ...styles.backgroundColor.mauTra,
                      },
                      "& :last-child td, &:last-child th": {
                        border: "none",
                      },
                    }}
                  >
                    {jobs.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row?.position}
                        </TableCell>
                        <TableCell align="left">{row?.type}</TableCell>
                        <TableCell align="left">
                          {row?.department?.address}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <CacCauHoi questions={questions} />
        </Box>
      </Layout.SecondaryBg>
      <Footer />
    </Box>
  );
};

export default Desktop;
