import { Box } from "@mui/material";
import React from "react";
const Desktop = () => {
    const mission = [
        {
            id: 1,
            title: "Nhiệm vụ của chúng tôi",
            content: `<p>
                Dự &aacute;n được triển khai theo m&ocirc; h&igrave;nh hợp
                t&aacute;c, c&oacute; nghĩa l&agrave; Skanska v&agrave; KF
                Fastigheter đ&atilde; hợp t&aacute;c, c&ugrave;ng nhau
                ph&aacute;t triển c&aacute;c giải ph&aacute;p để dự &aacute;n
                c&oacute; hiệu quả về mặt chi ph&iacute; nhất c&oacute; thể.
            </p>
            <p>
                Sự hợp t&aacute;c n&agrave;y được khởi xướng v&agrave;o
                m&ugrave;a thu năm 2006 với c&aacute;c nghi&ecirc;n cứu sơ bộ,
                kiểm k&ecirc; v&agrave; lập tr&igrave;nh, trong đ&oacute;
                ch&uacute;ng t&ocirc;i l&agrave;m việc c&ugrave;ng với KF
                Fastigheter v&agrave; c&aacute;c kiến tr&uacute;c sư thiết kế để
                x&acirc;y dựng sản phẩm v&agrave; x&aacute;c định ng&acirc;n
                s&aacute;ch cố định cho dự &aacute;n. V&agrave;o th&aacute;ng 9
                năm 2010, Bromma Blocks đ&atilde; sẵn s&agrave;ng.
            </p>`,
        },
        {
            id: 2,
            title: "Công trình nền móng lớn",
            content: ` <p>
                C&ocirc;ng tr&igrave;nh x&acirc;y dựng được khởi c&ocirc;ng
                v&agrave;o th&aacute;ng 6 năm 2008, khi ch&uacute;ng t&ocirc;i
                ho&agrave;n th&agrave;nh phần m&oacute;ng ch&iacute;nh.
                Nh&agrave; chứa m&aacute;y bay nằm tr&ecirc;n một đ&aacute;y
                biển cũ v&agrave;, như kỹ sư địa kỹ thuật của ch&uacute;ng
                t&ocirc;i đ&atilde; n&oacute;i, "th&uacute; vị về mặt địa kỹ
                thuật". Nước ngầm chảy chỉ một m&eacute;t dưới bề mặt trong một
                lớp đất s&eacute;t d&agrave;y c&oacute; c&ugrave;ng độ đặc như
                kem chua.
            </p>
            <p>
                Trong khi khi x&eacute;t ri&ecirc;ng lẻ th&igrave; kh&ocirc;ng
                c&oacute; th&aacute;ch thức địa kỹ thuật n&agrave;o đặc biệt
                phức tạp, th&igrave; việc kết hợp c&aacute;c th&aacute;ch thức
                trong c&ugrave;ng một khu vực đ&atilde; khiến dự &aacute;n trở
                th&agrave;nh một th&aacute;ch thức đ&aacute;ng kể đ&ograve;i hỏi
                sự tham gia của nhiều chuy&ecirc;n gia. Nhờ nhận thức sớm về
                những điều kiện n&agrave;y, ch&uacute;ng t&ocirc;i đ&atilde;
                c&oacute; thể lập kế hoạch xung quanh ch&uacute;ng v&agrave; đảm
                bảo rằng ch&uacute;ng t&ocirc;i c&oacute; đủ chuy&ecirc;n
                m&ocirc;n ph&ugrave; hợp.
            </p>
            <p>
                Thực tế l&agrave; c&ocirc;ng tr&igrave;nh n&agrave;y l&agrave;
                một t&ograve;a nh&agrave; lịch sử được liệt k&ecirc; c&oacute;
                t&aacute;c động lớn đến dự &aacute;n v&agrave; phải được
                t&iacute;nh đến c&ugrave;ng với luật x&acirc;y dựng v&agrave;
                c&aacute;c mục ti&ecirc;u kiến tr&uacute;c. Trong số những thứ
                kh&aacute;c, ch&uacute;ng t&ocirc;i đ&atilde; thay thế
                c&aacute;c phần k&iacute;nh để t&ograve;a nh&agrave; tiết kiệm
                năng lượng hơn v&agrave; được ph&acirc;n loại l&agrave;
                T&ograve;a nh&agrave; Xanh. H&igrave;nh thức v&agrave;
                nh&oacute;m c&aacute;c phần k&iacute;nh mới giống với c&aacute;c
                phần ban đầu nhất c&oacute; thể về mặt kỹ thuật. K&iacute;nh tấm
                được sử dụng để giữ nguy&ecirc;n đặc điểm ban đầu của mặt tiền.
                Kh&ocirc;ng gian độc đ&aacute;o của nh&agrave; chứa m&aacute;y
                bay, cửa nh&agrave; chứa m&aacute;y bay v&agrave; kết cấu chịu
                lực vẫn được giữ nguy&ecirc;n, bảo tồn bầu kh&ocirc;ng
                kh&iacute; lịch sử.
            </p>`,
        },
        {
            id: 3,
            title: "Công việc được phối hợp trong 3D",
            content: `Kết xuất 3D là một công cụ quan trọng trong cả giai đoạn lập kế hoạch và để trình bày và phối hợp các hoạt động khác nhau. Ví dụ, tất cả các lắp đặt trần nhà ở tầng dưới, nơi các dầm hiện có khiến các ống dẫn dọc theo chiều dài của tòa nhà trở nên bất khả thi do nhu cầu về chiều cao trần nhà. Khi mọi người đều có hình ảnh rõ ràng về những gì sẽ được thực hiện, công việc diễn ra trôi chảy hơn nhiều. Chúng tôi thậm chí đã thử nghiệm với 4D, tức là thêm vào yếu tố thời gian để làm rõ kế hoạch của chúng tôi và tiến độ của dự án.`,
        },
        ,
        {
            id: 4,
            title: "Các khóa học giới thiệu cho tất cả nhân viên",
            content: `<p>
                Tuy nhi&ecirc;n, kế hoạch, quy định, c&ocirc;ng nghệ v&agrave;
                m&aacute;y m&oacute;c kh&ocirc;ng phải l&agrave; tất cả. Trong
                một dự &aacute;n lớn như thế n&agrave;y, rất nhiều thứ phụ thuộc
                v&agrave;o việc mọi người c&oacute; mục ti&ecirc;u chung
                v&agrave; r&otilde; r&agrave;ng hay kh&ocirc;ng. H&atilde;y
                tưởng tượng một nơi l&agrave;m việc với 300 nh&acirc;n
                vi&ecirc;n mới v&agrave; sau đ&oacute; th&aacute;ch thức trở
                n&ecirc;n r&otilde; r&agrave;ng.
            </p>
            <p>
                Do đ&oacute;, một hợp đồng nh&oacute;m đ&atilde; được lập ra ở
                giai đoạn đầu giữa Skanska v&agrave; KF Fastigheter. Hợp đồng
                n&ecirc;u r&otilde; c&aacute;c mục ti&ecirc;u của dự &aacute;n
                v&agrave; c&aacute;ch ch&uacute;ng t&ocirc;i sẽ l&agrave;m việc
                để đạt được c&aacute;c mục ti&ecirc;u đ&oacute;. Sau đ&oacute;,
                hợp đồng n&agrave;y được phổ biến đến cả thợ l&agrave;nh nghề
                v&agrave; nh&acirc;n vi&ecirc;n văn ph&ograve;ng, bao gồm cả
                th&ocirc;ng qua c&aacute;c lớp học nhập m&ocirc;n m&agrave; mọi
                người, bao gồm cả c&aacute;c nh&agrave; thầu phụ, đều tham dự.
            </p>
            <p>
                V&iacute; dụ về c&aacute;c khối x&acirc;y dựng quan trọng
                kh&aacute;c bao gồm việc phổ biến th&ocirc;ng tin nhanh
                ch&oacute;ng, đ&agrave;o tạo an to&agrave;n, sự h&agrave;i
                l&ograve;ng trong c&ocirc;ng việc v&agrave; bầu kh&ocirc;ng
                kh&iacute; cởi mở. Kết hợp lại, ch&uacute;ng tạo ra một lực
                lượng t&iacute;ch cực với sự h&agrave;i l&ograve;ng cao, nơi
                c&aacute;c rủi ro về an to&agrave;n được b&aacute;o c&aacute;o
                v&agrave; nhanh ch&oacute;ng khắc phục, v&agrave; nơi
                th&ocirc;ng tin đ&uacute;ng đến đ&uacute;ng c&aacute;
                nh&acirc;n. John M&ouml;llerberg l&agrave; Quản l&yacute; dự
                &aacute;n cho dự &aacute;n x&acirc;y dựng.
            </p>
            <p>
                &ldquo;Giao tiếp l&agrave; một th&aacute;ch thức lớn. Phần lớn
                c&ocirc;ng việc của t&ocirc;i li&ecirc;n quan đến việc đảm bảo
                rằng đ&uacute;ng người nhận được đ&uacute;ng lượng th&ocirc;ng
                tin đ&uacute;ng. Thật th&uacute; vị khi bạn thấy mọi thứ đang
                diễn ra tốt đẹp, khi bạn tập hợp một nh&oacute;m l&agrave;m việc
                tốt v&agrave; tận hưởng c&ocirc;ng việc của họ.&rdquo;
            </p>`,
        },
        ,
        {
            id: 5,
            title: "An toàn trong tầm ngắm",
            content: `<p>
                Mọi người l&agrave;m việc trong dự &aacute;n đều đ&atilde;
                ho&agrave;n th&agrave;nh kh&oacute;a đ&agrave;o tạo an
                to&agrave;n. Ch&uacute;ng t&ocirc;i cũng nỗ lực tạo ra một
                m&ocirc;i trường cởi mở để c&ocirc;ng nh&acirc;n b&aacute;o
                c&aacute;o lỗi &ndash; v&iacute; dụ khi lan can an to&agrave;n
                bị mất &ndash; v&agrave; sau đ&oacute; ch&uacute;ng t&ocirc;i
                nhanh ch&oacute;ng giải quyết c&aacute;c lỗi n&agrave;y.
            </p>
            <p>
                Th&ocirc;ng tin thường thiếu hụt, đ&oacute; l&agrave; l&yacute;
                do tại sao ch&uacute;ng t&ocirc;i thiết lập m&agrave;n
                h&igrave;nh TV c&oacute; thể nhanh ch&oacute;ng truyền đạt
                th&ocirc;ng tin quan trọng đến nh&acirc;n vi&ecirc;n văn
                ph&ograve;ng v&agrave; thợ thủ c&ocirc;ng. Đ&acirc;y l&agrave;
                một biện ph&aacute;p đơn giản mang lại kết quả tuyệt vời.
                Ch&uacute;ng t&ocirc;i cũng đầu tư v&agrave;o một m&aacute;y khử
                rung tim m&agrave; ch&uacute;ng t&ocirc;i v&ocirc; c&ugrave;ng
                vui mừng v&igrave; kh&ocirc;ng bao giờ phải sử dụng.
            </p>
            <p>
                Với những nỗ lực chuẩn bị n&agrave;y, ch&uacute;ng t&ocirc;i,
                c&ugrave;ng với c&aacute;c thợ v&agrave; nh&agrave; thầu phụ,
                đ&atilde; đảm bảo rằng c&aacute;ch tiếp cận đ&uacute;ng đắn đối
                với vấn đề an to&agrave;n được phổ biến trong to&agrave;n bộ dự
                &aacute;n, cũng như đảm bảo rằng ch&uacute;ng t&ocirc;i thực
                hiện nhiệm vụ của m&igrave;nh với mức chất lượng v&agrave; năng
                suất ph&ugrave; hợp.
                <br /> <br />
                Trong qu&aacute; tr&igrave;nh lập kế hoạch trước nhiệm vụ,
                ch&uacute;ng t&ocirc;i đ&atilde; được hỗ trợ rất nhiều bởi lập
                kế hoạch dự &aacute;n 3D trong việc h&igrave;nh dung v&agrave;
                lập kế hoạch c&ocirc;ng việc của m&igrave;nh.
            </p>`,
        },
        ,
        {
            id: 6,
            title: "Theo lời của khách hàng của chúng tôi",
            content: `<p>
                &ldquo;Nhờ c&oacute; đội ngũ nh&acirc;n vi&ecirc;n hiểu biết
                v&agrave; tận t&acirc;m, Skanska đ&atilde; đ&oacute;ng
                g&oacute;p rất lớn v&agrave;o việc triển khai Bromma Blocks,
                Hanger 3 m&agrave; kh&ocirc;ng g&acirc;y ra bất kỳ gi&aacute;n
                đoạn lớn n&agrave;o, đồng thời giữ chi ph&iacute; dự &aacute;n
                trong phạm vi mong muốn.&rdquo;
            </p>
            <h4>
                <em>
                    Claes Pernling, Trưởng ph&ograve;ng dự &aacute;n tại KF
                    Fastigheter
                </em>
            </h4>`,
        },
    ];
    return (
        <Box sx={{ p: "48px 12px" }}>
            <Box sx={{ fontWeight: 600, fontSize: "36px", pb: "64px" }}>
                Tên dự án Khối Bromma, Hangar 3
            </Box>
            {mission?.map((item) => (
                <Box sx={{ fontSize: "18px" }} key={item.id}>
                    <Box sx={{ fontSize: "30px", fontWeight: 600, pb: "20px" }}>
                        {item.title}
                    </Box>
                    <Box
                        sx={{ pb: "40px" }}
                        dangerouslySetInnerHTML={{
                            __html: item.content,
                        }}
                    ></Box>
                </Box>
            ))}
        </Box>
    );
};

export default Desktop;
