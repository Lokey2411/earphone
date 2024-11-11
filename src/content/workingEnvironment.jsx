import baomatdulieu1 from "../component/img/baomatdulieu1.jpg";
import { useAbouts } from "../hooks/useAbouts";

const contentSections = [
	{
		horizontal: true,
		parentStyle: {
			"& details summary": {
				listStyle: "none",
				userSelect: "none",
				cursor: "pointer",
			},
			"& details summary::before": {
				content: "'+'",
				mr: "8px",
			},
			"& details[open] summary::before": {
				content: "'-'",
			},
		},
		title: "Đối xử với nhau bằng sự tôn trọng, tạo nên môi trường hoà nhập, đa dạng",
		contentHtml: `
                <div style="font-size: 16px; line-height: 24px; color: #353535; padding-top: 32px;">
                      <p>Chúng tôi coi trọng một nền văn hóa hòa nhập và một môi trường làm việc an toàn và tôn trọng. Sự đa dạng trong các nhóm của chúng tôi cải thiện tính sáng tạo trong tư duy, chất lượng công việc và góp phần tăng kinh nghiệm phát triển cho nhân viên của The Thanh Coffee.</p>
                      <p>Chúng tôi mong muốn mọi đồng nghiệp phải có trách nhiệm với nhau để đảm bảo một môi trường làm việc lành mạnh và một môi trường mà mọi người đều được đối xử tôn trọng và giữ gìn phẩm giá, mọi người đều cảm thấy được chào đón và an toàn để có thể phát triển và trở thành phiên bản tốt hơn mỗi ngày. Chúng tôi không chấp nhận sự phân biệt đối xử, quấy rối hoặc bắt nạt dưới mọi hình thức. Kỳ vọng của chúng tôi về hành vi mở rộng đến tất cả các tương tác trong và ngoài môi trường văn phòng bao gồm nhóm, thực hành và các sự kiện văn phòng và thông qua liên lạc điện tử.</p>
                      <p>The Thanh Coffee không chấp nhận hành vi thiếu tôn trọng hoặc quấy rối dưới bất kỳ hình thức nào. Điều quan trọng khi đánh giá hành vi thiếu tôn trọng hoặc hành vi quấy rối là hành vi được tiếp nhận bởi cá nhân bị tác động như thế nào, chứ không phải là hành vi đó có cố ý hay không. Nếu bị coi là thiếu tôn trọng hoặc quấy rối một cách hợp lý, The Thanh Coffee sẽ nghiêm cấm hành vi đó.</p>
                  </div>
                  <div style="font-size: 20px; color: black; padding-top: 40px;">
                  <details>
									<summary style="padding-bottom: 17px; border-bottom: 1px solid black; margin-bottom: 16px; cursor: pointer;">TÌM HIỂU THÊM</summary>
									<div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
										Hành vi thiếu tôn trọng và quấy rối có thể có nhiều hình thức, bao gồm nhưng không giới hạn ở:
										<ul>
											<li>Điều gì đó ai đó nói hoặc làm (hoặc không nói hoặc làm), dù trực tiếp hay từ xa</li>
											<li>Email, thư hoặc tài liệu</li>
											<li>Bài đăng trên Internet hoặc mạng nội bộ</li>
											<li>Tin nhắn được gửi bằng tin nhắn nhanh, các ứng dụng nhắn tin OTT</li>
											<li>Một cử chỉ thể chất hoặc hành vi khiếm nhã</li>
										</ul>
									</div>
								</details>
								<details>
									<summary style="padding-bottom: 17px; border-bottom: 1px solid black;">VÍ DỤ</summary>
									<div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
										<strong>Ví dụ về hành vi thiếu tôn trọng — cũng có thể tăng đến mức quấy rối (nếu có một khuôn mẫu ứng xử duy trì, một sự cố nghiêm trọng duy nhất hoặc nếu dựa trên các đặc điểm cá nhân như chủng tộc, màu da, tổ tiên, nguồn gốc quốc gia / khu vực hoặc dân tộc , tôn giáo, giới tính, bản dạng giới, khuynh hướng tình dục, mang thai, tuổi tác hoặc khuyết tật) —bao gồm, nhưng không giới hạn ở:</strong>
        <ol>
            <li>Hành vi lạm dụng, đe dọa, bắt nạt hoặc đe dọa</li>
            <li>Nhắm mục tiêu thô tục và thô tục</li>
            <li>Bài đăng trên Internet hoặc mạng nội bộ</li>
            <li>Lặp đi lặp lại, coi thường một cách trắng trợn bởi một cá nhân vì thời gian cá nhân của người khác Quấy rối dựa trên đặc điểm cá nhân Cố ý loại trừ hoặc tiếp tục cô lập khỏi các hoạt động xã hội tại nơi làm việc (bao gồm bằng cách nói bằng ngôn ngữ mà người khác không hiểu với ý định loại trừ hoặc cô lập như vậy)</li>
            <li>Hiển thị tài liệu xúc phạm hoặc trò đùa xúc phạm</li>
            <li>Tiếp xúc cơ thể không mong muốn</li>
            <li>Chế giễu giọng hoặc cách nói của một người</li>
            <li>Vi phạm hoặc bất bình đẳng vi mô ảnh hưởng tiêu cực đến trải nghiệm nơi làm việc của người khác; các ví dụ bao gồm, nhưng không giới hạn:</li>
            <ul>
                <li>Những bình luận đùa cợt hoặc hạ thấp thái độ thiếu tế nhị</li>
                <li>Thường xuyên làm gián đoạn đồng nghiệp hoặc coi thường công việc của họ</li>
                <li>Sử dụng biệt hiệu mà đồng nghiệp không thích</li>
                <li>Không ghi nhận những đóng góp nhất định của nhân viên</li>
                <li>Hành vi thiếu tôn trọng hoặc thiếu tế nhị hoặc khuôn mẫu dựa trên các đặc điểm cá nhân mà một người cảm thấy bị coi thường hoặc bị coi thường do danh tính của họ</li>
                <li>Quấy rối tình dục hoặc hành vi không mong muốn khác có mục đích hoặc tác động vi phạm nhân phẩm của ai đó.</li>
            </ul>
        </ol>
        <strong>Quấy rối tình dục liên quan đến hành vi không mong muốn có bản chất tình dục và bao gồm, nhưng không giới hạn ở các ví dụ trên hoặc:</strong>
        <ol>
            <li>Nhận xét, trò đùa, hình ảnh hoặc tài liệu khác khêu gợi tình dục, dâm dục hoặc khiếm nhã</li>
            <li>Sự chú ý không mong muốn lặp đi lặp lại, chẳng hạn như yêu cầu gặp gỡ xã hội hoặc các cuộc gọi điện thoại, tin nhắn hoặc tin nhắn cho một cá nhân mà không có lý do liên quan đến công việc</li>
            <li>Tiếp xúc thân thể không mong muốn về bản chất tình dục hoặc thể hiện tình cảm</li>
            <li>Khi một người ở vị trí quyền lực ngụ ý rằng các quyết định tuyển dụng có thể bị ảnh hưởng bởi việc chấp nhận hoặc từ chối các tiến bộ về tình dục</li>
        </ol>
        Chúng tôi mong đợi tất cả nhân viên của chúng tôi, bất kể thâm niên, vị trí hoặc đóng góp cho The Thanh Coffee, đối xử với nhau và những người khác mà chúng tôi tương tác trong các tình huống liên quan đến công việc - dù là trực tiếp hay trực tuyến - với phẩm giá, sự tôn trọng và lịch sự nghề nghiệp. Điều này bao gồm nhân viên khách hàng và nhà cung cấp, cố vấn cho khách hàng của chúng tôi và nhân viên khách sạn, nhà hàng và hãng hàng không.
									</div>
								</details>
							</div>
              `,
		imageSrc: "https://govi.vn/wp-content/uploads/2022/05/thay-doi-moi-truong-lam-viec.jpg",
	},
	{
		horizontal: true,
		title: "Chế độ nhân tài và không phân biệt đối xử",
		contentHtml: `
                  <div style="font-size: 16px; line-height: 24px; color: #353535; padding-top: 32px;">
                    Chúng tôi áp dụng nguyên tắc về chế độ tuyển dụng nhân tài khi đưa ra quyết định về người của mình. Sự xứng đáng có nghĩa là tất cả các quyết định tuyển dụng chỉ dựa trên thành tích, bao gồm trình độ công việc của một cá nhân, những đóng góp đã được chứng minh cho công việc của chúng tôi và nơi làm việc, năng lực (nghĩa là kỹ năng và khả năng) và tiềm năng phát triển. Bất kỳ việc tuyển dụng nào, kể cả cho các vị trí tạm thời hoặc để cung cấp các dịch vụ bên ngoài, đều phải tuân thủ các quy trình của công ty và chỉ dựa trên thành tích. Chủ nghĩa thiên vị, hoặc nhận thức về chủ nghĩa thiên vị, thể hiện rủi ro đối với chế độ nhân tài của chúng tôi và do đó, chúng tôi cấm các mối quan hệ lãng mạn, thể xác hoặc gia đình cá nhân giữa các thành viên công ty. Chúng tôi cũng nghiêm cấm việc thuê con cái của các Đối tác công ty. Các đồng nghiệp phải trình bày nơi họ có mối quan hệ cá nhân có thể ảnh hưởng đến chế độ tài chính của The Thanh Coffee hoặc tạo ra bất kỳ xung đột lợi ích nào khác
                    ảnh hưởng tới The Thanh Coffee.
                  </div>
                  <div style="font-size: 16px; line-height: 24px; color: #353535; padding-top: 32px">
                    <strong>Chúng tôi coi trọng sự đa dạng và không phân biệt đối xử.</strong> <br />
                    Chúng tôi coi trọng sự đa dạng và cố gắng có được một lực lượng lao động đa dạng và hòa nhập cũng như đáp ứng các nhiệm vụ tuyển dụng hợp pháp khi được yêu cầu. <br />
                    The Thanh Coffee nghiêm cấm phân biệt đối xử dưới mọi hình thức. Mỗi người trong chúng ta đều có trách nhiệm ủng hộ và thúc đẩy nguyên tắc tập trung xứng đáng và duy trì một môi trường làm việc công bằng, bình đẳng và hòa nhập.
                  </div>
                  <div style="font-size: 16px; line-height: 24px; color: #353535; padding-top: 32px">
                    <strong>Điều The Thanh Coffee hướng tới:</strong>
                  </div>
                  <div style="padding: 18px 0 0 19px; font-size: 18px">
                    <div style="font-weight: bold; font-style: italic; color: black; padding-bottom: 16px">Chúng tôi không phân biệt đối xử chống lại bất kỳ người nào dựa trên các đặc điểm sau:</div>
                    <div style="font-size: 16px; font-style: italic; color: #353535">Chủng tộc, màu da, tổ tiên, thông tin di truyền, nguồn gốc quốc gia / khu vực hoặc dân tộc, tình trạng công dân, tôn giáo, tín ngưỡng, giới tính, nhận dạng hoặc biểu hiện giới tính, mang thai, thai sản, tình trạng hôn nhân hoặc gia đình, tuổi tác.</div>
                  </div>

              `,
		imageSrc: "https://hrchannels.com/uptalent/attachments/images/20201225/1608861012537-tam-quan-trong-cua-moi-truong-lam-viec-1.jpg",
	},
];

export const useWorkingEnvironmentContent = () => {
	const [data, refetch, isLoading] = useAbouts();
	return {
		content: data && data[0] ? data : contentSections,
		refetch,
		isLoading,
	};
};
