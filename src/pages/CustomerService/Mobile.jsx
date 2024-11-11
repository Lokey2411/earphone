import React, { useEffect, useMemo, useState } from "react";
import { styles } from "../../styles.js";
import { Box, Container, FormControl, FormControlLabel, Grid, List, ListItem, ListItemText, Radio, RadioGroup, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InputAdornment, TextField } from "@mui/material";
import CustomerSearchIcon from "../../component/svg/icon/CustomerSearchIcon";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import chamsockhachhang from "../../component/img/chamsockhachhang.png";
import chamsockhachhang2 from "../../component/img/chamsockhachhang2.png";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import CustomerArrowRightGreen from "../../component/svg/icon/CustomerArrowRightGreen";
import Footer from "../../component/layout/Footer";
import { useData } from "../../hooks/useData.js";
import FakeYoutube from "../../component/img/youtube.jpg";
import CallIcon from "../../component/svg/icon/CallIcon.jsx";
import ChatIcon from "../../component/svg/icon/ChatIcon.jsx";
import { ArrowBack, MenuOutlined } from "@mui/icons-material";
const options = [
	{
		value: "option1",
		title: "Sản phẩm",
		list: [
			{
				id: "item1_1",
				name: "Quán cà phê của bạn có những loại cà phê nào?",
				content: "Chúng tôi cung cấp nhiều loại cà phê bao gồm: Espresso, Latte, Capuccino, americano, macchiato, mocha  và nhiều loại cà phê đặc biệt khác. Bạn có thể xem thực đơn chi tiết trên trang Web của chúng tôi.",
			},
			{
				id: "item1_2",
				name: "Có các loại trà nào tại The Thanh Coffee?",
				content: "Chúng tôi có các loại Trà Ủ lạnh bao gồm: Trà Đen, Trà bá tước, Trà Matcha và Trà xanh đá chanh. Mỗi loại trà đều được lựa chọn kỹ lưỡng để mang đến hương vị thơm ngon và tươi mát nhất.",
			},
			{
				id: "item1_3",
				name: "Các món ăn nhẹ nào có sẵn tại quán?",
				content: "Chúng tôi cung cấp nhiều loại bánh ngọt, bánh mì và các món ăn nhẹ khác. Bạn có thể xem thực đơn chi tiết trên trang Web của chúng tôi.",
			},
			{
				id: "item1_4",
				name: "Thực phẩm và đồ uống tại quán có sử dụng nguyen liệu hữu cơ không?",
				content: "Chúng tôi sử dụng các nguyên liệu hữu cơ và tươi ngon nhất có thể đảm bảo chất lượng và hương vị tốt nhất cho món ăn và đồ uống của chúng tôi.",
			},
			{
				id: "item1_5",
				name: "Quán có chương trình khuyến mãi hay ưu đãi đặc biệt cho đồ uống và thực phẩm không?",
				content: "Có, chúng tôi thường xuyên có các chương trình khuyến mãi và ưu đãi đặc biệt. Bạn có thể theo dõi trang Web và các kênh như Facebook, Instagram,.. của chúng tôi để cập nhật thông tin mới nhất.",
			},
		],
	},
	{
		value: "option2",
		title: "Đặt hàng và thanh toán",
		list: [
			{
				id: "item2_1",
				name: "Quy trình đặt hàng tại quán là gì?",
				content: "Khách hàng có thể đặt hàng trực tiếp ở quán tại Địa chỉ: 147 Đội Cấn, Ba Đình, Hà Nội  hoặc qua điện thoại/website của chúng tôi.",
			},
			{
				id: "item2_2",
				name: "Quán cung cấp hóa đơn VAT cho đơn hàng không?",
				content: "Đúng vậy, chúng tôi cung cấp hóa đơn VAT cho mỗi đơn hàng.",
			},
			{
				id: "item2_3",
				name: "Quy trình xác nhận lại đơn hàng như thế nào?",
				content: "Chúng tôi sẽ gọi điện hoặc gửi email xác nhận lại đơn hàng trước khi giao hàng.",
			},
			{
				id: "item2_4",
				name: "Thời gian dự kiến giao hàng là bao lâu?",
				content: "Thời gian giao hàng thường từ 30 phút đến 1 giờ tùy thuộc vào khoảng cách và số lượng đơn hàng.",
			},
			{
				id: "item2_5",
				name: "Quý khách có yêu cầu đặc biệt nào khi đặt hàng không?",
				content: "Chúng tôi sẵn sàng đáp ứng các yêu cầu đặc biệt như đóng gói riêng, thêm topping hay thay đổi hương vị theo yêu cầu của khách hàng.",
			},
		],
	},
	{
		value: "option3",
		title: "Tuyển dụng",
		list: [
			{
				id: "item3_1",
				name: "Quán cà phê đang tìm kiếm vị trí nào và yêu cầu công việc là gì?",
				content: "Quán đang tìm kiếm các vị trí nhân viên phục vụ và pha chế. Yêu cầu công việc bao gồm phục vụ khách hàng, chuẩn bị và pha chế đồ uống, duy trì sạch sẽ và chất lượng dịch vụ.",
			},
			{
				id: "item3_2",
				name: "Mức lương và các phúc lợi khác như thế nào?",
				content: "Mức lương và các phúc lợi được cung cấp sẽ được thương lượng theo kinh nghiệm và kỹ năng của ứng viên. Các phúc lợi bao gồm bảo hiểm, bữa ăn, và các chương trình khuyến mãi cho nhân viên.",
			},
			{
				id: "item3_3",
				name: "Yêu cầu kinh nghiệm làm việc trong ngành cà phê hay các kỹ năng cụ thể nào?",
				content: "Ưu tiên ứng viên có kinh nghiệm làm việc trong ngành cà phê, có kỹ năng giao tiếp tốt, khả năng làm việc trong môi trường áp lực cao và sẵn sàng làm việc ca ngày và ca tối.",
			},
			{
				id: "item3_4",
				name: "Thời gian làm việc và ca làm việc như thế nào?",
				content: "Thời gian làm việc linh hoạt, bao gồm ca sáng, ca chiều và ca tối, cùng với các ngày cuối tuần và ngày lễ khi cần thiết.",
			},
			{
				id: "item3_5",
				name: "Quá trình phỏng vấn và lịch trình tuyển dụng như thế nào?",
				content: "Quá trình phỏng vấn bao gồm một cuộc trò chuyện cá nhân để đánh giá kỹ năng và phù hợp công việc. Lịch trình tuyển dụng sẽ được thông báo cụ thể sau khi xác định ứng viên phù hợp.",
			},
		],
	},
	{
		value: "option4",
		title: "Đối tác cung cấp",
		list: [
			{
				id: "item4_1",
				name: "Bạn có những nhà cung cấp nào hiện đang cung cấp nguyên liệu cho quán?",
				content: "Hiện tại, chúng tôi có một số nhà cung cấp đáng tin cậy cung cấp cà phê, sữa, đường và các nguyên liệu khác cho quán.",
			},
			{
				id: "item4_2",
				name: "Quán có tiêu chuẩn nào đối với việc chọn lựa nhà cung cấp?",
				content: "Chúng tôi chọn lựa nhà cung cấp dựa trên các tiêu chuẩn về chất lượng sản phẩm, giá cả hợp lý và tính bền vững của nguồn nguyên liệu.",
			},
			{
				id: "item4_3",
				name: "Quán đã xem xét các tiêu chuẩn về bền vững và nguồn gốc của các sản phẩm mình sử dụng chưa?",
				content: "Đúng vậy, chúng tôi luôn ưu tiên các sản phẩm có nguồn gốc bền vững và đảm bảo an toàn thực phẩm để đảm bảo sức khỏe của khách hàng và môi trường.",
			},
			{
				id: "item4_4",
				name: "Quy trình kiểm tra và đánh giá nhà cung cấp hiện tại của quán như thế nào?",
				content: "Chúng tôi thường xuyên kiểm tra chất lượng nguyên liệu và hợp đồng với các nhà cung cấp để đảm bảo chúng đáp ứng các tiêu chuẩn và yêu cầu của quán.",
			},
			{
				id: "item4_5",
				name: "Lịch trình đặt hàng và quản lý kho hàng như thế nào để đảm bảo nguyên liệu luôn đảm bảo sẵn có?",
				content: "Chúng tôi có một hệ thống quản lý kho hàng chặt chẽ và lên lịch đặt hàng định kỳ để đảm bảo nguyên liệu luôn có sẵn theo nhu cầu sản xuất và tiêu dùng.",
			},
		],
	},
	{
		value: "option5",
		title: "Liên hệ đầu tư",
		list: [
			{
				id: "item5_1",
				name: "Quán cà phê đã từng có kế hoạch mở rộng hoặc nâng cấp không?",
				content: "Hiện tại, chúng tôi đang xem xét kế hoạch mở rộng để cải thiện không gian và nâng cấp thiết bị để cung cấp dịch vụ tốt hơn cho khách hàng.",
			},
			{
				id: "item5_2",
				name: "Quán cà phê có kế hoạch mở rộng thêm chi nhánh hay không?",
				content: "Chúng tôi đang xem xét mở rộng và phát triển thêm các chi nhánh để tiếp cận nhiều khách hàng hơn và mở rộng thương hiệu của chúng tôi.",
			},
			{
				id: "item5_3",
				name: "Các kế hoạch đầu tư hiện tại của quán như thế nào để cải thiện hoạt động kinh doanh?",
				content: "Hiện nay, chúng tôi đang đầu tư vào việc nâng cấp hệ thống công nghệ, cải thiện quy trình phục vụ và đào tạo nhân viên để tăng cường trải nghiệm của khách hàng.",
			},
			{
				id: "item5_4",
				name: "Quán cà phê có dự định hợp tác với các đối tác đầu tư nào để phát triển không gian kinh doanh không?",
				content: "Chúng tôi đang trong quá trình thảo luận và xem xét các cơ hội hợp tác với các đối tác đầu tư để mở rộng hoạt động kinh doanh và cải thiện dịch vụ.",
			},
			{
				id: "item5_5",
				name: "Quán cà phê có chiến lược gì để thu hút đầu tư và phát triển thương hiệu không?",
				content: "Chúng tôi đang phát triển chiến lược marketing và truyền thông để thu hút đầu tư và nâng cao nhận thức thương hiệu của quán trên thị trường.",
			},
		],
	},
];
const serviceTime = [
	{
		id: 1,
		type: "TRÒ CHUYỆN",
		activeDay: "7 ngày một tuần",
		hours: "09:00 sáng - 17:00 chiều",
		opened: "Hiện đã đóng cửa",
	},
	{
		id: 2,
		type: "ĐIỆN THOẠI",
		activeDay: "7 ngày một tuần",
		hours: "09:00 sáng - 17:00 chiều",
		opened: "Hiện đã đóng cửa",
	},
];
const Mobile = () => {
	const items = [
		{
			id: 1,
			title: "Sản phẩm",
			content: "Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về sản phẩm, từ quy trình sản xuất đến cách bảo quản và pha chế. Chúng tôi cam kết mang đến trải nghiệm cà phê tốt nhất và sự hài lòng tối đa cho khách hàng.",
			image: "https://genk.mediacdn.vn/thumb_w/640/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg",
			link: "/do-uong",
			linkText: "Xem thêm >",
		},
		{
			id: 2,
			title: "Đặt hàng và thanh toán",
			content: "Quy trình đặt hàng đơn giản và nhanh chóng, cùng với các phương thức thanh toán đa dạng và an toàn, giúp khách hàng có thể dễ dàng thưởng thức những ly cà phê thơm ngon bất cứ lúc nào. Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc để đảm bảo trải nghiệm mua sắm của bạn luôn suôn sẻ và hài lòng.",
			image: "https://genk.mediacdn.vn/thumb_w/640/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg",
			link: "/tro-giup-mua-sam",
			linkText: "Xem thêm >",
		},
		{
			id: 3,
			title: "Tuyển dụng ",
			content: "Chúng tôi luôn tìm kiếm những ứng viên tài năng và nhiệt huyết để gia nhập đội ngũ The Thanh. Nếu bạn có bất kỳ câu hỏi nào về quá trình tuyển dụng, từ cách nộp hồ sơ đến quy trình phỏng vấn, đừng ngần ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ và cung cấp thông tin chi tiết để giúp bạn chuẩn bị tốt nhất cho cơ hội làm việc tại The Thanh Coffee.",
			image: "https://genk.mediacdn.vn/thumb_w/640/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg",
			link: "/tham-gia-the-thanh",
			linkText: "Xem thêm >",
		},
		{
			id: 4,
			title: "Đối tác cung cấp",
			content: "Chúng tôi hợp tác với những nhà cung cấp uy tín và đáng tin cậy để đảm bảo chất lượng tốt nhất cho mỗi sản phẩm cà phê. Nếu bạn có thắc mắc về nguồn gốc nguyên liệu hay quy trình sản xuất, hãy liên hệ với chúng tôi. The Thanh Coffee cam kết minh bạch và trung thực trong mọi thông tin để bạn hoàn toàn yên tâm khi thưởng thức từng giọt cà phê.",
			image: "https://genk.mediacdn.vn/thumb_w/640/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg",
			link: "/nha-cung-cap",
			linkText: "Xem thêm >",
		},
		{
			id: 5,
			title: "Liên hệ đầu tư",
			content: "Tận dụng chiến lược liên hệ đầu tư để nâng cao trải nghiệm khách hàng, tăng cường sự trung thành và tối đa hóa lợi nhuận. Hãy khám phá cách The Thanh Coffee đổi mới và tiên phong trong ngành cà phê, mang lại giá trị đích thực cho từng khách hàng.",
			image: "https://genk.mediacdn.vn/thumb_w/640/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg",
			link: "/lien-he-dau-tu",
			linkText: "Xem thêm >",
		},
	];

	// const slider = React.useRef(null);
	// var chamsockhachhangSetting = {
	//     slidesToShow: 1,
	//     slidesToScroll: 1,
	//     arrows: false,
	// };
	const [serviceSearch, setServiceSearch] = useState("");
	const [selectedOptionValue, setSelectedOptionValue] = useState("option1");
	const [selectedItemId, setSelectedItemId] = useState(null);
	const [searchHelp, setSearchHelp] = useState();
	const [isHelpPage, setIsHelpPage] = useState(true);
	const [customerServiceItems] = useData("departments/0");
	const [supportedInformations] = useData("supported-informations");
	const [services, setServices] = useState([]);
	const handleOptionChange = (event) => {
		setSelectedOptionValue(event.target.value);
		setSelectedItemId(null);
	};
	const handleItemClick = (id) => {
		setSelectedItemId(id);
	};
	const handleSearch = (event) => {
		setServiceSearch(event.target.value);
		setServices(allServices.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase())));
	};
	const selectedOption = options.find((option) => option.value === selectedOptionValue);
	const selectedItem = selectedOption?.list.find((item) => item.id === selectedItemId);
	useEffect(() => {
		if (serviceSearch === "") setSearchHelp(null);
		else {
			setSearchHelp(
				options?.filter((items, id) => {
					return items?.list[id].name?.toLowerCase().includes(serviceSearch?.toLowerCase());
				})
			);
		}
	}, [serviceSearch]);
	const allServices = useMemo(() => {
		let values = [];
		options.forEach((item) => {
			console.log("Vao");
			const { list } = item;
			list.forEach((listItem) => {
				values.push(listItem);
			});
		});
		return values;
	}, [options]);
	const [time, setTime] = useState("Hiện đã đóng cửa");
	useEffect(() => {
		setInterval(() => {
			var now = new Date().getHours();
			if (now >= 9 && now < 17) {
				setTime("Hiện đang mở");
			}
		});
	});
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			<NavBar />
			<Layout.SecondaryBg>
				<Box sx={{ position: "relative" }}>
					<Box sx={{ ...styles.centerFlex, height: "200px" }}>
						<img
							width={"100%"}
							height={"100%"}
							alt=""
							src={chamsockhachhang}
							style={{ objectFit: "cover" }}
						/>
					</Box>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							...styles.pad20,
						}}
					>
						<Box
							sx={{
								fontSize: "20px",
								...styles.fontColor.mauTrang,
								fontWeight: "700",
								pt: "23.75px",
								textAlign: "center",
							}}
						>
							Dịch vụ chăm sóc khách hàng
						</Box>
						<Box sx={{ mt: "20px", position: "relative" }}>
							{searchHelp && (
								<Box
									sx={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 40,
										zIndex: 2,
									}}
								>
									{services?.map((items) => (
										<Box
											onClick={() => {
												setIsHelpPage(false);
												const id = items.id.charAt(4);
												console.log(id);
												setSelectedOptionValue("option" + id);
												setSelectedItemId(items.id);
												setServices([]);
											}}
											key={items.id}
											sx={{
												background: "white",
												p: "10px 20px",
												":hover": {
													background: "black",
													color: "white",
													cursor: "pointer",
												},
											}}
										>
											<Box>{items.name}</Box>
										</Box>
									))}
								</Box>
							)}
							<Container
								sx={{
									"&.MuiContainer-root": {
										maxWidth: "100%",
									},
								}}
								disableGutters
							>
								<TextField
									type="search"
									id="dichvuchamsoc"
									placeholder="Chúng tôi có thể giúp gì cho bạn?"
									value={serviceSearch}
									onChange={handleSearch}
									onKeyDown={handleSearch}
									onClick={(e) => {
										e.stopPropagation();
									}}
									sx={{
										...styles.fontSize13,
										color: "black",
										width: "100%",
										...styles.backgroundColor.mauTrang,
										"& .MuiOutlinedInput-root": {
											borderRadius: "8px",
										},
										".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline,&.MuiTextField-root": {
											borderRadius: "8px",
											border: "none",
										},
										".MuiInputBase-root": {
											paddingRight: "0px",
											marginRight: 0,
										},
										".MuiInputBase-input": {
											p: "12px 0px",
										},
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment
												sx={{
													".MuiInputAdornment-outlined": {
														marginRight: 0,
													},
												}}
												position="start"
											>
												<CustomerSearchIcon />
											</InputAdornment>
										),
									}}
								/>
							</Container>
						</Box>
						{/* <Box
                            sx={{
                                ...styles.centerFlex,
                                pt: "30px",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                columnGap: "20px",
                                rowGap: "8px",
                            }}
                        >
                            <Box
                                onClick={() => setServiceSearch("Thiếu sao")}
                                sx={{
                                    ...styles.fontColor.mauTrang,
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    p: "4px 16px",
                                    ...styles.backgroundColor.xanh00754A,
                                    border: 0,
                                    borderRadius: "18px",
                                    cursor: "pointer",
                                }}
                            >
                                Thiếu sao
                            </Box>
                            <Box
                                onClick={() => setServiceSearch("Trả phí")}
                                sx={{
                                    ...styles.fontColor.mauTrang,
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    p: "4px 16px",
                                    ...styles.backgroundColor.xanh00754A,
                                    border: 0,
                                    borderRadius: "18px",
                                    cursor: "pointer",
                                }}
                            >
                                Trả phí
                            </Box>
                            <Box
                                onClick={() =>
                                    setServiceSearch("Đơn hàng không đầy đủ")
                                }
                                sx={{
                                    ...styles.fontColor.mauTrang,
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    p: "4px 16px",
                                    ...styles.backgroundColor.xanh00754A,
                                    border: 0,
                                    borderRadius: "18px",
                                    cursor: "pointer",
                                }}
                            >
                                Đơn hàng không đầy đủ
                            </Box>
                        </Box> */}
					</Box>
				</Box>
				{/* <Box
                    sx={{
                        ...styles.backgroundColor.xanhlacay06542D,
                        p: "16px 24px",
                    }}
                >
                    <Slider ref={slider} {...chamsockhachhangSetting}>
                        {customerServiceItems?.services?.map((e) => (
                            <Box
                                sx={{
                                    ...styles.fontColor.mauTrang,
                                }}
                                key={e.id}
                            >
                                <Box
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "18px",
                                    }}
                                >
                                    {e.title}
                                </Box>
                                <Box
                                    sx={{
                                        lineHeight: "150%",
                                        fontSize: "14px",
                                        p: "12px 0px 28px",
                                        textAlign: "center",
                                    }}
                                >
                                    {e.details}
                                </Box>
                                <Box
                                    sx={{
                                        ...styles.centerFlex,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            p: "10px 16px",
                                            border: "solid white 0.5px",
                                            borderRadius: "18px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                            }}
                                        >
                                            Xem thêm
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                    <Box
                        sx={{
                            ...styles.centerFlex,
                            justifyContent: "center",
                            pt: "8px",
                        }}
                    >
                        <button
                            style={{
                                margin: 0,
                                padding: 0,
                                ...styles.backgroundColor.xanhlacay06542D,
                                border: 0,
                                cursor: "pointer",
                            }}
                            onClick={() => slider?.current?.slickPrev()}
                        >
                            <ArrowPrevGray />
                        </button>
                        <button
                            style={{
                                margin: 0,
                                padding: 0,
                                ...styles.backgroundColor.xanhlacay06542D,
                                border: 0,
                                cursor: "pointer",
                            }}
                            onClick={() => slider?.current?.slickNext()}
                        >
                            <ArrowNextGray />
                        </button>
                    </Box>
                </Box> */}
				<Box sx={{ p: "20px 24px" }}>
					<Grid
						container
						spacing={2}
					>
						{items?.map((item) => (
							<Grid
								item
								xs={6}
								key={item.id}
							>
								<Box
									onClick={() => {
										setIsHelpPage(false);
										setSelectedOptionValue("option" + item.id);
										setSelectedItemId("");
									}}
									sx={{
										p: "25px 10px",
										background: "rgba(0,0,0,0.1)",
										textAlign: "center",
										height: "70px",
										...styles.centerFlex,
										justifyContent: "center",
										borderRadius: "19px",
										fontWeight: "600",
										fontSize: "16px",
									}}
								>
									{item.title}
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
				{isHelpPage ? (
					<Box sx={{ p: "20px 24px 0px" }}>
						<Box
							sx={{
								...styles.centerFlex,
								flexDirection: "column",
								gap: "42px",
								alignItems: "left",
							}}
						>
							{supportedInformations?.map((item) => (
								<Box>
									<Box
										sx={{
											width: "55px",
											height: "55px",
											backgroundColor: "black",
											borderRadius: "50%",
										}}
									></Box>
									<Box
										sx={{
											fontSize: "20px",
											fontWeight: 700,
											p: "20px 0px 6px",
										}}
									>
										{item.description}
									</Box>
									<Box
										sx={{
											lineHeight: "150%",
											fontSize: "14px",
											pb: "40px",
										}}
									>
										{item.title}
									</Box>
									<button
										style={{
											padding: 0,
											margin: 0,
											border: "none",
											...styles.backgroundColor.mauTra,
											cursor: "pointer",
										}}
									>
										<Box
											sx={{
												...styles.centerFlex,
												gap: "8px",
											}}
										>
											<Box
												sx={{
													...styles.fontColor.xanhNhat006241,
													fontSize: "16px",
												}}
											>
												<a href={item.detailLink}>{item.detailText}</a>
											</Box>
											<Box>
												<CustomerArrowRightGreen />
											</Box>
										</Box>
									</button>
								</Box>
							))}
						</Box>
						<Box
							sx={{
								p: "0px 0px 28px",
								lineHeight: "150%",
								fontSize: "20px",
								fontWeight: 700,
							}}
						>
							Liên hệ
						</Box>
						<a href="https://web.facebook.com/profile.php?id=61560917203069">
							<Box
								sx={{
									background: "black",
									p: "15px 20px",
									borderRadius: "8px",
									color: "white",
								}}
							>
								<Box sx={{ ...styles.centerFlex, gap: "20px" }}>
									<Box
										sx={{
											"svg>path": { fill: "white" },
											width: "24px",
											height: "24px",
											...styles.centerFlex,
											justifyContent: "center",
											borderRadius: "10px",
										}}
									>
										<ChatIcon />
									</Box>
									<Box
										sx={{
											...styles.fontColor.mauTrang,
											fontSize: "14px",
											lineHeight: "150%",
										}}
									>
										<Box>Nhắn tin trực tiếp qua</Box>
										<Box>Fanpage của The Thanh Coffee</Box>
									</Box>
								</Box>
							</Box>
						</a>
						<a href="tel:0911.830.666">
							<Box
								sx={{
									p: "15px 20px",
									borderRadius: "8px",
									mt: "14px",
									background: "black",
									color: "white",
								}}
							>
								<Box sx={{ ...styles.centerFlex, gap: "20px" }}>
									<Box
										sx={{
											"svg>path": { fill: "white" },
											width: "24px",
											height: "24px",
											...styles.centerFlex,
											justifyContent: "center",
											borderRadius: "10px",
										}}
									>
										<CallIcon />
									</Box>
									<Box
										sx={{
											...styles.fontColor.mauTrang,
											fontSize: "14px",
											lineHeight: "150%",
										}}
									>
										<Box>Số hotline:</Box>
										<Box>(+84) 0911.830.666</Box>
									</Box>
								</Box>
							</Box>
						</a>
						{/* Tìm kiếm thêm chủ đề */}
						{/* <Box
            sx={{
              p: "40px 0px",
              fontSize: "20px",
              lineHeight: "150%",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Tìm kiếm thêm chủ đề
          </Box>
          <Container
            sx={{
              "&.MuiContainer-root": {
                maxWidth: "100%",
              },
            }}
            disableGutters
          >
            <TextField
              type="search"
              id="timkiem"
              placeholder="Tìm kiếm"
              //   value={}
              //   onChange={}
              //   onClick={(e) => {
              //     e.stopPropagation();
              //   }}
              sx={{
                ...styles.fontSize13,
                color: "black",
                width: "100%",
                ...styles.backgroundColor.mauTrang,
                "& .MuiOutlinedInput-root": { borderRadius: "27px" },
                ".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline,&.MuiTextField-root":
                  { borderRadius: "27px", border: "none" },
                ".MuiInputBase-root": {
                  paddingRight: "0px",
                  marginRight: 0,
                },
                ".MuiInputBase-input": { p: "15px 0px" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{
                      ".MuiInputAdornment-outlined": {
                        marginRight: 0,
                      },
                    }}
                    position="start"
                  >
                    <CustomerSearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Container> */}
						<Box
							sx={{
								mt: "64px",
								p: "40px 20px",
								textAlign: "center",
								...styles.fontColor.mauTrang,
								background: "black",
							}}
						>
							<Box
								sx={{
									fontSize: "28px",
									fontWeight: 700,
									pb: "20px",
								}}
							>
								Xem video Hỗ trợ của The Thanh Coffee
							</Box>
							<Box
								sx={{
									fontSize: "14px",
									lineHeight: "150%",
									pb: "8px",
								}}
							>
								Hãy xem kênh Youtube chính thức của chúng tôi để giúp bạn tận dụng tốt các loại đồ uống và dịch vụ của chúng tôi.
							</Box>
							<Box
								sx={{
									color: "#E0CB88",
									fontSize: "14px",
									lineHeight: "150%",
								}}
							>
								<a href="https://www.youtube.com/channel/UCy2mvbfD_-dFGKu_sVc4Ulg">Truy cập hỗ trợ của The Thanh Coffee trên Youtube</a>
							</Box>
						</Box>
						<Box sx={{ ...styles.centerFlex, pb: "40px" }}>
							<img
								width={"100%"}
								alt=""
								src={FakeYoutube}
							/>
						</Box>
					</Box>
				) : (
					<Box
						sx={{
							...styles.fontSize13,
							position: "fixed",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%",
							background: "#ffffff" /* Màu nền với độ mờ */,
							zIndex: "1000",
						}}
					>
						<Box
							sx={{
								width: "100%",
								height: "100%",
								maxWidth: "100%",
								maxHeight: "100%",
								overflow: "auto",
							}}
						>
							<Box
								sx={{
									p: "24px",
								}}
							>
								<Box>
									<Box sx={{}}>
										<Box sx={{}}>
											<Box sx={{ mb: "20px" }}>
												<Box
													onClick={() => setIsHelpPage(true)}
													sx={{
														fontSize: "14px",
														fontWeight: "500",
														cursor: "pointer",
														borderRadius: "39px",
														border: "1px solid black",
														p: "10px 28px",
													}}
												>
													{"<-"} Quay lại Trang chủ trợ giúp
												</Box>
												{/* <Box sx={{}}>
                                                    <Box
                                                        sx={{
                                                            fontSize: "36px",
                                                            fontWeight: "600",
                                                            pb: "30px",
                                                        }}
                                                    >
                                                        Các câu hỏi chủ đề
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            fontSize: "24px",
                                                        }}
                                                    >
                                                        <FormControl component="fieldset">
                                                            <RadioGroup
                                                                aria-label="options"
                                                                name="options"
                                                                value={
                                                                    selectedOptionValue
                                                                }
                                                                onChange={
                                                                    handleOptionChange
                                                                }
                                                            >
                                                                {options.map(
                                                                    (
                                                                        option,
                                                                        index
                                                                    ) => (
                                                                        <FormControlLabel
                                                                            key={
                                                                                index
                                                                            }
                                                                            value={
                                                                                option.value
                                                                            }
                                                                            control={
                                                                                <Radio
                                                                                    sx={{
                                                                                        "&.Mui-checked":
                                                                                            {
                                                                                                color: "#000000",
                                                                                            },
                                                                                    }}
                                                                                />
                                                                            }
                                                                            label={
                                                                                <Typography
                                                                                    sx={{
                                                                                        fontWeight:
                                                                                            selectedOptionValue ===
                                                                                            option.value
                                                                                                ? "bold"
                                                                                                : "normal",
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        option.title
                                                                                    }
                                                                                </Typography>
                                                                            }
                                                                        />
                                                                    )
                                                                )}
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Box>
                                                </Box> */}
											</Box>
											<Box sx={{}}>
												{/* <Box
                                                    sx={{
                                                        fontSize: "24px",
                                                        color: "#1C1B1F",
                                                    }}
                                                >
                                                    Trang Chủ Trợ Giúp /{" "}
                                                    {selectedOption.title}
                                                </Box> */}
												<Box sx={{}}>
													{!selectedItem ? (
														<>
															<Typography
																fontSize="36px"
																fontWeight="600"
															>
																{selectedOption.title}
															</Typography>
															<Typography variant="body1">{selectedOption.content}</Typography>
															<List>
																{selectedOption.list.map((item) => (
																	<ListItem
																		button
																		key={item.id}
																		selected={item.id === selectedItemId}
																		onClick={() => handleItemClick(item.id)}
																	>
																		<MenuOutlined />
																		<Box
																			sx={{
																				ml: "15px",
																			}}
																		>
																			<ListItemText primary={item.name} />
																		</Box>
																	</ListItem>
																))}
															</List>
														</>
													) : (
														<Box>
															<Typography
																fontSize="24px"
																fontWeight="600"
																marginBottom="30px"
															>
																{selectedItem.name}
															</Typography>
															<Typography
																fontSize="14px"
																variant="body1"
															>
																{selectedItem.content}
															</Typography>
															<Box mt="20px">
																<Box
																	variant="button"
																	onClick={() => setSelectedItemId(null)}
																	style={{
																		padding: "5px 10px",
																		cursor: "pointer",
																		border: "2px solid #000000",
																		borderRadius: "19px",
																		boxSizing: "border-box",
																		display: "inline-flex",
																	}}
																>
																	<Box
																		sx={{
																			svg: {
																				width: 15,
																				height: 15,
																			},
																			...styles.centerFlex,
																		}}
																	>
																		<ArrowBack />
																	</Box>
																	<Box
																		sx={{
																			ml: "5px",
																			fontSize: "14px",
																			fontWeight: "500",
																		}}
																	>
																		Trở về
																	</Box>
																</Box>
															</Box>
														</Box>
													)}
												</Box>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											p: "10px 0px",
										}}
									>
										<Box
											sx={{
												fontSize: "36px",
												fontWeight: "600",
												pb: "5px",
											}}
										>
											Bạn cần liên hệ?
										</Box>
										<Box
											sx={{
												fontSize: "14px",
												pb: "14px",
											}}
										>
											Bạn cần liên hệ? Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng
										</Box>
										<Box
											sx={{
												fontSize: "14px",
												fontWeight: "500",
												pb: "20px",
											}}
										>
											<a href="https://web.facebook.com/profile.php?id=61560917203069">
												<Box
													sx={{
														display: "flex",
														border: "2px solid #000000",
														borderRadius: "39px",
														p: "10px 15px",
														gap: "15px",
														mb: "10px",
													}}
												>
													<ChatIcon />
													<Box>Trò chuyện với chúng tôi</Box>
												</Box>
											</a>
											<a href="tel:0911.830.666">
												<Box
													sx={{
														display: "flex",
														border: "2px solid #000000",
														borderRadius: "39px",
														p: "10px 15px",
														gap: "15px",
													}}
												>
													<CallIcon />
													<Box>Gọi cho chúng tôi</Box>
												</Box>
											</a>
										</Box>
										<Box
											sx={{
												fontSize: "14px",
												fontWeight: "500",
												pb: "10px",
											}}
										>
											Giờ phục vụ khách hàng
										</Box>
										<Table
											sx={{
												"& .MuiTableCell-root": {
													fontFamily: "Inter",
													border: 0,
													fontSize: "10px",
													pl: "0px",
												},
											}}
										>
											<TableBody>
												{serviceTime.map((item) => (
													<TableRow key={item.id}>
														<TableCell align="left">{item.type}</TableCell>
														{/* <TableCell align="left">
                                                            {item.activeDay}
                                                        </TableCell> */}
														<TableCell align="left">{item.hours}</TableCell>
														<TableCell
															sx={
																time === "Hiện đã đóng cửa"
																	? {
																			color: "#F90000",
																	  }
																	: {
																			color: "#006421",
																	  }
															}
															align="left"
														>
															{time === "Hiện đã đóng cửa" ? <Box>Hiện đã đóng cửa</Box> : <Box>Hiện đang mở</Box>}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				)}
			</Layout.SecondaryBg>
			<Footer />
		</Box>
	);
};

export default Mobile;
