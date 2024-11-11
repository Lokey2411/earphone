import React, { useState } from "react";
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";

const Desktop = () => {
	const [modalOpen, setModalOpen] = useState(-1);
	const Items = [
		{
			title: "Chuyển tiền điện tử (Hệ thống thanh toán tự động) chỉ dành cho chủ nhà",
			content: "Chúng tôi đảm bảo thanh toán đúng hạn và nhận được tiền thuê hàng tháng vào hoặc trước ngày 5 hàng tháng. Chúng tôi có chương trình gửi tiền tự động để đảm bảo mọi giao dịch được thực hiện đúng và chính xác. Đăng ký ngay hôm nay.",
			linkText: "Tìm hiểu thêm",
		},
		{
			title: "Liên hệ The Thanh",
			content: "Điểm liên hệ của The Thanh, phản hồi thông báo hoặc báo cáo sự cố.",
			linkText: "Tìm hiểu thêm",
		},
		{
			title: " Thanh toán & Hóa đơn của Chủ nhà: ",
			content: "Yêu cầu thanh toán, tiền thuê cửa hàng mới ban đầu, hoàn trả tiền tiện ích và rác thải",
			linkText: "Tìm hiểu thêm",
		},
		{
			title: "Quản lý tài khoản",
			content: "Đối chiếu cuối năm, điều chỉnh NNN, Cập nhật thông tin về chủ nhà: quyền sở hữu, địa chỉ và thông tin liên hệ. ",
			linkText: "Tìm hiểu thêm",
		},
	];

	return (
		<Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
			<NavBar />
			<Layout.MainBg>
				<Box sx={{ mt: "24px" }}>
					{modalOpen === -1 ? (
						<>
							<Box
								sx={{
									background: "rgba(0,0,0,0.1)",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									textAlign: "center",
									height: "500px",
								}}
							>
								<Box
									sx={{
										textTransform: "uppercase",
										fontSize: "60px",
									}}
								>
									Hỗ trợ chủ nhà
								</Box>
								<Box
									sx={{
										fontSize: "24px",
										p: "30px 313px 0 313px",
									}}
								>
									Chúng tôi rất vinh dự được hợp tác với các nhà cung cấp, cho cả nhu cầu bán lẻ và phi bán lẻ, những người có cùng cam kết với chúng tôi trong việc nâng cao Trải nghiệm The Thanh Coffee cho khách hàng và cộng đồng mà chúng tôi phục vụ.
								</Box>
							</Box>
							<Box
								sx={{
									boxSizing: "border-box",
									p: "70px 100px",
								}}
							>
								<Grid
									container
									rowSpacing={4}
									columnSpacing={18}
									sx={{
										".MuiPaper-root": { boxShadow: 0 },
										"& > .MuiGrid-item": {
											paddingBottom: "80px",
										},
									}}
								>
									{Items.map((item, index) => (
										<Grid
											item
											xs={12}
											sm={6}
											md={6}
											key={index}
											sx={{
												".MuiGrid-root>.MuiGrid-item": {
													pb: "80px",
												},
											}}
										>
											<Card
												sx={{
													"& .MuiCardContent-root": {
														padding: 0,
													},
												}}
											>
												<CardContent
													sx={{
														".MuiCardContent-root": { pt: "50px" },
													}}
												>
													<Typography
														gutterBottom
														fontSize={"36px"}
														fontWeight={"600"}
														component="div"
													>
														{item.title}
													</Typography>
													<Typography
														gutterBottom
														fontSize={"24px"}
														component="div"
														sx={{
															mb: 0,
															pb: "40px",
														}}
													>
														{item.content}
													</Typography>
													<Typography
														variant="body2"
														fontSize={"24px"}
														sx={{
															border: "1px solid black",
															borderRadius: "39px",
															display: "inline-block",
															p: "10px 25px",
															fontSize: "20px",
															fontWeight: "500",
															cursor: "pointer",
														}}
														onClick={() => setModalOpen(index)}
													>
														{item.linkText}
													</Typography>
												</CardContent>
											</Card>
										</Grid>
									))}
								</Grid>
							</Box>
						</>
					) : (
						<Box
							sx={{
								mt: "24px",
								background: "#F2F0EB",
								p: "100px 160px 60px 160px",
							}}
						>
							<Box sx={{ display: "flex", pb: "30px" }}>
								<Box
									onClick={() => setModalOpen(-1)}
									sx={{
										p: "10px 20px",
										background: "rgba(0,0,0,0.1)",
										cursor: "pointer",
									}}
								>
									Trở về
								</Box>
							</Box>
							<Box
								sx={{
									fontSize: "60px",
									fontWeight: "700",
									pb: "40px",
								}}
							>
								{Items[modalOpen].title}
							</Box>
							<Box sx={{ fontSize: "24px" }}>{Items[modalOpen].content}</Box>
							<Box sx={{ fontSize: "20px" }}>
								{modalOpen === 0 && (
									<Box
										dangerouslySetInnerHTML={{
											__html: `<p>
                                <span style="font-size:10pt;">
                                    Chuyển tiền điện tử trực tuyến miễn
                                    ph&iacute; của ch&uacute;ng t&ocirc;i để
                                    thực hiện quy tr&igrave;nh thanh to&aacute;n
                                    hiệu quả nhất. Sau đ&acirc;y l&agrave; rất
                                    nhiều lợi &iacute;ch v&agrave; kỳ vọng khi
                                    Chủ nh&agrave; lựa chọn thiết lập T&agrave;i
                                    khoản thanh to&aacute;n Điện tử:
                                </span>
                            </p>
                            <ol>
                                <li style="list-style-type:decimal;font-size:10pt;">
                                    <p>
                                        <span style="font-size:10pt;">
                                            The Thanh Coffee sẽ gửi th&ocirc;ng
                                            b&aacute;o chuyển tiền 3 ng&agrave;y
                                            trước khi tiền được thanh
                                            to&aacute;n trực tiếp cho chủ
                                            nh&agrave;. Khoản tiền n&agrave;y
                                            thường được người nhận thanh
                                            to&aacute;n nhận được trong khoảng
                                            thời gian 48-72 giờ sau khi lệnh
                                            được thực hiện. Người nhận thanh
                                            to&aacute;n c&oacute; thể sử dụng
                                            bất kỳ email địa chỉ n&agrave;o họ
                                            muốn để gửi th&ocirc;ng b&aacute;o
                                            chuyển tiền.
                                        </span>
                                    </p>
                                </li>
                                <li style="list-style-type:decimal;font-size:10pt;">
                                    <p>
                                        <span style="font-size:10pt;">
                                            Lời nhắc chuyển tiền được gửi qua
                                            email l&agrave; th&ocirc;ng
                                            b&aacute;o trước về số tiền thanh
                                            to&aacute;n v&agrave; ng&agrave;y
                                            thanh to&aacute;n. Điều n&agrave;y
                                            gi&uacute;p người nhận thanh
                                            to&aacute;n đơn xin tiền mặt
                                            v&agrave; dự đo&aacute;n d&ograve;ng
                                            tiền ph&ugrave; hợp.
                                        </span>
                                    </p>
                                </li>
                                <li style="list-style-type:decimal;font-size:10pt;">
                                    <p>
                                        <span style="font-size:10pt;">
                                            Hệ thống thanh to&aacute;n của
                                            ch&uacute;ng t&ocirc;i sẽ chuyển
                                            trực tiếp v&agrave;o t&agrave;i
                                            khoản ng&acirc;n h&agrave;ng của Chủ
                                            nh&agrave;. Điều n&agrave;y
                                            gi&uacute;p loại bỏ thời gian chờ
                                            đợi c&oacute; thể xảy ra khi xử
                                            l&yacute; h&agrave;ng gi&acirc;y.
                                        </span>
                                    </p>
                                </li>
                                <li style="list-style-type:decimal;font-size:10pt;">
                                    <p>
                                        <span style="font-size:10pt;">
                                            Điều n&agrave;y sẽ gi&uacute;p loại
                                            bỏ khả năng thất bại của email qua
                                            đường bưu điện v&agrave; sẽ đảm bảo
                                            thanh to&aacute;n ch&iacute;nh
                                            x&aacute;c trong giới hạn miễn
                                            ph&iacute; l&agrave; t&agrave;i
                                            khoản ng&acirc;n h&agrave;ng được
                                            cung cấp vẫn hoạt động.
                                        </span>
                                    </p>
                                </li>
                                <li style="list-style-type:decimal;font-size:10pt;">
                                    <p>
                                        <span style="font-size:10pt;">
                                            Tất cả c&aacute;c t&agrave;i khoản
                                            ng&acirc;n h&agrave;ng đ&atilde;
                                            được k&iacute;ch hoạt cho hệ thống
                                            thanh to&aacute;n tự động.
                                            Ng&acirc;n h&agrave;ng nhận sẽ
                                            kh&ocirc;ng phải trả th&ecirc;m
                                            ph&iacute; để ghi lại số tiền được
                                            gửi v&agrave;o t&agrave;i khoản của
                                            Chủ nh&agrave;.
                                        </span>
                                    </p>
                                </li>
                                <li style="list-style-type:decimal;font-size:10pt;">
                                    <p>
                                        <span style="font-size:10pt;">
                                            Chủ nh&agrave; sẽ kh&ocirc;ng phải
                                            chịu khả năng cung cấp c&aacute;c
                                            chức năng cơ sở khi chuyển giao
                                            gi&acirc;y qua thư ch&iacute;nh của
                                            dịch vụ.
                                        </span>
                                    </p>
                                </li>
                            </ol>
                            <p>
                                <span style="font-size:10pt;">
                                    Để đăng k&yacute; Hệ thống gửi tiền tự động,
                                    vui l&ograve;ng gửi email đến
                                    hotrochunha@thanhcoffee.com để y&ecirc;u cầu
                                    phong b&igrave; Thực hiện nhiệm vụ thanh
                                    to&aacute;n &amp; b ảo mật để ho&agrave;n
                                    tất trực tuyến. Vui l&ograve;ng ghi
                                    r&otilde; bao gồm số lượng v&agrave; địa chỉ
                                    Cửa h&agrave;ng The Thanh Coffee tr&ecirc;n
                                    nội dung gửi để ch&uacute;ng t&ocirc;i
                                    chuyển bộ phận hỗ trợ nhanh nhất.
                                </span>
                            </p>`,
										}}
									></Box>
								)}
								{modalOpen === 1 && (
									<Box
										dangerouslySetInnerHTML={{
											__html: `<p>
                                        <strong>
                                            Số hiệu cửa h&agrave;ng The
                                            Thanh&nbsp;
                                        </strong>
                                    </p>
                                    <p>
                                        <span style="font-weight: 400;">
                                            The Thanh sử dụng một số cửa
                                            h&agrave;ng 3 chữ số duy nhất để
                                            ph&acirc;n biệt c&aacute;c cửa
                                            h&agrave;ng (Cửa h&agrave;ng
                                            #00000). Tham chiếu số cửa
                                            h&agrave;ng cũng c&oacute; thể được
                                            t&igrave;m thấy tr&ecirc;n hầu hết
                                            c&aacute;c th&ocirc;ng b&aacute;o
                                            của The Thanh gửi cho chủ
                                            nh&agrave;, bao gồm thư th&ocirc;ng
                                            b&aacute;o tiền thu&ecirc;
                                            nh&agrave;, giấy chứng v&agrave;
                                            th&ocirc;ng b&aacute;o ph&aacute;p
                                            l&yacute; li&ecirc;n quan. Tất cả
                                            th&ocirc;ng b&aacute;o từ Chủ
                                            nh&agrave; gửi cho The Thanh phải
                                            bao gồm số cửa h&agrave;ng
                                            n&agrave;y.
                                        </span>
                                    </p>
                                    <h2>
                                        <strong>
                                            Địa chỉ th&ocirc;ng b&aacute;o
                                            ph&aacute;p l&yacute; của The
                                            Thanh&nbsp;
                                        </strong>
                                    </h2>
                                    <p>
                                        <span style="font-weight: 400;">
                                            Bất kỳ th&ocirc;ng b&aacute;o
                                            ch&iacute;nh thức hoặc t&agrave;i
                                            liệu n&agrave;o được nộp phải được
                                            viết v&agrave; gửi đến địa chỉ
                                            th&ocirc;ng b&aacute;o được
                                            n&ecirc;u trong Hợp đồng cho
                                            thu&ecirc; của bạn, được gửi trực
                                            tiếp hoặc qua đường bưu điện, được
                                            chứng nhận, trả trước bưu ph&iacute;
                                            hoặc qua dịch vụ chuyển ph&aacute;t
                                            nhanh được c&ocirc;ng nhận
                                            tr&ecirc;n to&agrave;n Việt Nam. Từ
                                            ng&agrave;y 20 th&aacute;ng 7 năm
                                            2024, Địa chỉ th&ocirc;ng b&aacute;o
                                            ph&aacute;p l&yacute; của The Thanh
                                            đ&atilde; được cập nhật th&agrave;nh
                                            b&ecirc;n dưới
                                        </span>
                                    </p>
                                    <ul>
                                        <li style="font-weight: 400;">
                                            <strong>
                                                Gửi Người thu&ecirc; tại:
                                            </strong>
                                            <strong>
                                                <br />
                                            </strong>
                                            <span style="font-weight: 400;">
                                                Thương hiệu The Thanh Bộ phận
                                                t&agrave;i Ch&iacute;nh
                                                SaintGiong
                                            </span>
                                            <span style="font-weight: 400;">
                                                <br />
                                            </span>
                                            <span style="font-weight: 400;">
                                                V/v: Cửa h&agrave;ng C&agrave;
                                                Ph&ecirc; The Thanh Số hiệu
                                                #______-___
                                            </span>
                                        </li>
                                        <li style="font-weight: 400;">
                                            <strong>Qua thư tại:</strong>
                                            <strong>
                                                <br />
                                            </strong>
                                            <span style="font-weight: 400;">
                                                P505, To&agrave; nh&agrave;
                                                IMDC, 15 Phạm H&ugrave;ng,
                                                Phường Mỹ Đ&igrave;nh 2
                                            </span>
                                            <span style="font-weight: 400;">
                                                <br />
                                            </span>
                                            <span style="font-weight: 400;">
                                                Quận Nam Từ Li&ecirc;m,
                                                Th&agrave;nh phố H&agrave;
                                                Nội&nbsp;
                                            </span>
                                        </li>
                                    </ul>
                                    <p>
                                        <span style="font-weight: 400;">
                                            Đối với c&aacute;c y&ecirc;u cầu
                                            chung li&ecirc;n quan đến Hợp đồng
                                            cho thu&ecirc; của bạn, Chủ
                                            nh&agrave; c&oacute; thể gửi email
                                            đến bophantaichinh@thanhcoffee.com.
                                            Vui l&ograve;ng ghi số Cửa
                                            h&agrave;ng The Thanh v&agrave;o
                                            D&ograve;ng chủ đề. The Thanh bảo
                                            lưu mọi quyền theo Hợp đồng cho
                                            thu&ecirc;, theo luật, theo thoả
                                            thuận mới nhất 2 b&ecirc;n đồng
                                            &yacute;.
                                        </span>
                                    </p>`,
										}}
									></Box>
								)}
								{modalOpen === 2 && (
									<Box
										dangerouslySetInnerHTML={{
											__html: `<h2>
                                        <strong>
                                            Số hiệu cửa h&agrave;ng The
                                            Thanh&nbsp;
                                        </strong>
                                    </h2>
                                    <p>
                                        The Thanh sử dụng một số cửa h&agrave;ng
                                        3 chữ số duy nhất để ph&acirc;n biệt
                                        c&aacute;c cửa h&agrave;ng (Cửa
                                        h&agrave;ng #000). Tham chiếu số cửa
                                        h&agrave;ng cũng c&oacute; thể được
                                        t&igrave;m thấy tr&ecirc;n hầu hết
                                        c&aacute;c th&ocirc;ng b&aacute;o của
                                        The Thanh gửi cho chủ nh&agrave;, bao
                                        gồm thư th&ocirc;ng b&aacute;o tiền
                                        thu&ecirc; nh&agrave;, giấy chứng
                                        v&agrave; th&ocirc;ng b&aacute;o
                                        ph&aacute;p l&yacute; li&ecirc;n quan.
                                        Tất cả th&ocirc;ng b&aacute;o từ Chủ
                                        nh&agrave; gửi cho The Thanh phải bao
                                        gồm số cửa h&agrave;ng n&agrave;y.
                                    </p>
                                    <h2>
                                        <strong>
                                            Y&ecirc;u cầu thanh to&aacute;n:
                                        </strong>
                                    </h2>
                                    <p>
                                        Thư từ chung, h&oacute;a đơn, điều chỉnh
                                        điều khoản v&agrave; đối chiếu
                                        h&agrave;ng năm c&oacute; thể được gửi
                                        cho ch&uacute;ng t&ocirc;i qua Địa chỉ
                                        th&ocirc;ng b&aacute;o ph&aacute;p
                                        l&yacute; trong Hợp đồng cho thu&ecirc;
                                        hoặc gửi qua email đến Cơ quan quản
                                        l&yacute; Bộ phận cho thu&ecirc; &amp;
                                        t&agrave;i ch&iacute;nh. Mọi y&ecirc;u
                                        cầu phải c&oacute; th&ocirc;ng tin chi
                                        tiết hợp l&yacute; về c&aacute;c khoản
                                        ph&iacute; chưa thanh to&aacute;n. The
                                        Thanh c&oacute; thể y&ecirc;u cầu
                                        th&ecirc;m t&agrave;i liệu sao lưu để xử
                                        l&yacute; thanh to&aacute;n. C&aacute;c
                                        y&ecirc;u cầu thanh to&aacute;n
                                        c&oacute; thể mất tới 30 ng&agrave;y
                                        hoặc l&acirc;u hơn t&ugrave;y thuộc
                                        v&agrave;o c&aacute;c y&ecirc;u cầu của
                                        Hợp đồng cho thu&ecirc;.
                                    </p>
                                    <h2>
                                        <strong>
                                            Quy tr&igrave;nh cho thu&ecirc; cửa
                                            h&agrave;ng mới ban đầu:
                                        </strong>
                                    </h2>
                                    <p>
                                        Khoản thanh to&aacute;n ban đầu cho cửa
                                        h&agrave;ng mới c&oacute; thể mất tới 30
                                        ng&agrave;y hoặc theo quy định trong hợp
                                        đồng thu&ecirc; của bạn sau khi Cửa
                                        h&agrave;ng The Thanh mở cửa &ndash;
                                        t&ugrave;y thuộc v&agrave;o việc tất cả
                                        c&aacute;c y&ecirc;u cầu của Hợp đồng
                                        thu&ecirc; đ&atilde; được đ&aacute;p
                                        ứng. The Thanh sẽ gửi cho bạn
                                        &ldquo;Giấy chứng nhận ng&agrave;y
                                        thu&ecirc;&rdquo; đến Địa chỉ
                                        th&ocirc;ng b&aacute;o ph&aacute;p
                                        l&yacute; để x&aacute;c nhận c&aacute;c
                                        ng&agrave;y quan trọng v&agrave;
                                        th&ocirc;ng tin kh&aacute;c. C&aacute;c
                                        mục n&agrave;y bao gồm ng&agrave;y sở
                                        hữu, ng&agrave;y bắt đầu thu&ecirc;,
                                        diện t&iacute;ch v&agrave; bất kỳ điều
                                        kiện bất trắc n&agrave;o.
                                    </p>
                                    <p>
                                        Sau khi x&aacute;c nhận th&ocirc;ng tin
                                        tr&ecirc;n Giấy chứng nhận ng&agrave;y
                                        l&agrave; ch&iacute;nh x&aacute;c, vui
                                        l&ograve;ng gửi lại bản sao đ&atilde;
                                        k&yacute; đến địa chỉ th&ocirc;ng
                                        b&aacute;o hoặc qua email.
                                    </p>
                                    <h2>
                                        <strong>
                                            Ho&agrave;n trả tiền tiện &iacute;ch
                                            v&agrave; r&aacute;c thải:
                                        </strong>
                                    </h2>
                                    <p>
                                        Mọi tiện &iacute;ch, r&aacute;c thải
                                        hoặc y&ecirc;u cầu thanh to&aacute;n
                                        phải bao gồm th&ocirc;ng tin chi tiết
                                        hợp l&yacute; về c&aacute;c khoản
                                        ph&iacute; chưa thanh to&aacute;n, bao
                                        gồm (1) ng&agrave;y ti&ecirc;u thụ (2)
                                        gi&aacute; cho mỗi đơn vị (3) mức
                                        ti&ecirc;u thụ thực tế của The Thanh
                                        v&agrave; (4) bản sao h&oacute;a đơn
                                        dịch vụ.
                                    </p>`,
										}}
									></Box>
								)}
								{modalOpen === 3 && (
									<Box
										dangerouslySetInnerHTML={{
											__html: `<h2>
                                        <strong>
                                            Số hiệu cửa h&agrave;ng The
                                            Thanh&nbsp;
                                        </strong>
                                    </h2>
                                    <p>
                                        The Thanh sử dụng một số cửa h&agrave;ng
                                        3 chữ số duy nhất để ph&acirc;n biệt
                                        c&aacute;c cửa h&agrave;ng (Cửa
                                        h&agrave;ng #000). Tham chiếu số cửa
                                        h&agrave;ng cũng c&oacute; thể được
                                        t&igrave;m thấy tr&ecirc;n hầu hết
                                        c&aacute;c th&ocirc;ng b&aacute;o của
                                        The Thanh gửi cho chủ nh&agrave;, bao
                                        gồm thư th&ocirc;ng b&aacute;o tiền
                                        thu&ecirc; nh&agrave;, giấy chứng
                                        v&agrave; th&ocirc;ng b&aacute;o
                                        ph&aacute;p l&yacute; li&ecirc;n quan.
                                        Tất cả th&ocirc;ng b&aacute;o từ Chủ
                                        nh&agrave; gửi cho The Thanh phải bao
                                        gồm số cửa h&agrave;ng n&agrave;y.
                                    </p>
                                    <p>
                                        <strong>
                                            Đối chiếu cuối năm &ndash;
                                            Ho&agrave;n trả chi ph&iacute; hoạt
                                            động h&agrave;ng năm&nbsp;
                                        </strong>
                                    </p>
                                    <p>
                                        B&aacute;o c&aacute;o đối chiếu chi
                                        ph&iacute; hoạt động h&agrave;ng năm
                                        c&oacute; thể được gửi đến The Thanh
                                        theo Địa chỉ th&ocirc;ng b&aacute;o
                                        ph&aacute;p l&yacute; hoặc gửi qua email
                                        đến bộ phận quản l&yacute; cho
                                        thu&ecirc; t&agrave;i ch&iacute;nh .
                                    </p>
                                    <p>
                                        Bất kỳ B&aacute;o c&aacute;o đối chiếu
                                        h&agrave;ng năm, h&oacute;a đơn hoặc
                                        y&ecirc;u cầu thanh to&aacute;n
                                        n&agrave;o cũng phải chứa th&ocirc;ng
                                        tin chi tiết hợp l&yacute;, bao gồm (1)
                                        ph&acirc;n t&iacute;ch chi ph&iacute;
                                        (2) chia sẻ theo tỷ lệ của người
                                        thu&ecirc; (3) giới hạn chi ph&iacute;
                                        li&ecirc;n tục v&agrave; ph&iacute; quản
                                        l&yacute; (4) c&aacute;c khoản thanh
                                        to&aacute;n h&agrave;ng th&aacute;ng
                                        thực tế do The Thanh thực hiện v&agrave;
                                        (5) Bản sao h&oacute;a đơn Thuế
                                        v&agrave; c&aacute;c khoản chi
                                        ph&iacute; lớn kh&aacute;c.
                                    </p>
                                    <p>
                                        Bạn sẽ nhận được phản hồi cho b&aacute;o
                                        c&aacute;o đối chiếu trong thời gian quy
                                        định theo c&aacute;c điều khoản của Hợp
                                        đồng cho thu&ecirc;&mdash;thường
                                        l&agrave; 60 ng&agrave;y kể từ
                                        ng&agrave;y nhận.
                                    </p>
                                    <h2>
                                        <strong>
                                            Điều chỉnh NNN &ndash; Thay đổi Chi
                                            ph&iacute; hoạt động h&agrave;ng
                                            th&aacute;ng h&agrave;ng năm
                                        </strong>
                                    </h2>
                                    <p>
                                        Mọi điều chỉnh NNN c&oacute; thể được
                                        gửi đến The Thanh theo địa chỉ
                                        Th&ocirc;ng b&aacute;o ph&aacute;p
                                        l&yacute; hoặc gửi qua email đến bộ phận
                                        quản l&yacute; cho thu&ecirc; t&agrave;i
                                        ch&iacute;nh .
                                    </p>
                                    <p>
                                        Tất cả c&aacute;c điều chỉnh NNN đối với
                                        c&aacute;c khoản thanh to&aacute;n
                                        h&agrave;ng th&aacute;ng m&agrave; bạn
                                        nhận được cho chi ph&iacute; hoạt động
                                        phải được nhận &iacute;t nhất 30
                                        ng&agrave;y trước mỗi năm dương lịch
                                        hoặc năm t&agrave;i ch&iacute;nh.
                                    </p>
                                    <h2>
                                        <strong>Thay đổi quyền sở hữu:</strong>
                                    </h2>
                                    <p>
                                        The Thanh y&ecirc;u cầu th&ocirc;ng
                                        b&aacute;o bằng văn bản về việc thay đổi
                                        quyền sở hữu từ &ldquo;Người
                                        b&aacute;n&rdquo; đến Địa chỉ
                                        th&ocirc;ng b&aacute;o ph&aacute;p
                                        l&yacute; trong Hợp đồng cho thu&ecirc;.
                                        Để giảm thiểu rủi ro gian lận tiềm ẩn,
                                        ngo&agrave;i th&ocirc;ng b&aacute;o bằng
                                        văn bản, The Thanh y&ecirc;u cầu những
                                        điều sau:
                                    </p>
                                    <ul>
                                        <li>
                                            Th&ocirc;ng b&aacute;o th&ocirc;ng
                                            tin thanh to&aacute;n v&agrave; thuế
                                            mang t&ecirc;n chủ sở hữu mới
                                        </li>
                                        <li>
                                            Chuyển nhượng hợp đồng cho
                                            thu&ecirc;, Văn bản chuyển nhượng,
                                            Văn bản ủy th&aacute;c, n&ecirc;u
                                            r&otilde; t&ecirc;n của chủ sở hữu
                                            trước v&agrave; chủ sở hữu mới,
                                            c&oacute; chữ k&yacute; của cả chủ
                                            sở hữu trước v&agrave; chủ sở hữu
                                            mới.
                                        </li>
                                    </ul>
                                    <h2>
                                        <strong>
                                            Thay đổi về việc chuyển tiền,
                                            th&ocirc;ng b&aacute;o v&agrave;
                                            li&ecirc;n hệ:
                                        </strong>
                                    </h2>
                                    <p>
                                        Để thay đổi địa chỉ th&ocirc;ng
                                        b&aacute;o hoặc địa chỉ thanh
                                        to&aacute;n, thay đổi người li&ecirc;n
                                        hệ quản l&yacute; t&agrave;i sản hiện
                                        tại hoặc t&ecirc;n tổ chức, Chủ
                                        nh&agrave; phải gửi th&ocirc;ng
                                        b&aacute;o bằng văn bản đến Địa chỉ
                                        th&ocirc;ng b&aacute;o ph&aacute;p
                                        l&yacute; trong Hợp đồng cho thu&ecirc;.
                                    </p>`,
										}}
									></Box>
								)}
							</Box>
						</Box>
					)}
				</Box>
			</Layout.MainBg>
			<Footer />
		</Box>
	);
};

export default Desktop;
