import { Box } from "@mui/material";
import React from "react";
import { styles } from "../styles";
import baomatdulieu1 from "../component/img/baomatdulieu1.jpg";
import baomatdulieu2 from "../component/img/baomatdulieu2.jpg";
import baomatdulieu3 from "../component/img/baomatdulieu3.jpg";
import baomatdulieu4 from "../component/img/baomatdulieu4.jpg";
import baomatdulieu5 from "../component/img/baomatdulieu5.jpg";
import baomatdulieu6 from "../component/img/baomatdulieu6.jpg";
import FooterDesktop from "../component/layout/FooterDesktop";

const Datasecurity = () => {
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "18px", textAlign: "justify" }}>
      <Box
        sx={{
          fontSize: "48px",
          fontWeight: "bold",
          p: "129px 0",
          textAlign: "center",
          "@media (max-width:1200px)": {
            p: "20px",
            fontSize: "32px",
          },
        }}
      >
        Bảo mật dữ liệu
      </Box>
      <Box
        sx={{
          p: "0 140px 0 140px",
          "@media (max-width:1200px)": {
            p: "20px",
          },
        }}
      >
        <img
          src={baomatdulieu1}
          width={"100%"}
          height={"auto"}
          style={{
            objectFit: "cover",
          }}
          alt="Tổng quan bảo mật dữ liệu"
        />
      </Box>
      <Box
        sx={{
          p: "240px 360px",
          "@media (max-width:1200px)": {
            p: "20px",
          },
        }}
      >
        <Box>
          <h1>
            1. Chúng tôi xử lý và bảo vệ dữ liệu cá nhân tuân theo luật bảo mật
            dữ liệu Việt Nam.
          </h1>
          <p>
            Chúng tôi tuân thủ luật bảo mật dữ liệu khi thu thập và xử lý dữ
            liệu cá nhân, kể cả khi dữ liệu đó liên quan đến cộng sự và khách
            hàng của chúng tôi. Luật bảo mật dữ liệu cũng trao quyền cho các cá
            nhân và công ty liên quan đến dữ liệu cá nhân của họ.
          </p>
          <img
            src={baomatdulieu2}
            width={"100%"}
            alt="tổng quan về bảo mật dữ liệu"
          />
          <figcaption style={{ textAlign: "center" }}>
            Chúng tôi xử lý và bảo vệ dữ liệu cá nhân tuân theo luật bảo mật dữ
            liệu Việt Nam.
          </figcaption>
          <h2>Định nghĩa</h2>
          <h3 styles={{ color: " #747474" }}>
            Luật bảo mật dữ liệu quy định những gì?
          </h3>
          <ul styles={{ color: " #747474" }}>
            <li>Khi nào và bao nhiêu dữ liệu cá nhân có thể được thu thập</li>
            <li>
              Nó có thể được sử dụng như thế nào và khi nào nó cần được xóa
            </li>
            <li>Những thông báo nào phải được cung cấp</li>
            <li>Nên nhận được sự đồng ý khi nào và loại nào</li>
            <li>Khi nó có thể được tiết lộ hoặc chia sẻ với các bên thứ ba</li>
            <li>Khi nó có thể được chuyển ra ngoài biên giới quốc gia</li>
            <li>
              Quyền của cá nhân và công ty liên quan đến dữ liệu cá nhân của họ
            </li>
          </ul>
        </Box>
        <Box>
          <h1>2. Dữ liệu cá nhân là gì?</h1>
          <p>
            Dữ liệu cá nhân là bất kỳ dữ liệu nào có thể được liên kết với một
            cá nhân có thể nhận dạng được. Những ví dụ bao gồm:
          </p>
          <ol>
            <li>Dân tộc</li>
            <li>Dữ liệu y tế</li>
            <li>Số thẻ tín dụng</li>
            <li>Số tài khoản hưu trí</li>
            <li>Địa chỉ email</li>
            <li>Chi tiết liên hệ doanh nghiệp và nhà riêng</li>
            <li>
              Ý kiến về cá nhân, sở thích cá nhân, tiếng nói và hình ảnh của họ
            </li>
          </ol>
          <img
            src={baomatdulieu3}
            width={"100%"}
            alt="Dữ liệu cá nhân là gì?"
          />
          <figcaption style={{ textAlign: "center" }}>
            Dữ liệu cá nhân là gì?
          </figcaption>
          <p>
            The Thanh Coffee nhận ra rằng bảo mật là quan trọng khi thu xếp để
            các nhà cung cấp dịch vụ bên ngoài thay mặt chúng tôi xử lý dữ liệu
            cá nhân (“bộ xử lý dữ liệu”). Chúng tôi đảm bảo các bộ xử lý dữ liệu
            bị ràng buộc bởi hợp đồng chỉ xử lý dữ liệu theo hướng dẫn và duy
            trì các thỏa thuận bảo mật bảo vệ dữ liệu thích hợp.
          </p>
          <p>
            Chúng tôi tuân theo các quy trình của The Thanh Coffee để đối phó
            với mọi nghi ngờ vi phạm thỏa thuận bảo mật dữ liệu, truy cập trái
            phép hoặc tiết lộ hoặc mất dữ liệu cá nhân.
          </p>
          <p>
            Chúng tôi xử lý dữ liệu cá nhân một cách công bằng và hợp pháp và
            chỉ cung cấp quyền truy cập vào dữ liệu cá nhân trong tổ chức của
            chúng tôi trên cơ sở những điều cần biết cho bộ phận được biết. Khi
            một cá nhân hoặc công ty cung cấp cho chúng tôi dữ liệu cá nhân của
            họ, chúng tôi sẽ cho họ biết ai đang thu thập / sử dụng dữ liệu, mục
            đích sử dụng và tôn trọng các quyền cá nhân của họ đối với dữ liệu,
            bao gồm cả quyền truy cập và chỉnh sửa.
          </p>
          <p>
            Chúng tôi không tái sử dụng dữ liệu cá nhân cho các mục đích khác
            không tương thích với mục đích sử dụng và chúng tôi giảm thiểu và ẩn
            danh việc thu thập dữ liệu nếu có thể. The Thanh Coffee duy trì các
            chính sách và thủ tục lưu giữ; khi chúng ta không cần giữ dữ liệu cá
            nhân nữa, chúng ta sẽ phá hủy nó. Chúng tôi duy trì các sắp xếp bảo
            mật về mặt tổ chức, vật lý và kỹ thuật cho dữ liệu cá nhân mà chúng
            tôi nắm giữ.
          </p>
        </Box>
        <Box>
          <h1>3. Tuân thủ điều lệ chính phủ</h1>
          <p>
            Chúng tôi nhận được tất cả các phê duyệt cần thiết để cung cấp dịch
            vụ cho khách hàng chính phủ và tuân thủ các quy định về hợp đồng và
            mua sắm của chính phủ.
          </p>
          <p>
            Nghĩa của từ "Chính phủ" rất rộng. Khách hàng của chính phủ có thể
            bao gồm các cơ quan chính phủ truyền thống cũng như các tổ chức
            thương mại vì lợi nhuận do chính phủ kiểm soát hoặc sở hữu (thậm chí
            sở hữu một phần). Kinh doanh với các chính phủ rất khác với Kinh
            doanh với các khách hàng thương mại.
          </p>
          <p>
            Vì thực hiện công việc cho các tổ chức chính phủ thường mang lại
            những rủi ro pháp lý và các rủi ro khác, chúng tôi nhận được tất cả
            các phê duyệt bắt buộc trước khi theo đuổi các cơ hội cung cấp dịch
            vụ cho các khách hàng thuộc sở hữu của chính phủ. Chúng tôi hiểu và
            tuân thủ các yêu cầu và hạn chế pháp lý áp dụng cho đấu thầu, định
            giá và cung cấp dịch vụ của chúng tôi cho khách hàng chính phủ.
          </p>
          <img
            src={baomatdulieu4}
            width={"100%"}
            alt="Tuân thủ điều lệ chính phủ "
          />
          <figcaption style={{ textAlign: "center" }}>
            Tuân thủ điều lệ chính phủ
          </figcaption>
        </Box>
        <Box>
          <p>
            Chúng tôi có được sự tin tưởng không chỉ của các khách hàng mà chúng
            tôi phục vụ, mà còn của cộng đồng nơi chúng tôi hoạt động và của
            những người tài năng tham gia vào công ty của chúng tôi. Sự tin
            tưởng đó và danh tiếng về sự chính trực và độc lập của chúng tôi rất
            đáng quý - khả năng của chúng tôi để tạo ra tác động cho khách hàng,
            mang lại cơ hội cho nhân viên của chúng tôi và đóng góp cho nền kinh
            tế và xã hội nơi mà chúng tôi sống và làm việc phụ thuộc vào khả
            năng đó. Chúng ta cùng nhau hợp tác để xây dựng một công ty tốt hơn,
            mạnh hơn và lâu bền hơn cho các thế hệ tương lai, bảo vệ thương hiệu
            The Thanh Coffee, đáp ứng các cam kết bảo vệ thông tin và sở hữu trí
            tuệ, hành động với tinh thần chủ sở hữu và bảo vệ và phát triển con
            người của chúng ta.
          </p>
        </Box>
        <Box>
          <h1>5. Thông tin bảo mật</h1>
          <p>
            Chúng tôi bảo vệ thông tin bí mật của The Thanh Coffee, khách hàng,
            đối tác Kinh doanh, nhà cung cấp, người sử dụng lao động cũ và những
            người khác khỏi việc sử dụng hoặc tiết lộ trái phép.
          </p>
        </Box>
        <Box>
          <h1>
            1. Chúng tôi xử lý và bảo vệ dữ liệu cá nhân tuân theo luật bảo mật
            dữ liệu Việt Nam.
          </h1>
          <p>
            Chúng tôi tuân thủ luật bảo mật dữ liệu khi thu thập và xử lý dữ
            liệu cá nhân, kể cả khi dữ liệu đó liên quan đến cộng sự và khách
            hàng của chúng tôi. Luật bảo mật dữ liệu cũng trao quyền cho các cá
            nhân và công ty liên quan đến dữ liệu cá nhân của họ.
          </p>
          <h2>
            Không lạm dụng thông tin bí mật của người khác, kể cả người sử dụng
            lao động cũ
          </h2>
          <p>
            Khi đề cập đến vấn đề bảo mật, mỗi chúng tôi đều có trách nhiệm duy
            trì niềm tin với khách hàng và đối tác Kinh doanh của mình. Khi tham
            gia vào The Thanh Coffee, không mang theo hoặc giữ lại bất kỳ thông
            tin bí mật nào từ các nhà tuyển dụng cũ hoặc chia sẻ thông tin bí
            mật của nhà tuyển dụng đó tại The Thanh Coffee.
          </p>
          <p>
            Chúng tôi tôn trọng các nghĩa vụ mà ứng viên và nhân viên mới phải
            có đối với người sử dụng lao động cũ, chẳng hạn như nghĩa vụ bảo mật
            hoặc các thỏa thuận hợp lệ và có thể thực thi không cạnh tranh hoặc
            lôi kéo khách hàng hoặc đồng nghiệp cũ. Chúng tôi mong đợi những
            người mới của The Thanh Coffee nhận thức được những nghĩa vụ này và
            thông báo cho ban quản lý của họ ngay lập tức nếu một hoạt động công
            việc có thể xung đột với những nghĩa vụ đó. Không yêu cầu nhân viên
            khác chia sẻ tài liệu hoặc thông tin bí mật từ người sử dụng lao
            động cũ của họ.
          </p>
          <p>
            Nếu ai đó đề nghị chia sẻ tài liệu hoặc thông tin bí mật từ nơi làm
            việc cũ hoặc bất kỳ bên nào khác với bạn mà không có sự cho phép
            thích hợp, đừng chấp nhận và nhắc họ rằng điều đó là sai. Bởi vì rủi
            ro đối với The Thanh Coffee rất cao, nếu bạn biết rằng ai đó đang sử
            dụng hoặc chia sẻ tài liệu hoặc thông tin bí mật từ Công ty cũ hoặc
            bất kỳ bên nào khác mà không có sự cho phép thích hợp, bạn phải báo
            cáo ngay cho Bộ phận pháp lý.
          </p>
          <p>
            Xem thêm Cạnh tranh Công bằng và Sở hữu Trí tuệ để biết các nghĩa vụ
            liên quan đến tài liệu, thông tin bí mật và sở hữu trí tuệ của người
            sử dụng lao động cũ và những người khác.
          </p>
          <img src={baomatdulieu5} width={"100%"} alt="Thông tin bảo mật" />
          <figcaption style={{ textAlign: "center" }}>
            Thông tin bảo mật
          </figcaption>
          <h2>Định nghĩa</h2>
          <h3>Thông tin bảo mật là gì?</h3>
          <p>
            Thông tin bảo mật là bất kỳ thông tin hoặc tài liệu nào thường không
            được cung cấp công khai liên quan đến hoạt động Kinh doanh, nghiên
            cứu và phát triển của công ty, khách hàng hoặc các đối tác Kinh
            doanh khác, khách hàng hoặc nhân viên — và có thể bao gồm:
          </p>
          <ul>
            <li>Định giá hoặc lợi nhuận mục tiêu</li>
            <li>Danh sách khách hàng</li>
            <li>Chi phí giao hàng hoặc các chi phí khác</li>
            <li>Kế hoạch chiến lược</li>
            <li>Kế hoạch tiếp thị</li>
            <li>Các điều khoản và điều kiện hợp đồng</li>
            <li>Chương trình nghiên cứu và phát triển</li>
          </ul>
        </Box>
        <Box>
          <h1>
            6. Chúng tôi xử lý và bảo vệ dữ liệu cá nhân tuân theo luật bảo mật
            dữ liệu Việt Nam.
          </h1>
          <p>
            Chúng tôi tuân thủ luật bảo mật dữ liệu khi thu thập và xử lý dữ
            liệu cá nhân, kể cả khi dữ liệu đó liên quan đến cộng sự và khách
            hàng của chúng tôi. Luật bảo mật dữ liệu cũng trao quyền cho các cá
            nhân và công ty liên quan đến dữ liệu cá nhân của họ.
          </p>
          <h2>Chỉ sử dụng thông tin bí mật khi được phép</h2>
          <p>
            Chỉ sử dụng thông tin bí mật cho mục đích được cung cấp. Sau khi mục
            đích đó đã được thông qua, hãy loại bỏ thông tin bí mật không phải
            của The Thanh Coffee, trừ khi nhận được yêu cầu khác bởi luật pháp,
            hợp đồng hoặc chính sách.
          </p>
          <h2>Xin phép chia sẻ thông tin của người khác</h2>
          <p>
            Không xem xét, thảo luận, tiết lộ, sao chép hoặc sử dụng bất kỳ
            thông tin khách hàng, đối tác Kinh doanh, nhà cung cấp hoặc bên thứ
            ba nào có bản quyền, được cấp phép hoặc thông tin bí mật của The
            Thanh Coffee, ngoại trừ khi được cho phép và trước tiên không cần
            đảm bảo rằng chúng tôi có sự cho phép thích hợp. Hãy thận trọng khi
            thảo luận các vấn đề Kinh doanh với bất kỳ ai bên ngoài The Thanh
            Coffee, trên internet hoặc trong khoảng cách nghe của người ngoài
            (ví dụ: trong thang máy), bao gồm cả gia đình và bạn bè.
          </p>
          <h2>Chỉ những người có nhu cầu biết mới sử dụng thông tin bí mật</h2>
          <p>
            Đảm bảo rằng chỉ những người được ủy quyền với nhu cầu hiện tại được
            biết mới có quyền truy cập vào thông tin bí mật. Liên hệ với quản lý
            của bạn, Lãnh đạo The Thanh Coffee hoặc Bộ phận pháp lý để giúp hiểu
            bất kỳ hạn chế nào và trả lời bất kỳ câu hỏi nào.
          </p>
        </Box>
        <Box>
          <h1>7. Bảo mật thông tin</h1>
          <p>
            Chúng tôi tuân theo các yêu cầu của The Thanh Coffee về việc bảo vệ
            và sử dụng thông tin, thiết bị và công nghệ thuộc về The Thanh
            Coffee, khách hàng, đối tác Kinh doanh, nhà cung cấp và những người
            khác.
          </p>
          <h2>Giảm rủi ro bảo mật thông tin</h2>
          <p>
            Chúng tôi chịu trách nhiệm cá nhân và tập thể trong việc giảm thiểu
            rủi ro bảo mật thông tin của mình — bao gồm việc bảo vệ các thiết
            bị, cũng như dữ liệu và thông tin. Nếu bạn không biết liệu một hành
            động cụ thể có gây ra rủi ro bảo mật thông tin hay không, hãy liên
            hệ để được hướng dẫn trước khi thực hiện. Nếu bạn nhận thấy các điểm
            yếu về bảo mật — cho dù là liên quan đến cá nhân, quy trình hay công
            nghệ — hãy lên tiếng.
          </p>
          <img
            src={baomatdulieu6}
            width={"100%"}
            alt="Giảm rủi ro bảo mật thông tin"
          />
          <figcaption style={{ textAlign: "center" }}>
            Giảm rủi ro bảo mật thông tin
          </figcaption>
        </Box>
        <Box>
          <h1>8. Bảo vệ dữ liệu và thông tin</h1>
          <p>
            Thực hiện phán đoán chính xác để duy trì và bảo vệ tính bảo mật của
            dữ liệu (bao gồm cả dữ liệu cá nhân) và thông tin được giao cho bạn
            chăm sóc. Cảnh giác trong việc bảo vệ các thiết bị khỏi bị mất hoặc
            trộm cắp. Bảo vệ dữ liệu và thông tin của The Thanh Coffee và của
            khách hàng bằng cách phân loại và đánh dấu đúng cách cũng như bằng
            cách triển khai các quy trình và công nghệ bảo vệ (ví dụ: bảo mật
            các thiết bị công nghệ của bạn thông qua phần mềm và cấu hình bảo
            mật đã được The Thanh Coffee phê duyệt). Chỉ chia sẻ dữ liệu và
            thông tin khi có yêu cầu Kinh doanh hợp lệ để làm như vậy và chỉ
            trên cơ sở cần biết. Không truy cập hoặc xử lý dữ liệu hoặc thông
            tin mà bạn không có nhu cầu Kinh doanh. Không giữ lại dữ liệu hoặc
            thông tin sau khi nhu cầu Kinh doanh đã qua hoặc sau khi rời khỏi
            một dự án hoặc The Thanh Coffee. Xử lý an toàn dữ liệu hoặc thông
            tin khi không còn cần thiết, cho dù đó là dữ liệu điện tử hay trên
            giấy tờ.
          </p>
          <h2>
            Hãy cẩn thận khi sử dụng các giải pháp hoặc dịch vụ công nghệ không
            phải của The Thanh Coffee
          </h2>
          <p>
            Không cài đặt phần mềm hoặc sửa đổi cấu hình làm ảnh hưởng đến bảo
            mật công nghệ của The Thanh Coffee. Không sử dụng các dịch vụ dựa
            trên web của bên thứ ba để thực hiện công việc của The Thanh Coffee
            hoặc ứng dụng khách hoạt động trừ khi các dịch vụ này được The Thanh
            Coffee (và khách hàng) chấp thuận cho việc sử dụng đó. Nếu các dịch
            vụ dựa trên web của bên thứ ba được ủy quyền, trước tiên hãy xác
            nhận rằng chúng tôi sẽ không tải lên bất kỳ dữ liệu của The Thanh
            Coffee hoặc dữ liệu khách hàng hoặc thông tin bí mật nào. Chỉ sử
            dụng các giải pháp được The Thanh Coffee phê duyệt để sao lưu dữ
            liệu. Các công cụ cộng tác và liên lạc không được The Thanh Coffee
            quản lý (chẳng hạn như tin nhắn văn bản SMS hoặc các công cụ liên
            lạc của bên thứ ba khác như Apple iMessage, Các ứng dụng nhắn tin
            OTT) không được sử dụng cho các giao tiếp Kinh doanh quan trọng.
          </p>
          <h2>Sử dụng công nghệ một cách hợp lý</h2>
          <p>
            Sử dụng công nghệ, ứng dụng do The Thanh Coffee cung cấp cho mục
            đích Kinh doanh và chỉ sử dụng cho mục đích cá nhân có giới hạn và
            hoàn cảnh thích hợp. Không sử dụng các thiết bị do khách hàng của
            chúng tôi cung cấp để tiến hành công việc nội bộ của The Thanh
            Coffee hoặc cho mục đích sử dụng cá nhân. Khi sử dụng thiết bị di
            động cho mục đích Kinh doanh của The Thanh Coffee, hãy hạn chế sử
            dụng email, các ứng dụng do The Thanh Coffee cung cấp và quyền truy
            cập dựa trên trình duyệt vào các trang web của The Thanh Coffee và
            không bao giờ lưu trữ thông tin khách hàng hoặc thông tin The Thanh
            Coffee trên chúng.
          </p>
          <h2>Báo cáo vi phạm bảo mật ngay lập tức</h2>
          <p>
            Báo cáo các sự cố an toàn thông tin đáng ngờ cho Trung tâm Điều hành
            An ninh The Thanh Coffee (TTĐHANSG ) (849) ngay lập tức.
          </p>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default Datasecurity;
