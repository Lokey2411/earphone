import { useAbouts } from "../hooks/useAbouts";

const content = [
	{
		title: "Nền tảng mạng xã hội",
		imgSrc: "https://cdn.tgdd.vn/hoi-dap/845011/mang-xa-hoi-la-gi%20(4)-800x450.jpg",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px; padding-bottom: 20px;">
        <p>
          The Thanh Coffee nghiêm cấm nhân viên The Thanh Coffee cung cấp hoặc nhận hối lộ. Chúng tôi tuân thủ luật chống tham nhũng Việt Nam. Ngay cả khi các đối thủ cạnh tranh của chúng tôi đưa hối lộ hoặc thực hiện các khoản thanh toán đáng ngờ, The Thanh Coffee không khoan nhượng đối với hành vi hối lộ hoặc bất kỳ hoạt động nào khác vi phạm các luật này:
        </p>
        <h2 style="font-size: 24px; font-weight: bold; line-height: 32px; padding-bottom: 20px;">
          Đăng một cách xây dựng lên các trang mạng xã hội
        </h2>
        <p>
          Việc đóng góp vào nền tảng trực tuyến — bao gồm mạng xã hội, blog, wiki, podcast và thế giới ảo — cho phép chúng tôi thể hiện tinh thần và khả năng sáng tạo của The Thanh Coffee. Phát ngôn trực tuyến giúp chúng ta phát huy năng lực, xây dựng các mối quan hệ bền chặt hơn và nâng cao uy tín của mình.
        </p>
        <details>
          <summary style="padding-bottom: 17px; padding-top: 36px; border-bottom: 1px solid black; margin-bottom: 16px; font-size: 20px; font-weight: bold;"> TÌM HIỂU THÊM</summary>
          <div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
            <p>Những điều cần lưu ý khi sử dụng những trang web này:</p>
            <ul>
              <li>Giao tiếp chu đáo và không bao giờ đăng nội dung thiếu tôn trọng, quấy rối hoặc phân biệt đối xử.</li>
              <li>Cung cấp đầy đủ ngữ cảnh và hỗ trợ trong giao tiếp trực tuyến cá nhân.</li>
              <li>Nhận được sự chấp thuận trước khi nhắc tới The Thanh Coffee.</li>
              <li>Minh bạch và xác định rõ bản thân khi bình luận về các vấn đề của The Thanh Coffee.</li>
              <li>Bảo vệ thông tin không công khai liên quan đến hoạt động kinh doanh.</li>
              <li>Không xác định một công ty là khách hàng trừ khi được phép.</li>
              <li>Quan tâm đến quyền riêng tư của bạn và tôn trọng quyền riêng tư của người khác.</li>
            </ul>
          </div>
        </details>
      </div>
    `,
	},
	{
		title: "Làm việc với các bên thứ 3",
		imgSrc: "https://images.inc.com/uploaded_files/image/1920x1080/getty_518871222_2000133420009280201_388806.jpg",
		contentHtml: `
      <p style="font-size: 16px; line-height: 24px; color: #353535; padding-bottom: 20px;">
        Chúng tôi hợp tác với các công ty khác và thu hút các cá nhân, bao gồm cả Cố vấn cấp cao, từ bên ngoài công ty để mang lại những điều tốt nhất cho khách hàng và công ty. Những mối quan hệ này ngày càng quan trọng thúc đẩy tác động và sự đổi mới của chúng tôi. Đồng thời, làm việc với các tổ chức và cá nhân khác làm nảy sinh những rủi ro tiềm tàng về tài chính, pháp lý và uy tín. Do đó, những tình huống này cần có sự cung cấp bổ sung và lời khuyên của chuyên gia. Tất cả các đồng nghiệp được yêu cầu đảm bảo rằng bất kỳ bên thứ ba nào hợp tác với công ty hoặc cung cấp dịch vụ cho công ty đều được kiểm tra một cách thích hợp và tuân thủ các chính sách trung gian tư vấn, nhân viên bên ngoài và đối tác của chúng tôi.

      </p>
    `,
	},
	{
		title: "Báo cáo tài chính",
		imgSrc: "https://www.vietcredit.com.vn/wp-content/uploads/2018/06/banner-report.jpg",
		contentHtml: `
      <p style="font-size: 16px; line-height: 24px; margin-bottom: 20px;">
        Chúng tôi chuẩn bị và cung cấp các công bố và báo cáo tài chính chính xác, kịp thời và đầy đủ.
      </p>
      <p style="font-size: 24px; font-weight: bold; line-height: 32px; margin-bottom: 20px;">
        Công bố chính xác thông tin tài chính
      </p>
      <p style="font-size: 16px; line-height: 24px; margin-bottom: 20px;">
        The Thanh Coffee nghiêm cấm nhân viên The Thanh Coffee cung cấp hoặc nhận hối lộ. Chúng tôi tuân thủ luật chống tham nhũng Việt Nam. Ngay cả khi các đối thủ cạnh tranh của chúng tôi đưa hối lộ hoặc thực hiện các khoản thanh toán đáng ngờ, The Thanh Coffee không khoan nhượng đối với hành vi hối lộ hoặc bất kỳ hoạt động nào khác vi phạm các luật này:

      </p>
    `,
	},
	{
		title: "Hồ sơ Kinh doanh",
		imgSrc: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2023/10/03/nop-ho-so-dang-ky-doanh-nghiep.jpg",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px; color: #353535; padding-bottom: 20px;">
        Chúng tôi quản lý và xử lý hồ sơ Kinh doanh theo thời gian biểu chuẩn của The Thanh Coffee để lưu giữ, tùy thuộc vào các yêu cầu hợp đồng và pháp lý khác, chẳng hạn như thông báo lưu giữ do Bộ phận pháp lý phát hành.
      </div>
      <div style="display: flex">
        <a href="/ho-so-kinh-doanh" rel="noopener noreferrer" style="text-decoration: none;">
          <div style="font-size: 20px; border: 2px solid black; padding: 16px;">
            TÌM HIỂU THÊM ->
          </div>
        </a>
      </div>
    `,
	},
	{
		title: "Mua sắm hàng hoá và dịch vụ",
		imgSrc: "https://images.baoangiang.com.vn/image/fckeditor/upload/2021/20210207/images/T10-HC.jpg",
		contentHtml: `
      <p style="font-size: 16px; line-height: 24px; padding-bottom: 20px;">
        Chúng tôi mua hàng hóa và dịch vụ dựa trên năng lực và kinh nghi&#7871;m của nh&#224; th&#224;o v&#224; đảm b&#227;o r&#7863;ng rằng nh&#226;n vi&#234;n nh&#224; cung cấp (bao gồm c&#242;n nh&#224; th&#224;o) cung cấp d&#236;ch v&#249; cho The Thanh Coffee v&#224; kh&#225;ch h&#224;ng c&#249;a ch&#250;ng t&#244;i tu&#226;n theo c&#225;c yu c&#7847;u v&#224; th&#7911; t&#7911;c v&#7873; cam k&#7871;t, tu&#226;n th&#7911; v&#224; &#273;ảm b&#227;o ti&#7871;u chu&#7849;n.
      </p>
      <p style="font-size: 24px; font-weight: bold; line-height: 32px;">
        Mua hàng hóa và dịch vụ dựa trên năng lực và thành tích.
        </p>
        <p style="font-size: 16px; line-height: 24px;">
        <br>
      Chúng tôi là những người mua cẩn thận. The Thanh Coffee mua hàng hóa và dịch vụ dựa trên giá cả, chất lượng, hiệu suất và tính phù hợp. Chúng tôi không mua từ khách hàng của chúng tôi chỉ vì họ giao dịch và sử dụng dịch vụ từ chúng tôi. The Thanh Coffee đã phân công người ra quyết định mua hàng, thanh toán hóa đơn và ký hợp đồng với nhà cung cấp.
        Chúng tôi là những người mua cẩn thận. The Thanh Coffee mua hàng hóa và dịch vụ dựa trên giá cả, chất lượng, hiệu suất và tính phù hợp. Chúng tôi không mua từ khách hàng của chúng tôi chỉ vì họ giao dịch và sử dụng dịch vụ từ chúng tôi. The Thanh Coffee đã phân công người ra quyết định mua hàng, thanh toán hóa đơn và ký hợp đồng với nhà cung cấp.
      </p>
      <details>
        <summary style="
            padding-bottom: 17px;
            padding-top: 36px;
            border-bottom: 1px solid black;
            margin-bottom: 16px;
            font-size: 20px;
            font-weight: 700;"> TÌM HIỂU THÊM</summary>
        <div style="padding: 10px;
            margin-top: 10px;
            color: black;
            font-size: 16px;
            font-family: Inter;
            line-height: 24px;">
        <p>Sử dụng các quy trình tiêu chuẩn và các hợp đồng nhà cung cấp ưu tiên đã được tổ chức mua sắm của chúng tôi đưa ra. Khi tham gia các thỏa thuận cung cấp mới, hãy cân bằng hợp lý giữa giá trị và rủi ro. Khi quyết định trao công việc, hãy xem xét hiệu suất về môi trường, đạo đức và tính đa dạng của nhà cung cấp. Thực hiện theo các hướng dẫn và nhận được sự chấp thuận cho việc thuê Lãnh đạo The Thanh Coffee cho các dịch vụ theo hợp đồng.</p><p>Tránh các giao dịch có vấn đề. Tránh các giao dịch có vẻ không phù hợp hoặc bất hợp pháp hoặc có thể trình bày sai các báo cáo hoặc kết quả kế toán của bất kỳ bên nào trong giao dịch.</p><p>Đảm bảo rằng nhân viên nhà cung cấp (bao gồm cả nhà thầu) cung cấp dịch vụ cho The Thanh Coffee và khách hàng của chúng tôi tuân theo các yêu cầu và thủ tục về cam kết, tuân thủ và rút lui.</p><p>Chúng tôi tuân theo các tiêu chuẩn cao của các nhà cung cấp. Các nhà cung cấp của chúng tôi phải hành động theo cách phù hợp với Tiêu chuẩn Ứng xử dành cho Nhà cung cấp của The Thanh Coffee, được xây dựng dựa trên các giá trị cốt lõi của The Thanh Coffee và ủng hộ các phương thức Kinh doanh có trách nhiệm.</p>
        </div>
      </details>
    `,
	},
	{
		title: "Điều tra, Tố tụng và Kiểm toán",
		imgSrc: "https://media.tapchitaichinh.vn/w1480/images/upload/buituananh/03262021/kiem-toan-la-gi.png",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px; color: #353535; padding-bottom: 20px;">
        Chúng tôi tuân thủ và hợp tác đầy đủ với các cuộc điều tra, kiện tụng và kiểm toán; chúng tôi để các chuyên gia điều tra và chỉ làm việc với những người được ủy quyền; và chúng tôi xác định và lưu giữ thông tin liên quan và bảo vệ thông tin liên lạc bí mật.
      </div>
      <div style="display: flex">
        <a href="/dieu-tra" rel="noopener noreferrer">
          <div style="font-size: 20px; padding: 16px; font-weight: 500;">
            TÌM HIỂU THÊM ->
          </div>
        </a>
      </div>
    `,
	},
];

/**
 * Returns an object with the content, refetch function and isLoading flag of the responsiblity page.
 * The content is an array of objects, each containing the title, imgSrc and contentHtml of a section.
 * The content is fetched from the API and cached, so the refetch function can be used to refetch the data.
 * The isLoading flag is true when the data is being fetched and false when the data is available.
 *
 * @returns {Object} An object with the content, refetch function and isLoading flag.
 */
export const useResponsibilityContent = () => {
	const [data, refetch, isLoading] = useAbouts();
	return {
		content:
			data && data[0]
				? data.map((item, index) => ({
						...item,
						contentHtml: item.details,
						imgSrc: item.image,
				  }))
				: content,
		refetch,
		isLoading,
	};
};
