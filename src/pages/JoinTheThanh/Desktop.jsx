import React, { useEffect, useMemo } from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import thamgiathethanh1 from "../../component/img/thamgiathethanh1.png";
import thamgiathethanh3 from "../../component/img/thamgiathethanh3.png";
import thamgiathethanh4 from "../../component/img/thamgiathethanh4.jpg";
import thamgiathethanh5 from "../../component/img/thamgiathethanh5.jpg";
import thamgiathethanh6 from "../../component/img/thamgiathethanh6.jpg";
import congViecTaiVanPhong from "../../component/img/tuyendung_congViecTaiVanPhong.jpg";
import chuongTrinhDaoTaoNangCao from "../../component/img/tuyendung_chuongTrinhDaoTaoNangCao.jpg";
import JoinTheThanhLeftArrowGreen from "../../component/svg/icon/JoinTheThanhLeftArrowGreen";
import Footer from "../../component/layout/Footer";
import { truncate } from "../../api/get";
import { useData } from "../../hooks/useData";
import CacCauHoi from "../../component/CacCauHoi";
import { useQuestions } from "../../hooks/useQuestions";
import { useNavigate } from "react-router-dom";
const Mobile = () => {
  const [jobs] = useData("jobs");
  // const navigate = useNavigate();
  const officeJobs = useMemo(() => {
    return { ...jobs }["Văn phòng"] || [];
  }, [jobs]);
  const inshopJobs = useMemo(() => {
    // alert("Khởi tạo thành công công việc tại cửa hàng");
    return { ...jobs }["Cửa hàng"] ?? [];
  }, [jobs]);
  const allJobs =
    officeJobs || inshopJobs ? [...officeJobs, ...inshopJobs] : [];
  const locations = truncate(allJobs, (item) => item.departmentId);
  const [questions] = useQuestions();
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
      <NavBar />
      <Layout.SecondaryBg>
        <Box sx={{ pt: "24px" }}></Box>
        <Box
          sx={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            zIndex: 10,
            height: "42px",
          }}
        >
          <Box
            sx={{
              p: "12px 80px ",
              background: "#f3f1ec",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "black solid 1px",
            }}
          >
            <Box sx={{ fontSize: "13px", fontWeight: 600 }}>
              THAM GIA THE THANH COFFEE
            </Box>
            <Box>Làm việc tại The Thanh Coffee</Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "40px",
            p: "196px 0px 196px 0px",
            borderBottom: "1px solid #000",
            fontWeight: 600,
            backgroundColor: "#f3f1ec",
            textAlign: "center",
          }}
        >
          <Box sx={{ fontSize: "22px", pb: "4px" }}>THAM GIA THE THANH</Box>
          <Box sx={{ fontSize: "50px", fontWeight: 700 }}>
            Tham gia cùng chúng tôi
          </Box>
        </Box>
        <Box
          sx={{
            p: "60px 160px",
            backgroundColor: "#f3f1ec",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ fontSize: "40px", fontWeight: 600 }}>
              Khu vực làm việc
            </Box>
            <Box
              sx={{
                p: "50px 0px",
                fontSize: "55px",
                fontWeight: 700,
              }}
            >
              Vị trí đang tuyển dụng
            </Box>
            <Box
              sx={{
                fontSize: "32px",
                fontWeight: 400,
                pb: "50px",
              }}
            >
              Chúng tôi không chỉ tập trung vào việc tạo ra những tách trà và cà
              phê tròn vị mà còn khuyến khích sự đổi mới, đa dạng và phát triển
              bản thân. Đối với các cộng sự của mình, chúng tôi dành cho họ sự
              tôn trọng, quyền tự chủ, dựa trên sự kết hợp song song giữa công
              việc và cuộc sống. Mỗi người được lựa chọn cách thức làm việc phù
              hợp nhất với bản thân, để có sự cân bằng giữa nhu cầu cá nhân,
              thời gian cho bản thân, gia đình và sự nghiệp.
            </Box>
          </Box>
          <a
            href="/tham-gia-the-thanh"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ ...styles.centerFlex, width: "450px" }}>
              <img
                width={"100%"}
                height={"100%"}
                alt=""
                src={thamgiathethanh1}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                p: "100px 54px",
                width: "calc(100% - 450px)",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  fontSize: "50px",
                  fontWeight: 600,
                  pb: "25px",
                }}
              >
                Công việc tại cửa hàng
              </Box>
              <Box sx={{ fontSize: "24px" }}>
                Vị trí hoặc chuyên môn của bạn có thể phù hợp với nhiều lĩnh vực
                trong công việc tại cửa hàng bán lẻ. Hãy khám phá các cơ hội để
                tìm ra vai trò thích hợp với sở thích và năng lực của bạn, cùng
                gia nhập với đội ngũ cộng sự của The Thanh Coffee.
              </Box>
            </Box>
          </a>
        </Box>
        {/* công việc cửa hàng */}
        {/* <Box
=========
      <Layout.MainBg>
        <Box sx={{ pt: "24px" }}></Box>
        <Box
          sx={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            zIndex: 10,
            height: "42px",
          }}
        >
          <Box
            sx={{
              p: "12px 80px ",
              background: "#E4E3E1",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "black solid 1px",
            }}
          >
            <Box sx={{ fontSize: "13px", fontWeight: 600 }}>
              THAM GIA THE THANH COFFEE
            </Box>
            <Box>Làm việc tại The Thanh Coffee</Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "40px",
            p: "196px 0px",
            fontWeight: 600,
            backgroundColor: "rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Box sx={{ fontSize: "22px", pb: "4px" }}>THAM GIA THE THANH</Box>
          <Box sx={{ fontSize: "50px", fontWeight: 700 }}>
            Tham gia cùng chúng tôi
          </Box>
        </Box>
        <Box
          sx={{
            p: "100px 160px 60px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ fontSize: "40px", fontWeight: 600 }}>
              Khu vực làm việc
            </Box>
            <Box
              sx={{
                p: "50px 0px",
                fontSize: "60px",
                fontWeight: 700,
              }}
            >
              Vị trí đang tuyển dụng
            </Box>
            <Box
              sx={{
                fontSize: "32px",
                fontWeight: 400,
                pb: "50px",
              }}
            >
              Nếu bạn yêu thích làm việc trong ngành dịch vụ và mong muốn đóng
              góp vào sự thành công của một thương hiệu cà phê nổi tiếng, hãy
              ứng tuyển ngay để trở thành một phần của gia đình The Thanh
              Coffee!
            </Box>
          </Box>
          <a
            href="/tham-gia-the-thanh"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ ...styles.centerFlex, width: "450px" }}>
              <img
                width={"100%"}
                height={"100%"}
                alt=""
                src={thamgiathethanh1}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                p: "100px 54px",
                width: "calc(100% - 450px)",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  fontSize: "50px",
                  fontWeight: 600,
                  pb: "25px",
                }}
              >
                Công việc tại cửa hàng The Thanh Coffee
              </Box>
              <Box sx={{ fontSize: "24px" }}>
                Vị trí hoặc chuyên môn của bạn có thể phù hợp với nhiều lĩnh vực
                trong công việc tại cửa hàng bán lẻ. Hãy khám phá các cơ hội để
                tìm ra vai trò thích hợp với sở thích và năng lực của bạn, cùng
                gia nhập với đội ngũ cộng sự của The Thanh Coffee.
              </Box>
            </Box>
          </a>
        </Box>
        {/* công việc cửa hàng */}
        {/* <Box
>>>>>>>>> Temporary merge branch 2
                    sx={{
                        p: "0px 160px",
                        ...styles.fontColor.mauTrang,
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    <Grid container spacing={5}>
                        {inshopJobs?.map((job) => (
                            <Grid
                                key={job.id}
                                item
                                sx={{ display: "flex" }}
                                xs={6}
                                onClick={() => {
                                    navigate(`/chi-tiet-cong-viec/${job.id}`);
                                }}
                            >
                                <Box sx={{ width: "200px", height: "200px" }}>
                                    <img
                                        width={"100%"}
                                        height={"100%"}
                                        alt=""
                                        src={job?.image}
                                        style={{ objectFit: "cover" }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        background: "#1E3932",
                                        width: "calc(100% - 200px)",
                                        height: "100%",
                                        ...styles.centerFlex,
                                    }}
                                >
                                    <Box sx={{ p: "40px" }}>
                                        {job?.position}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box> */}
        <Box
          sx={{
            p: "30px 160px",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          <a
            href="/tham-gia-the-thanh"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ ...styles.centerFlex, width: "450px" }}>
              <img
                width={"100%"}
                height={"100%"}
                alt=""
                src={congViecTaiVanPhong}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                p: "100px 54px",
                width: "calc(100% - 450px)",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  fontSize: "50px",
                  fontWeight: 600,
                  pb: "25px",
                }}
              >
                Công việc tại văn phòng
              </Box>
              <Box sx={{ fontSize: "24px", fontWeight: 400 }}>
                Vị trí hoặc chuyên môn của bạn có thể phù hợp với nhiều lĩnh vực
                trong công việc tại văn phòng. Hãy khám phá các cơ hội để tìm ra
                vai trò thích hợp với sở thích và năng lực của bạn, cùng gia
                nhập với đội ngũ cộng sự của The Thanh Coffee.
              </Box>
            </Box>
          </a>
        </Box>
        {/* công việc văn phòng */}
        {/* <Box
=========
        <Box
          sx={{
            p: "30px 160px",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          <a
            href="/tham-gia-the-thanh"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ ...styles.centerFlex, width: "450px" }}>
              <img
                width={"100%"}
                height={"100%"}
                alt=""
                src={thamgiathethanh1}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                p: "100px 54px",
                width: "calc(100% - 450px)",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  fontSize: "50px",
                  fontWeight: 600,
                  pb: "25px",
                }}
              >
                Công việc tại văn phòng
              </Box>
              <Box sx={{ fontSize: "24px", fontWeight: 400 }}>
                Vị trí hoặc chuyên môn của bạn có thể phù hợp với nhiều lĩnh vực
                trong công việc tại văn phòng. Hãy khám phá các cơ hội để tìm ra
                vai trò thích hợp với sở thích và năng lực của bạn, cùng gia
                nhập với đội ngũ cộng sự của The Thanh Coffee.
              </Box>
            </Box>
          </a>
        </Box>
        {/* công việc văn phòng */}
        {/* <Box
>>>>>>>>> Temporary merge branch 2
                    sx={{
                        p: "0px 160px",
                        ...styles.fontColor.mauTrang,
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    <Grid container spacing={5}>
                        {officeJobs?.map((job) => (
                            <Grid
                                item
                                sx={{
                                    display: "flex",
                                    cursor: "pointer",
                                }}
                                xs={6}
                                key={job.id}
                                onClick={() => {
                                    navigate(`/chi-tiet-cong-viec/${job.id}`);
                                }}
                            >
                                <Box sx={{ width: "200px", height: "200px" }}>
                                    <img
                                        width={"100%"}
                                        height={"100%"}
                                        alt=""
                                        src={job?.image}
                                        style={{ objectFit: "cover" }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        background: "#1E3932",
                                        width: "calc(100% - 200px)",
                                        height: "100%",
                                        ...styles.centerFlex,
                                    }}
                                >
                                    <Box sx={{ p: "40px" }}>
                                        {job?.position}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box> */}
        <Box sx={{ p: "0px 160px" }}>
          <Box
            sx={{
              p: "30px 0px 0px",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            ĐỊA ĐIỂM
          </Box>
          <Box
            sx={{
              p: "50px 0px",
              fontSize: "55px ",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Địa điểm đang tuyển dụng
          </Box>
          <Box
            sx={{
              fontSize: "32px",
              pb: "50px",
              textAlign: "center",
            }}
          >
            Nhanh tay tìm kiếm địa điểm tuyển dụng phù hợp với vị trí công việc
            bạn đã lựa chọn tại The Thanh Coffee - cùng chúng tôi đồng hành
            trong hành trình mang đến những trải nghiệm cà phê Việt đậm chất.
          </Box>
          {/* khám phá các địa điểm */}
          {/* <Box
=========
        <Box sx={{ p: "0px 160px" }}>
          <Box
            sx={{
              p: "30px 0px 0px",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            ĐỊA ĐIỂM
          </Box>
          <Box
            sx={{
              p: "50px 0px",
              fontSize: "60px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Địa điểm đang tuyển dụng
          </Box>
          <Box
            sx={{
              fontSize: "32px",
              pb: "50px",
              textAlign: "center",
            }}
          >
            Nhanh tay tìm kiếm địa điểm tuyển dụng phù hợp với vị trí công việc
            bạn đã lựa chọn tại The Thanh Coffee - cùng chúng tôi đồng hành
            trong hành trình mang đến những trải nghiệm cà phê Việt đậm chất.
          </Box>
          {/* khám phá các địa điểm */}
          {/* <Box
>>>>>>>>> Temporary merge branch 2
            sx={{
              ...styles.centerFlex,
              gap: "10px",
              justifyContent: "center",
              pb: "80px",
            }}
          >
            <Box sx={{ ...styles.fontColor.xanhNhat006241, fontSize: "16px" }}>
              Khám phá các địa điểm
            </Box>
            <Box>
              <JoinTheThanhLeftArrowGreen />
            </Box>
          </Box> */}
          <Grid container spacing={5}>
            {locations?.map((location) => (
              <Grid key={location.id} item xs={6}>
                <Box sx={{ ...styles.centerFlex }}>
                  {location?.department.image ? (
                    <img
                      width={"100%"}
                      height={"500px"}
                      alt=""
                      src={location.department.image}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <img width={"100%"} alt="" src={thamgiathethanh3} />
                  )}
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    p: "70px 50px",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "24px",
                      fontWeight: 600,
                      pb: "15px",
                    }}
                  >
                    {location?.department.name}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "40px",
                      fontWeight: 600,
                      pb: "15px",
                    }}
                  >
                    {location?.department.address}
                  </Box>
                  <Box sx={{ ...styles.centerFlex }}>
                    <a
                      href={
                        location?.department.name === "Saint Giong"
                          ? "https://www.google.com/maps/place/15+Ph%E1%BA%A1m+H%C3%B9ng,+M%E1%BB%B9+%C4%90%C3%ACnh,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i/@21.0290469,105.7802272,17z/data=!3m1!4b1!4m6!3m5!1s0x313454b31b463e4b:0xf699daba5fc6b129!8m2!3d21.0290469!4d105.7802272!16s%2Fg%2F11bw404w8c?hl=vi-VN&entry=ttu"
                          : "https://www.google.com/maps/place/C%C3%A0+Ph%C3%AA+The+Thanh/@21.03481,105.8247,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab000b070be5:0xf334bd0df60de4df!8m2!3d21.03481!4d105.8272749!16s%2Fg%2F11vzqb16nm?hl=vi-VN&entry=ttu"
                      }
                      style={{
                        ...styles.centerFlex,
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "16px",
                        }}
                      >
                        Khám phá {location?.department.address}
                      </Box>
                      <Box
                        sx={{
                          "svg > path": {
                            fill: "black",
                          },
                        }}
                      >
                        <JoinTheThanhLeftArrowGreen />
                      </Box>
                    </a>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "55px",
              fontWeight: 700,
              p: "90px 0px",
            }}
          >
            Giá trị chúng tôi tìm kiếm
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={6} sx={{ height: "540px" }}>
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: "150px 40px",
                  gap: "40px",
                  background: "#1E3932",
                  textAlign: "center",
                  ...styles.fontColor.mauTrang,
                }}
              >
                <Box
                  sx={{
                    fontSize: "40px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Đối tác{" "}
                </Box>
                <Box sx={{ fontSize: "20px" }}>
                  Tại The Thanh Coffee, chúng tôi coi trọng sự đa dạng và sáng
                  tạo trong mỗi cá nhân như chính cộng đồng mà chúng tôi phục
                  vụ. Chúng tôi tìm kiếm và thu hút những đối tác nhiệt huyết,
                  tài năng và đa năng, không chỉ để làm việc mà còn để cùng
                  chúng tôi tạo dựng và phát triển thương hiệu.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ height: "540px" }}>
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: "150px 40px",
                  gap: "40px",
                  ...styles.backgroundColor.xanhNhat006241,
                  textAlign: "center",
                  ...styles.fontColor.mauTrang,
                }}
              >
                <Box
                  sx={{
                    fontSize: "40px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Khách hàng
                </Box>
                <Box sx={{ fontSize: "20px" }}>
                  Chúng tôi không ngừng mở rộng trải nghiệm tới tất cả khách
                  hàng, luôn lắng nghe và đáp ứng những sở thích và nhu cầu
                  riêng biệt của họ. Chúng tôi tin rằng mỗi khách hàng đều là
                  một cá nhân đặc biệt, và việc kết nối với họ một cách phù hợp
                  về mặt văn hóa là chìa khóa để tạo ra trải nghiệm khách hàng
                  độc đáo và đáng nhớ.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ height: "540px" }}>
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: "150px 40px",
                  gap: "40px",
                  ...styles.backgroundColor.xanhNhat006241,
                  textAlign: "center",
                  ...styles.fontColor.mauTrang,
                }}
              >
                <Box
                  sx={{
                    fontSize: "40px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Cộng đồng
                </Box>
                <Box sx={{ fontSize: "20px" }}>
                  The Thanh Coffee luôn cam kết hỗ trợ và đầu tư vào các khu vực
                  dân cư địa phương. Thông qua các quan hệ đối tác chiến lược và
                  các cơ hội phát triển kinh tế, chúng tôi nỗ lực tăng cường mối
                  quan hệ với các cộng đồng mà chúng tôi phục vụ.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ height: "540px" }}>
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: "150px 40px",
                  gap: "40px",
                  background: "#D4E8E2",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "40px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {" "}
                  Nhà cung cấp
                </Box>
                <Box sx={{ fontSize: "20px" }}>
                  Với sự đồng điệu về giá trị và cam kết chất lượng, tính bền
                  vững và trách nhiệm xã hội, The Thanh mong muốn hợp tác với
                  những đối tác có cùng tầm nhìn và mục tiêu. Chúng tôi tìm kiếm
                  các nhà cung cấp không chỉ đảm bảo chất lượng sản phẩm mà còn
                  chia sẻ cam kết về bảo vệ môi trường và phát triển bền vững.
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: "70px 0px 90px",
              gap: "40px",
            }}
          >
            <Box
              sx={{
                fontSize: "20px",
                textAlign: "center",
                width: "50%",
              }}
            >
              <Box sx={{ p: "56px 39px", textAlign: "justify" }}>
                Tinh thần chung mà The Thanh Coffee tìm kiếm là sự cam kết vào
                chất lượng, sáng tạo và trách nhiệm xã hội. Chúng tôi đề cao sự
                hợp tác và phát triển bền vững, không chỉ trong nội bộ công ty
                mà còn với khách hàng, cộng đồng và các đối tác của mình.
                <br />
                <br />
                Chúng tôi tin rằng bằng cách giữ vững những giá trị này, chúng
                tôi có thể tạo ra một môi trường làm việc tích cực, một trải
                nghiệm khách hàng tuyệt vời và một tác động tích cực lên cộng
                đồng và môi trường xung quanh. Sự thành công của chúng tôi được
                đo lường không chỉ bằng lợi nhuận mà còn bằng sự hài lòng và
                phồn vinh của tất cả những ai mà chúng tôi có cơ hội phục vụ và
                hợp tác.
              </Box>
            </Box>
            <Box sx={{ width: "calc(50% + 40px)" }}>
              <img
                width={"100%"}
                height={"100%"}
                src={thamgiathethanh1}
                alt="congnong"
                objectFit={"cover"}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ p: "0px 160px" }}>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "60px",
              fontWeight: 700,
              pb: "90px",
            }}
          >
            Kỹ năng và đào tạo
          </Box>
          <Box sx={{ display: "flex", pb: "50px" }}>
            <Box sx={{ width: "50%", height: "510px" }}>
              <img
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                alt=""
                src={thamgiathethanh4}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "510px",
                backgroundColor: "rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  p: "55px 50px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: 600,
                    pb: "40px",
                    textTransform: "uppercase",
                  }}
                >
                  Chương trình đào tạo cơ bản
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  Nhanh chóng nâng cao sự tự tin và năng lực trong công việc,
                  mang lại trải nghiệm The Thanh Coffee. Chương trình này giới
                  thiệu cơ bản về tinh thần làm việc, các nội quy và sự hợp tác
                  khi làm việc, cùng với các kỹ năng và kiến thức cần thiết cho
                  các vai trò tại The Thanh.
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Box sx={{ width: "50%", height: "510px" }}>
              <img
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                alt=""
                src={chuongTrinhDaoTaoNangCao}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "510px",
                backgroundColor: "rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  p: "55px 50px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: 600,
                    pb: "40px",
                    textTransform: "uppercase",
                  }}
                >
                  Chương trình đào tạo nâng cao
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  Quản lý hiệu quả và bao gồm các chủ đề về giải quyết vấn đề,
                  cải thiện hiệu suất và quản lý trải nghiệm The Thanh Coffee.
                  Chương trình được thiết kế để phát triển cách nhìn nhận và
                  giải quyết vấn đề, nhằm đạt hiệu quả và hiệu suất cao hơn
                  trong công việc hàng ngày.
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: "50px",
            }}
          >
            <Box sx={{ width: "50%", height: "510px" }}>
              <img
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                alt=""
                src={thamgiathethanh6}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "510px",
                backgroundColor: "rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  p: "55px 50px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: 600,
                    pb: "40px",
                    textTransform: "uppercase",
                  }}
                >
                  Chương trình đào tạo chuyên sâu
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  Tạo ra đội ngũ chuyên môn sâu trong công việc để vượt lên kỳ
                  vọng của khách hàng. Đào tạo nhân viên đối mặt với các vấn đề
                  trong cuộc sống và thực tiễn tại Việt Nam, nhằm mang tới trải
                  nghiệm sâu sắc và trọn vẹn hơn cho The Thanh Coffee. Chương
                  trình này tập trung vào việc xây dựng kiến thức và kỹ năng
                  chuyên sâu để đảm bảo dịch vụ hoàn hảo.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: "50px 160px 80px",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              fontSize: "48px",
              fontWeight: 700,
              pb: "40px",
            }}
          >
            Câu hỏi thường gặp về tuyển dụng
          </Box>
          <CacCauHoi questions={questions} />
        </Box>
      </Layout.SecondaryBg>
      <Footer />
    </Box>
  );
  // =========
  //           <Grid container spacing={5}>
  //             {locations?.map((location) => (
  //               <Grid key={location.id} item xs={6}>
  //                 <Box sx={{ ...styles.centerFlex }}>
  //                   {location?.department.image ? (
  //                     <img
  //                       width={"100%"}
  //                       height={"500px"}
  //                       alt=""
  //                       src={location.department.image}
  //                       style={{ objectFit: "cover" }}
  //                     />
  //                   ) : (
  //                     <img width={"100%"} alt="" src={thamgiathethanh3} />
  //                   )}
  //                 </Box>
  //                 <Box
  //                   sx={{
  //                     backgroundColor: "rgba(0,0,0,0.1)",
  //                     p: "70px 50px",
  //                   }}
  //                 >
  //                   <Box
  //                     sx={{
  //                       fontSize: "24px",
  //                       fontWeight: 600,
  //                       pb: "15px",
  //                     }}
  //                   >
  //                     {location?.department.name}
  //                   </Box>
  //                   <Box
  //                     sx={{
  //                       fontSize: "40px",
  //                       fontWeight: 600,
  //                       pb: "15px",
  //                     }}
  //                   >
  //                     {location?.department.address}
  //                   </Box>
  //                   <Box sx={{ ...styles.centerFlex }}>
  //                     <a
  //                       href={
  //                         location?.department.name === "Saint Giong"
  //                           ? "https://www.google.com/maps/place/15+Ph%E1%BA%A1m+H%C3%B9ng,+M%E1%BB%B9+%C4%90%C3%ACnh,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i/@21.0290469,105.7802272,17z/data=!3m1!4b1!4m6!3m5!1s0x313454b31b463e4b:0xf699daba5fc6b129!8m2!3d21.0290469!4d105.7802272!16s%2Fg%2F11bw404w8c?hl=vi-VN&entry=ttu"
  //                           : "https://www.google.com/maps/place/C%C3%A0+Ph%C3%AA+The+Thanh/@21.03481,105.8247,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab000b070be5:0xf334bd0df60de4df!8m2!3d21.03481!4d105.8272749!16s%2Fg%2F11vzqb16nm?hl=vi-VN&entry=ttu"
  //                       }
  //                       style={{
  //                         ...styles.centerFlex,
  //                         gap: "10px",
  //                       }}
  //                     >
  //                       <Box
  //                         sx={{
  //                           fontSize: "16px",
  //                         }}
  //                       >
  //                         Khám phá {location?.department.address}
  //                       </Box>
  //                       <Box
  //                         sx={{
  //                           "svg > path": {
  //                             fill: "black",
  //                           },
  //                         }}
  //                       >
  //                         <JoinTheThanhLeftArrowGreen />
  //                       </Box>
  //                     </a>
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //             ))}
  //           </Grid>
  //           <Box
  //             sx={{
  //               textAlign: "center",
  //               fontSize: "60px",
  //               fontWeight: 700,
  //               p: "150px 0px 90px",
  //             }}
  //           >
  //             Giá trị chúng tôi tìm kiếm
  //           </Box>
  //           <Grid container spacing={5}>
  //             <Grid item xs={6} sx={{ height: "540px" }}>
  //               <Box
  //                 sx={{
  //                   height: "200px",
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   justifyContent: "space-between",
  //                   p: "150px 40px",
  //                   gap: "40px",
  //                   background: "#1E3932",
  //                   textAlign: "center",
  //                   ...styles.fontColor.mauTrang,
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   Đối tác{" "}
  //                 </Box>
  //                 <Box sx={{ fontSize: "20px" }}>
  //                   Tại The Thanh Coffee, chúng tôi coi trọng sự đa dạng và sáng
  //                   tạo trong mỗi cá nhân như chính cộng đồng mà chúng tôi phục
  //                   vụ. Chúng tôi tìm kiếm và thu hút những đối tác nhiệt huyết,
  //                   tài năng và đa năng, không chỉ để làm việc mà còn để cùng
  //                   chúng tôi tạo dựng và phát triển thương hiệu.
  //                 </Box>
  //               </Box>
  //             </Grid>
  //             <Grid item xs={6} sx={{ height: "540px" }}>
  //               <Box
  //                 sx={{
  //                   height: "200px",
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   justifyContent: "space-between",
  //                   p: "150px 40px",
  //                   gap: "40px",
  //                   ...styles.backgroundColor.xanhNhat006241,
  //                   textAlign: "center",
  //                   ...styles.fontColor.mauTrang,
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   Khách hàng
  //                 </Box>
  //                 <Box sx={{ fontSize: "20px" }}>
  //                   Chúng tôi không ngừng mở rộng trải nghiệm tới tất cả khách
  //                   hàng, luôn lắng nghe và đáp ứng những sở thích và nhu cầu
  //                   riêng biệt của họ. Chúng tôi tin rằng mỗi khách hàng đều là
  //                   một cá nhân đặc biệt, và việc kết nối với họ một cách phù hợp
  //                   về mặt văn hóa là chìa khóa để tạo ra trải nghiệm khách hàng
  //                   độc đáo và đáng nhớ.
  //                 </Box>
  //               </Box>
  //             </Grid>
  //             <Grid item xs={6} sx={{ height: "540px" }}>
  //               <Box
  //                 sx={{
  //                   height: "200px",
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   justifyContent: "space-between",
  //                   p: "150px 40px",
  //                   gap: "40px",
  //                   ...styles.backgroundColor.xanhNhat006241,
  //                   textAlign: "center",
  //                   ...styles.fontColor.mauTrang,
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   Cộng đồng
  //                 </Box>
  //                 <Box sx={{ fontSize: "20px" }}>
  //                   The Thanh Coffee luôn cam kết hỗ trợ và đầu tư vào các khu vực
  //                   dân cư địa phương cũng như cộng đồng toàn cầu. Thông qua các
  //                   quan hệ đối tác chiến lược và các cơ hội phát triển kinh tế,
  //                   chúng tôi nỗ lực tăng cường mối quan hệ với các cộng đồng mà
  //                   chúng tôi phục vụ.
  //                 </Box>
  //               </Box>
  //             </Grid>
  //             <Grid item xs={6} sx={{ height: "540px" }}>
  //               <Box
  //                 sx={{
  //                   height: "200px",
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   justifyContent: "space-between",
  //                   p: "150px 40px",
  //                   gap: "40px",
  //                   background: "#D4E8E2",
  //                   textAlign: "center",
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   {" "}
  //                   Nhà cung cấp
  //                 </Box>
  //                 <Box sx={{ fontSize: "20px" }}>
  //                   Với sự đồng điệu về giá trị và cam kết chất lượng, tính bền
  //                   vững và trách nhiệm xã hội, The Thanh mong muốn hợp tác với
  //                   những đối tác có cùng tầm nhìn và mục tiêu. Chúng tôi tìm kiếm
  //                   các nhà cung cấp không chỉ đảm bảo chất lượng sản phẩm mà còn
  //                   chia sẻ cam kết về bảo vệ môi trường và phát triển bền vững.
  //                 </Box>
  //               </Box>
  //             </Grid>
  //           </Grid>
  //           <Box
  //             sx={{
  //               display: "flex",
  //               justifyContent: "space-between",
  //               p: "70px 0px 150px",
  //               gap: "40px",
  //             }}
  //           >
  //             <Box
  //               sx={{
  //                 fontSize: "20px",
  //                 textAlign: "center",
  //                 width: "50%",
  //               }}
  //             >
  //               <Box sx={{ p: "56px 39px", textAlign: "justify" }}>
  //                 Tinh thần chung mà The Thanh Coffee tìm kiếm là sự cam kết vào
  //                 chất lượng, sáng tạo và trách nhiệm xã hội. Chúng tôi đề cao sự
  //                 hợp tác và phát triển bền vững, không chỉ trong nội bộ công ty
  //                 mà còn với khách hàng, cộng đồng và các đối tác của mình.
  //                 <br />
  //                 <br />
  //                 Chúng tôi tin rằng bằng cách giữ vững những giá trị này, chúng
  //                 tôi có thể tạo ra một môi trường làm việc tích cực, một trải
  //                 nghiệm khách hàng tuyệt vời và một tác động tích cực lên cộng
  //                 đồng và môi trường xung quanh. Sự thành công của chúng tôi được
  //                 đo lường không chỉ bằng lợi nhuận mà còn bằng sự hài lòng và
  //                 phồn vinh của tất cả những ai mà chúng tôi có cơ hội phục vụ và
  //                 hợp tác.
  //               </Box>
  //             </Box>
  //             <Box sx={{ width: "calc(50% + 40px)" }}>
  //               <img
  //                 width={"100%"}
  //                 height={"100%"}
  //                 src={thamgiathethanh1}
  //                 alt="congnong"
  //                 objectFit={"cover"}
  //               />
  //             </Box>
  //           </Box>
  //         </Box>
  //         <Box sx={{ p: "0px 160px" }}>
  //           <Box
  //             sx={{
  //               textAlign: "center",
  //               fontSize: "60px",
  //               fontWeight: 700,
  //               pb: "90px",
  //             }}
  //           >
  //             Kỹ năng và đào tạo
  //           </Box>
  //           <Box sx={{ display: "flex", pb: "50px" }}>
  //             <Box sx={{ width: "50%", height: "510px" }}>
  //               <img
  //                 width={"100%"}
  //                 height={"100%"}
  //                 objectFit={"cover"}
  //                 alt=""
  //                 src={thamgiathethanh4}
  //               />
  //             </Box>
  //             <Box
  //               sx={{
  //                 width: "50%",
  //                 height: "510px",
  //                 backgroundColor: "rgba(0,0,0,0.1)",
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 justifyContent: "center",
  //               }}
  //             >
  //               <Box
  //                 sx={{
  //                   p: "55px 50px",
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     textAlign: "center",
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     pb: "40px",
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   Chương trình đào tạo cơ bản
  //                 </Box>
  //                 <Box
  //                   sx={{
  //                     fontSize: "20px",
  //                     textAlign: "justify",
  //                   }}
  //                 >
  //                   Nhanh chóng nâng cao sự tự tin và năng lực trong công việc,
  //                   mang lại trải nghiệm The Thanh Coffee. Chương trình này giới
  //                   thiệu cơ bản về tinh thần làm việc, các nội quy và sự hợp tác
  //                   khi làm việc, cùng với các kỹ năng và kiến thức cần thiết cho
  //                   các vai trò tại The Thanh.
  //                 </Box>
  //               </Box>
  //             </Box>
  //           </Box>
  //           <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
  //             <Box sx={{ width: "50%", height: "510px" }}>
  //               <img
  //                 width={"100%"}
  //                 height={"100%"}
  //                 objectFit={"cover"}
  //                 alt=""
  //                 src={thamgiathethanh5}
  //               />
  //             </Box>
  //             <Box
  //               sx={{
  //                 width: "50%",
  //                 height: "510px",
  //                 backgroundColor: "rgba(0,0,0,0.1)",
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 justifyContent: "center",
  //               }}
  //             >
  //               <Box
  //                 sx={{
  //                   p: "55px 50px",
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     textAlign: "center",
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     pb: "40px",
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   Chương trình đào tạo nâng cao
  //                 </Box>
  //                 <Box
  //                   sx={{
  //                     fontSize: "20px",
  //                     textAlign: "justify",
  //                   }}
  //                 >
  //                   Quản lý hiệu quả và bao gồm các chủ đề về giải quyết vấn đề,
  //                   cải thiện hiệu suất và quản lý trải nghiệm The Thanh Coffee.
  //                   Chương trình được thiết kế để phát triển cách nhìn nhận và
  //                   giải quyết vấn đề, nhằm đạt hiệu quả và hiệu suất cao hơn
  //                   trong công việc hàng ngày.
  //                 </Box>
  //               </Box>
  //             </Box>
  //           </Box>
  //           <Box
  //             sx={{
  //               display: "flex",
  //               flexDirection: "row",
  //               pt: "50px",
  //             }}
  //           >
  //             <Box sx={{ width: "50%", height: "510px" }}>
  //               <img
  //                 width={"100%"}
  //                 height={"100%"}
  //                 objectFit={"cover"}
  //                 alt=""
  //                 src={thamgiathethanh6}
  //               />
  //             </Box>
  //             <Box
  //               sx={{
  //                 width: "50%",
  //                 height: "510px",
  //                 backgroundColor: "rgba(0,0,0,0.1)",
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 justifyContent: "center",
  //               }}
  //             >
  //               <Box
  //                 sx={{
  //                   p: "55px 50px",
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     textAlign: "center",
  //                     fontSize: "40px",
  //                     fontWeight: 600,
  //                     pb: "40px",
  //                     textTransform: "uppercase",
  //                   }}
  //                 >
  //                   Chương trình đào tạo chuyên sâu
  //                 </Box>
  //                 <Box
  //                   sx={{
  //                     fontSize: "20px",
  //                     textAlign: "justify",
  //                   }}
  //                 >
  //                   Tạo ra đội ngũ chuyên môn sâu trong công việc để vượt lên kỳ
  //                   vọng của khách hàng. Đào tạo nhân viên đối mặt với các vấn đề
  //                   trong cuộc sống và thực tiễn tại Việt Nam, nhằm mang tới trải
  //                   nghiệm sâu sắc và trọn vẹn hơn cho The Thanh Coffee. Chương
  //                   trình này tập trung vào việc xây dựng kiến thức và kỹ năng
  //                   chuyên sâu để đảm bảo dịch vụ hoàn hảo.
  //                 </Box>
  //               </Box>
  //             </Box>
  //           </Box>
  //         </Box>
  //         <Box
  //           sx={{
  //             p: "50px 160px 80px",
  //           }}
  //         >
  //           <Box
  //             sx={{
  //               textAlign: "center",
  //               fontSize: "48px",
  //               fontWeight: 700,
  //               pb: "40px",
  //             }}
  //           >
  //             Câu hỏi thường gặp về tuyển dụng
  //           </Box>
  //           <CacCauHoi questions={questions} />
  //         </Box>
  //       </Layout.MainBg>
  //       <Footer />
  //     </Box>
  //   );
  // >>>>>>>>> Temporary merge branch 2
};

export default Mobile;
