import { Box, Dialog } from "@mui/material";
import { useAbouts } from "../hooks/useAbouts";
import { useState } from "react";
import { styles } from "../styles";
import vanhoatuanthu1 from "../component/img/vanhoatuanthu1.jpg";

const QuestionsModal = () => {
	const [questions, setQuestions] = useState(false);
	const handelOpenQuestions = () => {
		setQuestions(true);
	};
	const handelCloseQuestions = () => {
		setQuestions(false);
	};
	return (
		<Box
			sx={{
				display: "flex",
				pt: "40px",
			}}
		>
			<Box
				sx={{
					fontSize: "20px",
					fontWeight: "bold",
					border: "2px solid black",
					color: "#FFFFFF",
					background: "black",
					p: "16px 40px",
					cursor: "pointer",
				}}
				onClick={handelOpenQuestions}
			>
				CÂU HỎI THƯỜNG GẶP
			</Box>
			<Dialog
				open={questions}
				onClose={handelCloseQuestions}
				maxWidth="lg" // Tùy chỉnh kích thước tối đa
				fullWidth
			>
				<Box
					sx={{
						...styles.fontSize13,
						fontSize: "18px",
						lineHeight: "24px",
					}}
				>
					<Box
						sx={{
							background: "black",
							p: "64px",
							color: "#FFFFFF",
						}}
					>
						<Box
							sx={{
								fontWeight: "700",
								pb: "20px",
								fontSize: "30px",
							}}
						>
							Câu hỏi
						</Box>
						<Box
							sx={{
								fontSize: "20px",
								fontWeight: "600",
								pb: "20px",
							}}
						>
							Làm thế nào để bạn xác định xem một món quà, bữa ăn, giải trí hoặc du lịch là thích hợp?
						</Box>
						<Box sx={{ p: "20px 0" }}>Hỏi: </Box>
						<Box sx={{ ml: "-20px", lineHeight: "28px" }}>
							<ul>
								<li>Nó có gây ra bất kỳ sự bối rối hoặc lo lắng nào cho khách hàng của chúng tôi, The Thanh Coffee hoặc cá nhân chúng tôi, nếu những người khác biết về món quà, bữa ăn, giải trí hoặc du lịch không?</li>
								<li>Món quà, bữa ăn, giải trí hoặc du lịch có ảnh hưởng đến tính khách quan của người nhận không?</li>
								<li>Món quà, bữa ăn, giải trí hoặc du lịch có được coi là xa hoa hay không hợp lý không?</li>
								<li>Có giá thầu hoặc cơ hội bán hàng đang chờ xử lý với công ty của người nhận không?</li>
							</ul>
						</Box>
					</Box>
					<Box
						sx={{
							background: "#FFFFFF",
							color: "black",
							p: "64px",
						}}
					>
						<Box
							sx={{
								fontWeight: "700",
								pb: "20px",
								fontSize: "30px",
							}}
						>
							Trả lời:
						</Box>
						<Box>Nếu câu trả lời cho bất kỳ câu hỏi nào trong số này là “có”, món quà, bữa ăn, giải trí hoặc du lịch có thể không phù hợp.</Box>
					</Box>
				</Box>
			</Dialog>
		</Box>
	);
};

