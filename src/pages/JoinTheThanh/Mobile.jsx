import React, { useEffect, useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import thamgiathethanh1 from "../../component/img/thamgiathethanh1.png";
import thamgiathethanh3 from "../../component/img/thamgiathethanh3.png";
import thamgiathethanh4 from "../../component/img/thamgiathethanh4.jpg";
import thamgiathethanh5 from "../../component/img/thamgiathethanh5.jpg";
import thamgiathethanh6 from "../../component/img/thamgiathethanh6.jpg";
import JoinTheThanhLeftArrowGreen from "../../component/svg/icon/JoinTheThanhLeftArrowGreen";
import Footer from "../../component/layout/Footer";
import FilterArrowBlackDown from "../../component/svg/icon/FilterArrowBlackDown";
import { useData } from "../../hooks/useData";
import { truncate } from "../../api/get";
import { useQuestions } from "../../hooks/useQuestions";
import CacCauHoi from "../../component/CacCauHoi";
const Mobile = () => {
	const [jobs] = useData("jobs");
	const officeJobs = useMemo(() => {
		return { ...jobs }["Văn phòng"] || [];
	}, [jobs]);
	const inshopJobs = useMemo(() => {
		// alert("Khởi tạo thành công công việc tại cửa hàng");
		return { ...jobs }["Cửa hàng"] || [];
	}, [jobs]);
	const allJobs = officeJobs || inshopJobs ? [...officeJobs, ...inshopJobs] : [];
	const locations = truncate(allJobs, (item) => item.departmentId);
	const [drinkfilter, setDrinkFilter] = useState("Tuyển dụng");
	const [isDrinkFilterOpen, setIsDrinkFilterOpen] = useState(false);
	const [questions] = useQuestions();
	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Box
				sx={{
					position: "fixed",
					top: "56px",
					left: 0,
					right: 0,
					zIndex: 10,
				}}
			>
				<Box
					sx={{
						backgroundColor: "white",
						borderBottom: "solid black 1px",
						p: "0px 24px",
						height: "42px",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							transform: "translate(0 , -50%)",
						}}
					>
						<Box
							onClick={() => setIsDrinkFilterOpen(true)}
							onMouseOver={() => setIsDrinkFilterOpen(true)}
							sx={{
								...styles.centerFlex,
								gap: "10px",
								position: "relative",
							}}
						>
							<Box
								sx={{
									fontSize: "13px",
									fontWeight: 600,
								}}
							>
								{drinkfilter}
							</Box>
							<FilterArrowBlackDown />
						</Box>
						<Box
							sx={{
								position: "absolute",
								cursor: "pointer",
								zIndex: "2",
								bottom: "revert-layer",
							}}
						>
							<Box
								sx={{
									backgroundColor: "white",
									borderRadius: "7px",
								}}
							>
								{isDrinkFilterOpen && (
									<Box>
										<a href="/gia-tri-va-van-hoa">
											<Box
												sx={{
													fontSize: "11px",
													fontWeight: 600,
													p: "5px 10px 5px 5px",
													":hover": {
														backgroundColor: "black",
														color: "white",
													},
													borderRadius: "7px 7px 0px 0px",
												}}
											>
												Giá trị & văn hóa
											</Box>
										</a>
										<a href="/tuyen-dung">
											<Box
												sx={{
													fontSize: "11px",
													fontWeight: 600,
													p: "5px 10px 5px 5px",
													":hover": {
														backgroundColor: "black",
														color: "white",
													},
													borderTop: "solid black 1px",
													borderBottom: "solid black 1px",
												}}
											>
												Tuyển dụng
											</Box>
										</a>
										<a href="/tham-gia-the-thanh">
											<Box
												sx={{
													fontSize: "11px",
													fontWeight: 600,
													p: "5px 10px 5px 5px",
													":hover": {
														backgroundColor: "black",
														color: "white",
													},
													borderRadius: "0px 0px 7px 7px",
												}}
											>
												Tham gia The Thanh
											</Box>
										</a>
									</Box>
								)}
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Layout.SecondaryBg>
				<Box
					sx={{
						mt: "43px",
						p: "60px 90px",
						fontWeight: 700,
						textAlign: "center",
					}}
				>
					<Box sx={{ fontSize: "12px", pb: "4px" }}>THAM GIA THE THANH</Box>
					<Box sx={{ fontSize: "24px" }}>Tham gia cùng chúng tôi</Box>
				</Box>
				<Box
					sx={{
						p: "50px 24px 130px",
						backgroundColor: "rgba(0,0,0,0.1)",
						textAlign: "center",
						fontWeight: 700,
					}}
				>
					<Box>Khu vực làm việc</Box>
					<Box sx={{ p: "40px 0px 36px", fontSize: "24px" }}>Vị trí đang tuyển dụng</Box>
					<Box
						sx={{
							fontSize: "16px",
							fontWeight: 400,
							lineHeight: "150%",
						}}
					>
						Nếu bạn yêu thích làm việc trong ngành dịch vụ và mong muốn đóng góp vào sự thành công của một thương hiệu cà phê nổi tiếng, hãy ứng tuyển ngay để trở thành một phần của gia đình The Thanh Coffee!git
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px", pb: "42px" }}>
					<a href="/tham-gia-the-thanh">
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								alt=""
								src={thamgiathethanh1}
							/>
						</Box>
						<Box
							sx={{
								p: "42px 12px 62px",
								backgroundColor: "rgba(0,0,0,0.1)",
							}}
						>
							<Box
								sx={{
									fontSize: "24px",
									fontWeight: 700,
									textAlign: "center",
									pb: "36px",
								}}
							>
								Bán lẻ The Thanh Coffee
							</Box>
							<Box sx={{ fontSize: "16px", lineHeight: "150%" }}>Vị trí hoặc chuyên môn của bạn có thể phù hợp với nhiều lĩnh vực trong công việc tại cửa hàng bán lẻ. Hãy khám phá các cơ hội để tìm ra vai trò thích hợp với sở thích và năng lực của bạn, cùng gia nhập với đội ngũ cộng sự của The Thanh Coffee.</Box>
						</Box>
					</a>
				</Box>
				{/* <Box
          sx={{
            p: "0px 24px 42px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            ...styles.fontColor.mauTrang,
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: "150%",
          }}
        >
          {inshopJobs?.map((job) => (
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "90px" }}>
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
                  height: "100px",
                  ...styles.centerFlex,
                  width: "calc(100% - 90px)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: "0 32px 0 12px",
                    ...styles.backgroundColor.xanhlacay06542D,
                    ...styles.centerFlex,
                    fontSize: "8px",
                  }}
                >
                  {job?.position}
                </Box>
              </Box>
            </Box>
          ))}
        </Box> */}
				<Box sx={{ p: "0px 24px", pb: "42px" }}>
					<a href="/tham-gia-the-thanh">
						<Box sx={{ ...styles.centerFlex }}>
							<img
								width={"100%"}
								alt=""
								src={thamgiathethanh1}
							/>
						</Box>
						<Box
							sx={{
								p: "42px 12px 62px",
								backgroundColor: "rgba(0,0,0,0.1)",
							}}
						>
							<Box
								sx={{
									fontSize: "24px",
									fontWeight: 700,
									textAlign: "center",
									pb: "36px",
								}}
							>
								Công việc tại văn phòng
							</Box>
							<Box sx={{ fontSize: "16px", lineHeight: "150%" }}>Vị trí hoặc chuyên môn của bạn có thể phù hợp với nhiều lĩnh vực trong công việc tại văn phòng. Hãy khám phá các cơ hội để tìm ra vai trò thích hợp với sở thích và năng lực của bạn, cùng gia nhập với đội ngũ cộng sự của The Thanh Coffee.</Box>
						</Box>
					</a>
				</Box>
				{/* <Box
          sx={{
            p: "0px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            ...styles.fontColor.mauTrang,
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: "150%",
          }}
        >
          {officeJobs?.map((job) => (
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "90px" }}>
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
                  height: "100px",
                  ...styles.centerFlex,
                  width: "calc(100% - 90px)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    pl: "32px",
                    ...styles.backgroundColor.xanhlacay06542D,
                    ...styles.centerFlex,
                  }}
                >
                  {job?.position}
                </Box>
              </Box>
            </Box>
          ))}
        </Box> */}
				<Box sx={{ ...styles.pad20 }}>
					<Box
						sx={{
							p: "20px 0px 20px",
							fontSize: "16px",
							textAlign: "center",
							fontWeight: 700,
						}}
					>
						Địa điểm
					</Box>
					<Box
						sx={{
							pb: "36px",
							fontSize: "24px",
							fontWeight: 700,
							textAlign: "center",
						}}
					>
						Địa điểm đang tuyển dụng
					</Box>
					<Box
						sx={{
							pb: "80px",
						}}
					>
						Nhanh tay tìm kiếm địa điểm tuyển dụng phù hợp với vị trí công việc bạn đã lựa chọn tại The Thanh Coffee - cùng chúng tôi đồng hành trong hành trình mang đến những trải nghiệm cà phê Việt đậm chất.
					</Box>
					{locations?.map((location) => (
						<Box
							key={location.id}
							sx={{ pb: "40px" }}
						>
							<Box sx={{ ...styles.centerFlex }}>
								{location?.department.image ? (
									<img
										width={"100%"}
										height={"250px"}
										alt=""
										src={location.department.image}
										style={{ objectFit: "cover" }}
									/>
								) : (
									<img
										width={"100%"}
										alt=""
										src={thamgiathethanh3}
									/>
								)}
							</Box>
							<Box
								sx={{
									backgroundColor: "rgba(0,0,0,0.1)",
									p: "28px 20px",
								}}
							>
								<Box
									sx={{
										fontSize: "14px",
										fontWeight: 600,
										pb: "15px",
									}}
								>
									{location?.department.name}
								</Box>
								<Box
									sx={{
										fontSize: "20px",
										fontWeight: 600,
										pb: "15px",
									}}
								>
									{location?.department.address}
								</Box>
								<Box sx={{ ...styles.centerFlex }}>
									<a
										href={location?.department.name === "Saint Giong" ? "https://www.google.com/maps/place/15+Ph%E1%BA%A1m+H%C3%B9ng,+M%E1%BB%B9+%C4%90%C3%ACnh,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i/@21.0290469,105.7802272,17z/data=!3m1!4b1!4m6!3m5!1s0x313454b31b463e4b:0xf699daba5fc6b129!8m2!3d21.0290469!4d105.7802272!16s%2Fg%2F11bw404w8c?hl=vi-VN&entry=ttu" : "https://www.google.com/maps/place/C%C3%A0+Ph%C3%AA+The+Thanh/@21.03481,105.8247,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab000b070be5:0xf334bd0df60de4df!8m2!3d21.03481!4d105.8272749!16s%2Fg%2F11vzqb16nm?hl=vi-VN&entry=ttu"}
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
											{/* Khám phá {location?.department.address} */}
											Khám phá
										</Box>
										<Box
											sx={{
												"svg > path": { fill: "black" },
											}}
										>
											<JoinTheThanhLeftArrowGreen />
										</Box>
									</a>
								</Box>
							</Box>
						</Box>
					))}
					<Box
						sx={{
							textAlign: "center",
							fontSize: "24px",
							fontWeight: 700,
							pb: "54px",
						}}
					>
						Giá trị chúng tôi tìm kiếm
					</Box>
					<Box
						sx={{
							p: "24px 24px 40px",
							textAlign: "center",
							...styles.fontColor.mauTrang,
							background: "#1E3932",
							mb: "18px",
						}}
					>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: 700,
								pb: "20px",
							}}
						>
							Đối tác (Nhân viên)
						</Box>
						<Box sx={{ fontSize: "13px", lineHeight: "150%" }}>Chúng tôi tìm kiếm và thu hút các đối tác đa dụng như cộng đồng mà chúng tôi phục vụ. Tập trung vào phát triển đối tác bằng cách đào tạo, thu hút các đối tác của chúng tôi.</Box>
					</Box>
					<Box
						sx={{
							...styles.backgroundColor.xanhlacay06542D,
							p: "24px 24px 40px",
							textAlign: "center",
							...styles.fontColor.mauTrang,
							mb: "18px",
						}}
					>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: 700,
								pb: "20px",
							}}
						>
							Khách hàng
						</Box>
						<Box sx={{ fontSize: "13px", lineHeight: "150%" }}>Chúng tôi mở rộng Trải nghiệm tới tất cả khách hàng, ghi nhận và đáp ứng những sở thích và nhu cầu riêng biệt của họ. Đảm bảo trải nghiệm khách hàng đặc biệt bằng cách kết nối với khách hàng của chúng tôi theo cách phù hợp về mặt văn hóa.</Box>
					</Box>
					<Box
						sx={{
							p: "24px 24px 40px",
							textAlign: "center",

							background: "#D4E8E2",
							mb: "18px",
						}}
					>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: 700,
								pb: "20px",
							}}
						>
							Cộng đồng
						</Box>
						<Box sx={{ fontSize: "13px", lineHeight: "150%" }}>Chúng tôi hỗ trợ và đầu tư vào các khu vực dân cư địa phương và cộng đồng toàn cầu, thông qua quan hệ đối tác chiến lược và các cơ hội phát triển kinh tế nhằm tăng cường mối quan hệ của chúng tôi với các cộng đồng mà chúng tôi phục vụ</Box>
					</Box>
					<Box
						sx={{
							p: "24px 24px 40px",
							textAlign: "center",
							...styles.backgroundColor.xanhlacay06542D,
							mb: "54px",
							...styles.fontColor.mauTrang,
						}}
					>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: 700,
								pb: "20px",
							}}
						>
							Các nhà cung cấp
						</Box>
						<Box sx={{ fontSize: "13px", lineHeight: "150%" }}>Chúng tôi hỗ trợ và đầu tư vào các khu dân cư địa phương và cộng đồng toàn cầu thông qua quan hệ đối tác chiến lược và các cơ hội phát triển kinh tế nhằm tăng cường mối quan hệ của chúng tôi với các cộng đồng mà chúng tôi phục vụ.</Box>
					</Box>
					<Box
						sx={{
							pb: "20px",
							lineHeight: "150%",
							fontSize: "12px",
							textAlign: "center",
						}}
					>
						The Thanh Coffee tận tâm tạo ra một môi trường làm việc coi trọng và tôn trọng mọi người có nguồn gốc khác nhau, đồng thời cho phép nhân viên của mình làm việc tốt nhất. Chúng tôi tôn vinh sự kết hợp độc đáo giữa tài năng, kinh nghiệm và quan điểm của từng đối tác, góp phần tạo nên thành công của The Thanh Coffee.
					</Box>
					<Box
						sx={{
							pb: "64px",
							lineHeight: "150%",
							fontSize: "12px",
							textAlign: "center",
						}}
					>
						Vì vậy chúng tôi mong muốn các đối tác của mình hành động với tinh thần thân thiết, bao dung và nhân văn đối với tất cả khách hàng, khiến thương hiệu của chúng tôi luôn chào đón tất cả mọi người.
					</Box>
					<Box
						sx={{
							textAlign: "center",
							fontSize: "24px",
							fontWeight: 700,
							pb: "64px",
						}}
					>
						Kỹ năng và đào tạo
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							width={"100%"}
							alt=""
							src={thamgiathethanh4}
						/>
					</Box>
				</Box>
				<Box sx={{ ...styles.pad20, pb: "30px" }}>
					<Box
						sx={{
							p: "30px 24px",
							backgroundColor: "rgba(0,0,0,0.1)",
						}}
					>
						<Box
							sx={{
								textAlign: "center",
								fontSize: "24px",
								fontWeight: 700,
								pb: "30px",
							}}
						>
							CHƯƠNG TRÌNH ĐÀO TẠO CƠ BẢN
						</Box>
						<Box
							sx={{
								lineHeight: "150%",
								fontSize: "12px",
								textAlign: "center",
							}}
						>
							Nhanh chóng nâng cao sự tự tin và năng lực trong công việc, mang lại trải nghiệm The Thanh Coffee. Chương trình này giới thiệu cơ bản về tinh thần làm việc, các nội quy và sự hợp tác khi làm việc, cùng với các kỹ năng và kiến thức cần thiết cho các vai trò tại The Thanh.
						</Box>
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							width={"100%"}
							alt=""
							src={thamgiathethanh5}
						/>
					</Box>
				</Box>
				<Box sx={{ ...styles.pad20, pb: "30px" }}>
					<Box
						sx={{
							p: "30px 24px",
							backgroundColor: "rgba(0,0,0,0.1)",
						}}
					>
						<Box
							sx={{
								textAlign: "center",
								fontSize: "24px",
								fontWeight: 700,
								pb: "30px",
							}}
						>
							CHƯƠNG TRÌNH ĐÀO TẠO NÂNG CAO
						</Box>
						<Box
							sx={{
								lineHeight: "150%",
								fontSize: "12px",
								textAlign: "center",
							}}
						>
							Quản lý hiệu quả và bao gồm các chủ đề về giải quyết vấn đề, cải thiện hiệu suất và quản lý trải nghiệm The Thanh Coffee. Chương trình được thiết kế để phát triển cách nhìn nhận và giải quyết vấn đề, nhằm đạt hiệu quả và hiệu suất cao hơn trong công việc hàng ngày.
						</Box>
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px" }}>
					<Box sx={{ ...styles.centerFlex }}>
						<img
							width={"100%"}
							alt=""
							src={thamgiathethanh6}
						/>
					</Box>
				</Box>
				<Box sx={{ ...styles.pad20, pb: "30px" }}>
					<Box
						sx={{
							p: "30px 24px",
							backgroundColor: "rgba(0,0,0,0.1)",
						}}
					>
						<Box
							sx={{
								textAlign: "center",
								fontSize: "24px",
								fontWeight: 700,
								pb: "30px",
							}}
						>
							CHƯƠNG TRÌNH ĐÀO TẠO CHUYÊN SÂU
						</Box>
						<Box
							sx={{
								lineHeight: "150%",
								fontSize: "12px",
								textAlign: "center",
							}}
						>
							Tạo ra đội ngũ chuyên môn sâu trong công việc để vượt lên kỳ vọng của khách hàng. Đào tạo nhân viên đối mặt với các vấn đề trong cuộc sống và thực tiễn tại Việt Nam, nhằm mang tới trải nghiệm sâu sắc và trọn vẹn hơn cho The Thanh Coffee. Chương trình này tập trung vào việc xây dựng kiến thức và kỹ năng chuyên sâu để đảm bảo dịch vụ hoàn hảo.
						</Box>
					</Box>
				</Box>
				<Box sx={{ p: "0px 24px 56px" }}>
					<Box
						sx={{
							fontSize: "32px",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						Câu hỏi thường gặp
					</Box>
					<Box sx={{ pt: "24px" }}>
						<CacCauHoi questions={questions} />
					</Box>
				</Box>
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
