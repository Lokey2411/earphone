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

const items = [
	{
		id: 1,
		title: "Sản phẩm",
		content: "Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về sản phẩm, từ quy trình sản xuất đến cách bảo quản và pha chế. Chúng tôi cam kết mang đến trải nghiệm cà phê tốt nhất và sự hài lòng tối đa cho khách hàng.",
		image: "https://genk.mediacdn.vn/thumb_w/640/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg",
		link: "https://www.facebook.com/profile.php?id=61560917203069",
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
export { options, serviceTime, items };