const liemsContent = [
	{
		title: "Quà tặng, Bữa ăn, Giải trí và Du lịch",
		subtitle: "Chúng tôi tuân thủ luật chống tham nhũng mà không có ngoại lệ",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px;">
        The Thanh Coffee nghiêm cấm nhân viên The Thanh Coffee cung cấp hoặc nhận hối lộ. Chúng tôi tuân thủ luật chống tham nhũng Việt Nam. Ngay cả khi các đối thủ cạnh tranh của chúng tôi đưa hối lộ hoặc thực hiện các khoản thanh toán đáng ngờ, The Thanh Coffee không khoan nhượng đối với hành vi hối lộ hoặc bất kỳ hoạt động nào khác vi phạm các luật này:
      </div>
    `,
		imgSrc: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/10/14/qua-tang-tham-nhung.jpg",
	},
	{
		subtitle: "Không đưa hoặc nhận hối lộ bao gồm quà tặng, bữa ăn, giải trí hoặc du lịch không phù hợp",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px; color: #353535;">
        Chúng tôi tự hào về mối quan hệ của mình với khách hàng và hiểu rằng việc vun đắp những mối quan hệ đó thường được thực hiện tốt nhất trong môi trường xã hội — chẳng hạn như bữa ăn, sự kiện thể thao hoặc các hình thức giải trí khác. Trong khi các hoạt động xây dựng mối quan hệ thông thường — bao gồm quà tặng, bữa ăn và giải trí — có thể phù hợp, chúng ta cũng phải luôn cảnh giác để đảm bảo không điều gì chúng ta làm có thể tạo ra vẻ ngoài không phù hợp.
      </div>
      <div style="font-size: 20px; color: black; padding-top: 40px;">
        <details>
          <summary style="padding-bottom: 17px; border-bottom: 1px solid black; margin-bottom: 16px;">
            TÌM HIỂU THÊM
          </summary>
          <div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
            Hối lộ là “bất kỳ thứ gì có giá trị” nhằm đảm bảo một lợi thế không chính đáng hoặc gây ảnh hưởng không thích hợp đến người nhận. Điều này có nghĩa là bất cứ điều gì được đánh giá cao bởi một người mà ai đó đang cố gắng gây ảnh hưởng — cho dù điều đó có có bất kỳ giá trị thương mại nào. Không quan trọng liệu thứ có giá trị được tài trợ hay không bởi The Thanh Coffee, một bên thứ ba hoặc từ các nguồn lực cá nhân của chính nhân viên. Chỉ đưa ra một thứ gì đó có giá trị có thể vi phạm pháp luật, cho dù nó có thực sự được chấp nhận hay không hoặc nhận được lợi ích
          </div>
        </details>
        <details>
          <summary style="padding-bottom: 17px; border-bottom: 1px solid black;">
            VÍ DỤ
          </summary>
          <div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
            <strong>Ví dụ về “bất kỳ thứ gì có giá trị”:</strong>
            <ol>
              <li>Quà tặng hoặc giỏ quà</li>
              <li>Các bữa ăn hoặc đồ uống</li>
              <li>Giải trí như vé xem phim và thể thao</li>
              <li>Chi phí đi lại của khách hàng</li>
              <li>Các mặt hàng mang nhãn hiệu The Thanh Coffee</li>
              <li>Lời mời đến các sự kiện tiếp thị</li>
              <li>
                Vô hình như:
                <ul>
                  <li>Ưu đãi cá nhân</li>
                  <li>Các khoản cho vay</li>
                  <li>Đối xử ưu đãi liên quan đến việc làm và thực tập</li>
                </ul>
              </li>
            </ol>
          </div>
        </details>
      </div>
    `,
		imgSrc: "https://duhocfpt.edu.vn/wp-content/uploads/7-65.png",
	},
	{
		subtitle: "Không đưa hoặc nhận hối lộ",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px;">
        Theo luật chống tham nhũng, việc mời hoặc tặng quà, ăn uống, giải trí hoặc đi du lịch là bất hợp pháp nếu được thực hiện với ý định tham nhũng. Ý định tham những có nghĩa là mục đích khi tặng quà, bữa ăn, hoạt động giải trí hoặc du lịch là để tác động đến một người nào đó lợi dụng chức vụ của họ nhằm mang lại lợi ích cho The Thanh Coffee.
      </div>
      <div style="font-size: 20px; color: black; padding-top: 40px;">
        <details>
          <summary style="padding-bottom: 17px; border-bottom: 1px solid black; margin-bottom: 16px;">
            TÌM HIỂU THÊM
          </summary>
          <div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
            <strong>Yêu cầu chung về Quà tặng và Chiêu đãi:</strong><br />
            Bạn có thể nhận hoặc cung cấp quà tặng hoặc chiêu đãi thích hợp khi đáp ứng đầy đủ các điều kiện sau:
            <ol>
              <li>Được các chính sách của chúng tôi cho phép</li>
              <li>Các khoản chi đó là chính đáng và vừa phải cho các mục đích Kinh doanh hợp pháp;</li>
              <li>Các chi phí đó được ghi nhận và ghi chép chính xác;</li>
              <li>Được luật pháp cho phép;</li>
              <li>Hợp lý về giá trị và phù hợp trong hoàn cảnh;</li>
              <li>Được cho phép bởi các chính sách của người nhận và theo bất kỳ thỏa thuận nào giữa The Thanh Coffee và người sử dụng lao động của người nhận.</li>
            </ol>
          </div>
        </details>
      </div>
    `,
		imgSrc: "https://cdn.lawnet.vn/nhch-images//Images/uploaded/Thao/%C4%91ua%20nh%E1%BA%ADn%20h%E1%BB%91i%20l%E1%BB%99.jpg",
		children: <QuestionsModal />,
	},
	{
		subtitle: "Quy tắc tương tác với các quan chức chính phủ",
		contentHtml: `
      <div style="font-size: 16px; line-height: 24px; color: #353535;">
        Công ty, nhân viên của mình và các bên thứ ba không được trực tiếp hoặc gián tiếp đề nghị hoặc hứa cung cấp quà tặng, chiêu đãi hoặc các sở thích không chính đáng khác với mục đích gây ảnh hưởng đến hành vi hoặc quyết định của các quan chức chính phủ.
      </div>
      <div style="font-size: 20px; line-height: 30px; color: black; font-style: italic; font-weight: 700; padding: 32px 0 16px 22px;">
        Công ty, nhân viên của mình và các bên thứ ba không được trực tiếp hoặc gián tiếp đề nghị hoặc hứa cung cấp quà tặng, chiêu đãi hoặc các sở thích không chính đáng khác với mục đích gây ảnh hưởng đến hành vi hoặc quyết định của các quan chức chính phủ.
      </div>
      <div style="font-size: 20px; color: black; padding-top: 40px;">
        <details>
          <summary style="padding-bottom: 17px; border-bottom: 1px solid black; margin-bottom: 16px;">
            TÌM HIỂU THÊM
          </summary>
          <div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
            Trong quá trình tương tác và trao đổi với các quan chức chính phủ, nhân viên của Công ty nên tuân theo các tiêu chuẩn khắt khe và thận trọng hơn để đưa ra phán quyết. Về nguyên tắc, không được tặng quà hoặc chiêu đãi cho các quan chức chính phủ. Trên cơ sở tuân thủ luật pháp, quy định và các quy định khác của chính sách này, hoạt động giải trí dành cho các quan chức chính phủ sẽ được kiểm soát chặt chẽ và báo cáo trước cho Trưởng phòng Tuân thủ Pháp luật và Tổng Giám đốc để phê duyệt.
          </div>
        </details>
      </div>
    `,
		imgSrc: "https://bcp.cdnchinhphu.vn/Uploaded/nguyendieuhuong/2020_02_17/aB72I0172.jpg",
	},
	{
		title: "Tuân thủ các Quy tắc của The Thanh Coffee về đóng góp chính trị và các hoạt động chiến dịch",
		imgSrc: vanhoatuanthu1,
		contentHtml: `
			<p style="font-size:20px; color:#5A5A5A;
			padding: 32px 116px 40px
">
				Để tránh xuất hiện những điều không phù hợp hoặc để ngăn chặn xung đột lợi ích, chúng tôi nghiêm cấm các khoản đóng góp chính trị của công ty (cả tiền tệ và hiện vật) cho các ứng cử viên chính trị, đảng phái chính trị hoặc đảng ủy thay mặt cho The Thanh Coffee và các khách hàng của The Thanh Coffee.
			</p>
				<img
								width="100%"
								height="400px"
								style="
									object-fit: cover;
									border: 1px solid #5A5A5A;
								"
								src=${vanhoatuanthu1}
								alt="Tuân thủ các Quy tắc của The Thanh Coffee về đóng góp chính trị và các hoạt động chiến dịch"
							/>
				<details style="
					font-size: 20px;
					color: black;
					padding-top: 32px;
					text-align: revert;
				">
					<summary style="
						padding-bottom: 17px;
						border-bottom: 1px solid black;
						text-align: left;
					">
						VÍ DỤ
					</summary>
					<div style="
						padding: 10px;
						margin-top: 10px;
						color: #353535;
						font-family: Inter;
						font-size: 16px;
						line-height: 24px;
						text-align: left;
					">
						<p>Ví dụ về Công chức:</p>
						<ul>
							<li>Các quan chức chính phủ được bầu hoặc bổ nhiệm</li>
							<li>Cán bộ, nhân viên của các cơ quan chính phủ</li>
							<li>Nhân viên của các cơ quan địa phương, xã phường, quận- huyện, khu vực và thành phố</li>
							<li>Nhân viên của các tổ chức thuộc sở hữu một phần hoặc toàn bộ của các cơ quan, xã phường, quận- huyện , khu vực hoặc thành phố</li>
							<li>Giám đốc bên ngoài của các đơn vị thuộc sở hữu nhà nước</li>
							<li>Các nhà lập pháp bán thời gian</li>
							<li>Các thành viên gia đình hoàng gia</li>
							<li>Các ứng cử viên chính trị</li>
							<li>Các quan chức của Ngân hàng Thế giới, Liên hợp quốc hoặc Quỹ Tiền tệ Quốc tế</li>
							<li>Các giáo sư và quản trị viên của các trường đại học công lập và bệnh viện do chính phủ điều hành</li>
							<li>Nhân viên của một công ty dầu khí thuộc sở hữu của chính phủ</li>
							<li>Nhân viên của một ngân hàng được quốc hữu hóa một phần</li>
						</ul>
					</div>
				</details>
		`,
	},
	{
		title: "Chống rửa tiền",
		imgSrc: "https://bcp.cdnchinhphu.vn/334894974524682240/2023/4/28/4317ruatien2-1682688273481593697875.jpg",
		contentHtml: `
                <p style="font-size:16px; line-height:24px;">
                  Chúng tôi không tham gia vào bất kỳ hoạt động rửa tiền hoặc tài trợ khủng bố nào hoặc hỗ trợ bất kỳ bên nào khác làm như vậy, chúng tôi báo cáo bất kỳ sai phạm nào mà chúng tôi xác định được để điều tra thêm và chúng tôi báo cáo hoạt động đáng ngờ cho chính phủ khi được yêu cầu.
                </p>
            `,
	},
	{
		title: "Không tham gia vào bất kỳ hoạt động rửa tiền hoặc tài trợ khủng bố nào hoặc hỗ trợ bất kỳ bên nào khác làm như vậy",
		imgSrc: "https://media.tapchitaichinh.vn/w1480/images/upload/tranthuthuy/12152018/xly.jpg",
		contentHtml: `
			<div style="font-size: 16px; line-height: 24px; color: #353535;">
				The Thanh Coffee không khoan nhượng đối với tội phạm tài chính. Điều này bao gồm rửa tiền và tài trợ khủng bố. Công cụ hiệu quả nhất của The Thanh Coffee để phát hiện dấu hiệu vi phạm là tất cả thành viên của The Thanh Coffee.
			</div>
			<div style="font-size: 20px; color: black; padding-top: 40px;">
				<details>
					<summary style="padding-bottom: 17px; border-bottom: 1px solid black; margin-bottom: 16px;">
						TÌM HIỂU THÊM
					</summary>
					<div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
						<p>The Thanh Coffee có nguy cơ bị phơi nhiễm với các hoạt động rửa tiền và tài trợ khủng bố cao hơn khi chúng ta:</p>
						<ol>
							<li>Xử lý tiền hoặc xử lý các giao dịch tài chính hoặc ứng dụng thay mặt cho khách hàng</li>
							<li>Tiến hành Kinh doanh ở những quốc gia có ít việc thực thi luật cấm rửa tiền và các hoạt động tài trợ khủng bố</li>
							<li>Tiến hành Kinh doanh ở các quốc gia nơi các tiêu chuẩn minh bạch tài chính (ví dụ: bí mật ngân hàng) giúp che giấu các hoạt động này dễ dàng hơn và do đó chúng phổ biến rộng rãi hơn.</li>
						</ol>
						<p style="font-weight: bold;">ĐỊNH NGHĨA</p>
						<p style="font-weight: bold;">Rửa tiền và tài trợ khủng bố là gì?</p>
						<ol>
							<li>Rửa tiền là chuyển đổi tiền hoặc tài sản có được thông qua hoạt động tội phạm thành tài sản có vẻ hợp pháp</li>
							<li>Tài trợ cho khủng bố là sử dụng tiền hoặc tài sản, cho dù hợp pháp hoặc có được thông qua hoạt động tội phạm, để tài trợ cho các hoạt động hoặc nhóm khủng bố bố</li>
						</ol>
						<p>Rửa tiền và tài trợ khủng bố có mối liên hệ với nhau bởi vì chủ nghĩa khủng bố thường được tài trợ bởi tiền hoặc tài sản thu được một cách bất hợp pháp, nhưng sau đó rửa tiền để có vẻ như chúng đến từ một doanh nghiệp hợp pháp.</p>
						<p>Báo cáo dấu hiệu sai phạm để điều tra thêm và báo cáo hoạt động đáng ngờ cho chính phủ nếu được yêu cầu.</p>
						<p>Nếu bạn xác định một dấu hiệu vi phạm, bạn bắt buộc phải làm theo ba bước sau:</p>
						<ol>
							<li>Báo cáo dấu hiệu vi phạm tới Ban quản lý, Nhân sự hoặc Pháp lý của bạn hoặc tới Đường dây trợ giúp về Đạo đức Kinh doanh của The Thanh Coffee. Nếu được tuyển dụng bởi hoặc cung cấp dịch vụ thay mặt cho Công ty được điều chỉnh bởi The Thanh Coffee, hãy báo cáo với Cán bộ tuân thủ về Chống rửa tiền (AML) của bạn. Ngay cả khi bạn không chắc chắn 100% hoạt động mà bạn xác định là một dấu hiệu vi phạm, hãy nêu lên mối quan ngại của bạn.</li>
							<li>Nếu dấu hiệu vi phạm là một phần của giao dịch hoặc quy trình phê duyệt khác mà bạn thực hiện, bạn phải tạm thời giữ giao dịch hoặc quy trình phê duyệt.</li>
							<li>Tránh thông báo hoặc “báo trước” cho khách hàng hoặc bất kỳ bên nào khác rằng bạn biết về hoạt động bất hợp pháp tiềm ẩn vì điều này là bất hợp pháp ở một số quốc gia.</li>
						</ol>
					</div>
				</details>
			</div>
		</div>`,
	},
	{
		title: "Cạnh tranh công bằng",
		subtitle: "Chúng tôi cam kết cạnh tranh bình đẳng và hợp pháp với các đối thủ khác trên thị trường.",
		contentHtml: `
                  <div style="font-size:16px; line-height:24px">
                    <p>Chúng tôi không hợp tác với các đối thủ cạnh tranh về cách định giá dịch vụ của chúng tôi và chúng tôi không chia sẻ/chấp nhận thông tin bí mật với/từ đối thủ cạnh tranh hoặc lạm dụng thông tin bí mật của người khác, bao gồm cả người sử dụng lao động cũ.</p>
                    <p>The Thanh Coffee chỉ theo đuổi và giành được công việc Kinh doanh dựa trên năng lực của tổ chức. Chúng tôi không tham tham gia vào các hành vi cạnh tranh không lành mạnh. </p>
                  </div>
                `,
		imgSrc: "https://thuviendoanhnghiep.vn/wp-content/uploads/2023/05/doi-thu-canh-tranh-la-gi.jpg",
	},
	{
		title: "Tương tác với các đối thủ cạnh tranh",
		imgSrc: "https://www.goffice.vn/uploads/files/Hinh%20tin%20tuc/cach-phan-tich-va-xac-dinh-doi-thu-canh-tranh.jpg",
		contentHtml: `
                    <div style="font-size: 16px; line-height: 24px; color: #353535;">
                        <ul>
                            <li>Không trao đổi thông tin về giá cả hoặc cố định giá cả</li>
                            <li>Không trao đổi năng lực, đầu tư, cổ phiếu hoặc các thông tin nhạy cảm về cạnh tranh khác</li>
                            <li>Không thảo luận hoặc thực hiện hành vi phối hợp về các hành vi bị nghi ngờ vi phạm pháp luật</li>
                            <li>Không thảo luận hoặc hạn chế các khách hàng cụ thể hoặc các nhà cung cấp</li>
                            <li>Không trao đổi dữ liệu nhạy cảm có tính cạnh tranh khác liên quan đến Kinh doanh</li>
                            <li>Không cam kết tương tác gian lận thầu với Khách hàng, Nhà phân phối và Nhà cung cấp</li>
                            <li>Không ép buộc khách hàng ấn định giá bán lại hoặc duy trì tỷ suất lợi nhuận đặt trước.</li>
                            <li>Không phân chia bất hợp pháp lãnh thổ bán hàng và khách hàng</li>
                            <li>Không gian lận giá thầu</li>
                        </ul>
                    </div>
                    <div style="font-size: 20px; color: black; padding-top: 40px;">
                        <details>
                            <summary style="padding-bottom: 17px; border-bottom: 1px solid black; margin-bottom: 16px;">
                                TÌM HIỂU THÊM
                            </summary>
                            <div style="padding: 10px; margin-top: 10px; color: black; font-size: 16px; line-height: 24px;">
                                <p>Mặc dù cách làm việc của The Thanh Coffee là cộng tác và chia sẻ, nhưng chúng tôi phải làm như vậy trong giới hạn thích hợp. Không chia sẻ thông tin bí mật của The Thanh Coffee với đối thủ cạnh tranh và không chấp nhận thông tin bí mật của đối thủ cạnh tranh (xem thêm Thông tin bảo mật).</p>
                                <p>Nếu đối thủ cạnh tranh tiếp cận về bất kỳ điều gì bị cấm, hãy nói rõ rằng chúng tôi không đồng ý với bất kỳ điều gì và không muốn thông tin bảo mật của họ. Kết thúc liên hệ với người đó ngay lập tức và liên hệ với Bộ phận Pháp lý càng sớm càng tốt.</p>
                                <p style="font-weight: bold;">ĐỊNH NGHĨA</p>
                                <p style="font-weight: bold;">Rửa tiền và tài trợ khủng bố là gì?</p>
                                <ol>
                                    <li>Bất kỳ công ty nào có khả năng cung cấp dịch vụ, giải pháp hoặc đề nghị mà khách hàng có thể lựa chọn thay vì các công ty của The Thanh Coffee đều là đối thủ cạnh tranh</li>
                                    <li>Liệu một công ty có phải là đối thủ cạnh tranh hay không có thể thay đổi theo từng tình huống tùy theo bản chất Công việc Kinh doanh của chúng ta. Chúng tôi có mối quan hệ với các công ty là đối thủ cạnh tranh vào những thời điểm nhất định và các đối tác Kinh doanh, nhà cung cấp hoặc thậm chí khách hàng vào những thời điểm khác</li>
                                    <li>Khi chúng tôi cạnh tranh với một đối tác Kinh doanh, khách hàng hoặc nhà cung cấp trong một cơ hội nhất định, chúng tôi cần coi công ty đó như hai doanh nghiệp riêng biệt với các mối quan hệ khác nhau — một bên cạnh tranh với chúng tôi và một bên là đối tác Kinh doanh, khách hàng hoặc nhà cung cấp.</li>
                                </ol>
                            </div>
                        </details>
                    </div>
                `,
	},
];

export const useLiemsContent = () => {
	const [data, refetch, isLoading] = useAbouts();
	return {
		data:
			data && data[0]
				? data.map((item) => ({
						...item,
						contentHtml: item.details,
						imageSrc: item.image,
				  }))
				: liemsContent,
		refetch,
		isLoading,
	};
};
