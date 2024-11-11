import { useAbouts } from "../hooks/useAbouts";
import { color } from "../styles";
const contentItems = [
	{
		title: "Tùy chọn giao hàng",
		id: "tuy-chon-giao-hang",
		contentHtml: `<p style="margin-bottom: 16px;">
            Giao hàng tiêu chuẩn là miễn phí cho tất cả các đơn đặt hàng trực tuyến. Bạn có thể nâng cấp phương thức giao hàng của mình để có trải nghiệm nhanh hơn và/hoặc thuận tiện hơn với một khoản phụ phí. Các tùy chọn giao hàng và khung thời gian có sẵn cho các mặt hàng trong đơn đặt hàng và vị trí của bạn sẽ được hiển thị trong quá trình thanh toán.
        </p>
        <br />
        <p style="margin-bottom: 16px;">
            Khi bạn đã đặt hàng, bạn có thể truy cập 
            <span style="color:${color.primary}">Trạng thái đơn hàng</span> 
            để ước tính lô hàng và thời gian giao hàng của từng mặt hàng. Các mặt hàng được vận chuyển khi chúng có sẵn. Chúng tôi không thể giao hàng đến hộp thư PO.
        </p>

        <h4 style="font-size: 20px; color: black; margin-top: 24px; margin-bottom: 12px;">
            Tùy chọn giao hàng và nhận hàng nhanh hơn
        </h4>
        <p style="margin-bottom: 16px;">
            Tìm hiểu thêm về các phương thức giao hàng nhanh của chúng tôi, bao gồm các tùy chọn giao hàng trong hai giờ đối với các mặt hàng đủ điều kiện. Truy cập 
            <span style="color:${color.primary}">Giao hàng & Nhận hàng</span> 
            để biết thông tin chi tiết.
        </p>

        <h4 style="font-size: 20px; color: black; margin-top: 24px; margin-bottom: 12px;">
            Khung thời gian giao hàng cho các sản phẩm được tùy chỉnh
        </h4>
        <p style="margin-bottom: 16px;">
            Các sản phẩm cà phê tùy chỉnh sẽ tốn thêm một chút thời gian để chuẩn bị sản phẩm của bạn. Ngày giao hàng được cập nhật động trong quá trình định cấu hình và sẽ được phản ánh trên email xác nhận đơn hàng cũng như trong 
            <span style="color:${color.primary}">Trạng thái đơn hàng</span> 
            của bạn.
        </p>

        <h4 style="font-size: 20px; color: black; margin-top: 24px; margin-bottom: 12px;">
            Giá vận chuyển
        </h4>
        <p style="margin-bottom: 16px;">
            Chi phí vận chuyển được tính toán và hiển thị trên trang Thanh toán trước khi bạn hoàn tất đơn hàng của mình. Chi phí giao hàng cho mỗi tùy chọn có sẵn cũng được hiển thị trong email Xác nhận đơn hàng và trên trang 
            <span style="color:${color.primary}">Trạng thái đơn hàng</span>.
        </p>

        <h4 style="font-size: 20px; color: black; margin-top: 24px; margin-bottom: 12px;">
            Lưu ý về giao hàng
        </h4>
        <ul style="margin-bottom: 16px; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Phương thức thanh toán có thể ảnh hưởng đến ngày giao hàng cuối cùng để cho phép xử lý.</li>
            <li style="margin-bottom: 8px;">The Thanh Coffee sử dụng các nhà cung cấp dịch vụ tốt nhất trong doanh nghiệp để đảm bảo đơn hàng của bạn được giao đúng hẹn.</li>
            <li style="margin-bottom: 0;">The Thanh Coffee không giao hàng đến các địa chỉ hộp thư bưu điện.</li>
        </ul>`,
	},
	{
		title: "Mua hàng",
		id: "mua-hang",
		contentHtml: `
    <div>
        Nếu đây là lần đầu tiên bạn chọn The Thanh Coffee, các trang sản phẩm của chúng tôi sẽ hiển thị
        <strong> Nhận hàng: Kiểm tra tình trạng còn hàng</strong>. Nhấp vào liên kết này, nhập mã bưu điện hoặc thành phố nơi bạn muốn nhận mặt hàng và nhấp vào <strong>Tìm kiếm cửa hàng</strong> để kiểm tra tình trạng còn hàng. Nếu trước đây bạn đã chọn The Thanh Coffee thì các trang sản phẩm của chúng tôi sẽ hiển thị vị trí bạn đã chọn. Bạn có thể nhấp vào Kiểm tra cửa hàng khác để kiểm tra tình trạng sẵn sàng nhận hàng tại một The Thanh Coffee khác.
      </div>
      <br />
      <div>
        Khi bạn đã sẵn sàng mua hàng, hãy chọn
        <strong> Tôi sẽ nhận </strong>tại Checkout. Nếu bạn muốn thay đổi địa điểm đón thì chọn <strong> Thay đổi địa điểm</strong> rồi Continue. Các mặt hàng được đánh dấu<strong> Có sẵn hôm nay</strong> thường sẽ sẵn sàng để nhận trong vòng một giờ. Một số mặt hàng nhất định cũng có thể đủ điều kiện cho Khoảng thời gian nhận hàng cho phép (các) mặt hàng của bạn được nhận trong một khoảng thời gian nhất định. Chúng tôi sẽ gửi cho bạn email nhận hàng và thông báo trên thiết bị di động khi đơn hàng của bạn đã sẵn sàng để nhận. Vui lòng đợi thông báo này trước khi đến cửa hàng. QUAN TRỌNG: Tên của người liên hệ nhận đơn hàng phải trùng với tên của người mua, nếu không bạn sẽ không thể nhận đơn hàng của mình.
      </div>
      <br />
      <div>
        Nếu bạn muốn người khác nhặt đồ của mình thì chọn
        <strong> Người khác sẽ nhặt đồ này</strong>. Để nhận hàng trong The Thanh Coffee, bạn cần mang theo số đơn đặt hàng và giấy tờ tùy thân có ảnh hợp lệ. Nếu bạn đã chỉ định một người liên hệ nhận hàng thay thế, họ sẽ cần mang theo mã đơn hàng và giấy tờ tùy thân có ảnh hợp lệ.
    </div>
`,
	},
	{
		title: "Cái gì tiếp theo?",
		id: "dieu-gi-tiep-theo",
		contentHtml: `<p style="text-align: justify;">
                    <span>
                      Sau khi đơn h&agrave;ng của bạn được đặt, ch&uacute;ng
                      t&ocirc;i sẽ gửi th&ocirc;ng tin về đơn h&agrave;ng của
                      bạn. H&igrave;nh thức th&ocirc;ng b&aacute;o về đơn
                      h&agrave;ng bạn nhận được t&ugrave;y thuộc v&agrave;o việc
                      lựa chọn phương thức giao h&agrave;ng v&agrave; nhận
                      h&agrave;ng của bạn.&nbsp;
                    </span>
                  </p>
                  <p>
                    <br />
                  </p>
                  <p style="text-align: justify;">
                    <span>
                      Khi bạn đặt h&agrave;ng tại The Thanh Coffee, ch&uacute;ng
                      t&ocirc;i đảm bảo qu&aacute; tr&igrave;nh đặt h&agrave;ng
                      của bạn sẽ diễn ra một c&aacute;ch su&ocirc;n sẻ v&agrave;
                      thuận tiện nhất. Dưới đ&acirc;y l&agrave; c&aacute;c bước
                      v&agrave; c&aacute;c k&ecirc;nh th&ocirc;ng b&aacute;o
                      m&agrave; ch&uacute;ng t&ocirc;i sử dụng để cập nhật cho
                      bạn biết về đơn h&agrave;ng của m&igrave;nh.
                    </span>
                  </p>
                  <p>
                    <br />
                  </p>
                  <h4 style="text-align: justify;">
                    <strong>
                      <span>Đặt H&agrave;ng</span>
                    </strong>
                  </h4>
                  <h4 style="text-align: justify;">
                    <span>
                      Bạn c&oacute; thể đặt h&agrave;ng qua nhiều k&ecirc;nh
                      kh&aacute;c nhau:
                    </span>
                  </h4>
                  <ul>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>Ứng dụng:</span>
                        </strong>
                        <span>
                          &nbsp;Đặt h&agrave;ng qua ứng dụng, chọn sản phẩm ưa
                          th&iacute;ch v&agrave; t&ugrave;y chỉnh theo sở
                          th&iacute;ch.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>Gọi điện:</span>
                        </strong>
                        <span>
                          &nbsp;Gọi đến số điện thoại của cửa h&agrave;ng để đặt
                          h&agrave;ng trực tiếp với nh&acirc;n vi&ecirc;n.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Tin nhắn c&aacute; nh&acirc;n:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Gửi tin nhắn đặt h&agrave;ng qua số điện thoại
                          cửa h&agrave;ng.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>Email:</span>
                        </strong>
                        <span>
                          &nbsp;Gửi đơn đặt h&agrave;ng qua email của cửa
                          h&agrave;ng.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Tại cửa h&agrave;ng:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Đến trực tiếp cửa h&agrave;ng để đặt
                          h&agrave;ng.
                        </span>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                  <h4 style="text-align: justify;">
                    <strong>
                      <span>
                        X&aacute;c Nhận Đơn H&agrave;ng
                      </span>
                    </strong>
                  </h4>
                  <p style="text-align: justify;">
                    <span>
                      Sau khi đơn h&agrave;ng của bạn được đặt, ch&uacute;ng
                      t&ocirc;i sẽ gửi th&ocirc;ng tin x&aacute;c nhận qua
                      c&aacute;c k&ecirc;nh sau:
                    </span>
                  </p>
                  <ul>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>Email:</span>
                        </strong>
                        <span>
                          &nbsp;Một email x&aacute;c nhận chi tiết đơn
                          h&agrave;ng, bao gồm c&aacute;c mặt h&agrave;ng, địa
                          chỉ giao h&agrave;ng v&agrave; thời gian dự kiến.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Tin nhắn c&aacute; nh&acirc;n:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Tin nhắn x&aacute;c nhận đơn h&agrave;ng qua số
                          điện thoại.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Th&ocirc;ng b&aacute;o ứng dụng:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Th&ocirc;ng b&aacute;o tr&ecirc;n ứng dụng The
                          Thanh Coffee để x&aacute;c nhận đơn h&agrave;ng của
                          bạn đ&atilde; được nhận v&agrave; đang xử l&yacute;.
                        </span>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                  <h4 style="text-align: justify;">
                    <strong>
                      <span>
                        Th&ocirc;ng B&aacute;o Đơn H&agrave;ng
                      </span>
                    </strong>
                  </h4>
                  <p style="text-align: justify;">
                    <span>
                      Khi đơn h&agrave;ng của bạn đang được xử l&yacute;
                      v&agrave; chuẩn bị sẵn s&agrave;ng, ch&uacute;ng t&ocirc;i
                      sẽ gửi c&aacute;c th&ocirc;ng b&aacute;o sau:
                    </span>
                  </p>
                  <ul>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Email th&ocirc;ng b&aacute;o:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Email th&ocirc;ng b&aacute;o t&igrave;nh trạng
                          đơn h&agrave;ng, t&ecirc;n nh&agrave; cung cấp dịch
                          vụ, số theo d&otilde;i (nếu giao h&agrave;ng)
                          v&agrave; ng&agrave;y dự kiến giao h&agrave;ng.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Th&ocirc;ng b&aacute;o ứng dụng:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Th&ocirc;ng b&aacute;o qua ứng dụng về
                          t&igrave;nh trạng xử l&yacute; đơn h&agrave;ng.
                        </span>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                  <h4 style="text-align: justify;">
                    <strong>
                      <span>
                        Th&ocirc;ng B&aacute;o Nhận H&agrave;ng
                      </span>
                    </strong>
                  </h4>
                  <p style="text-align: justify;">
                    <span>
                      Khi đơn h&agrave;ng của bạn đ&atilde; sẵn s&agrave;ng để
                      nhận hoặc đang tr&ecirc;n đường giao đến, bạn sẽ nhận
                      được:
                    </span>
                  </p>
                  <ul>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Email th&ocirc;ng b&aacute;o nhận h&agrave;ng:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Email th&ocirc;ng b&aacute;o sản phẩm đ&atilde;
                          sẵn s&agrave;ng tại cửa h&agrave;ng hoặc đang được
                          giao.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Th&ocirc;ng b&aacute;o ứng dụng:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Th&ocirc;ng b&aacute;o tr&ecirc;n ứng dụng
                          x&aacute;c nhận sản phẩm đ&atilde; sẵn s&agrave;ng để
                          nhận hoặc đang được giao.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Tin nhắn c&aacute; nh&acirc;n:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Tin nhắn th&ocirc;ng b&aacute;o nhận h&agrave;ng
                          qua số điện thoại.
                        </span>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                  <h4 style="text-align: justify;">
                    <strong>
                      <span>
                        Nhắc nhở Nhận H&agrave;ng
                      </span>
                    </strong>
                  </h4>
                  <p style="text-align: justify;">
                    <span>
                      Nếu bạn chưa đến nhận h&agrave;ng sau một thời gian nhất
                      định, ch&uacute;ng t&ocirc;i sẽ gửi nhắc nhở:
                    </span>
                  </p>
                  <ul>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>Email nhắc nhở:</span>
                        </strong>
                        <span>
                          &nbsp;Email nhắc nhở về đơn h&agrave;ng của bạn vẫn
                          đang chờ được nhận.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Th&ocirc;ng b&aacute;o ứng dụng:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Th&ocirc;ng b&aacute;o nhắc nhở qua ứng dụng.
                        </span>
                      </p>
                    </li>
                    <li style="list-style-type:disc;font-size:18pt;">
                      <p>
                        <strong>
                          <span>
                            Tin nhắn c&aacute; nh&acirc;n:
                          </span>
                        </strong>
                        <span>
                          &nbsp;Tin nhắn nhắc nhở qua số điện thoại hoặc mạng
                          x&atilde; hội.
                        </span>
                      </p>
                    </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                  <p style="text-align: justify;">
                    <span>
                      Với quy tr&igrave;nh đặt h&agrave;ng r&otilde; r&agrave;ng
                      v&agrave; tiện lợi, The Thanh Coffee đảm bảo bạn sẽ
                      lu&ocirc;n nắm r&otilde; t&igrave;nh trạng đơn h&agrave;ng
                      của m&igrave;nh v&agrave; c&oacute; trải nghiệm mua
                      h&agrave;ng tốt nhất. Ch&uacute;ng t&ocirc;i sử dụng nhiều
                      k&ecirc;nh th&ocirc;ng b&aacute;o như email, tin nhắn
                      c&aacute; nh&acirc;n, v&agrave; th&ocirc;ng b&aacute;o ứng
                      dụng để đảm bảo bạn lu&ocirc;n được cập nhật v&agrave;
                      kh&ocirc;ng bỏ lỡ bất kỳ th&ocirc;ng tin quan trọng
                      n&agrave;o.
                    </span>
                  </p>`,
	},
	{
		title: "Thông báo văn bản",
		id: "thong-bao-van-ban",
		contentHtml: `<p style="text-align: justify;">
                  <span>
                    Khi bạn thực hiện đơn h&agrave;ng của m&igrave;nh,
                    ch&uacute;ng t&ocirc;i sẽ gửi cho bạn c&aacute;c th&ocirc;ng
                    b&aacute;o về t&igrave;nh trạng đơn h&agrave;ng bao gồm quy
                    tr&igrave;nh giao h&agrave;ng v&agrave; nhận h&agrave;ng, từ
                    khi đơn h&agrave;ng được x&aacute;c nhận đến khi h&agrave;ng
                    h&oacute;a được giao đến cửa nh&agrave; của bạn.&nbsp;
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p style="text-align: justify;">
                  <strong>
                    <span>
                      Cập nhật t&igrave;nh trạng đơn h&agrave;ng:
                    </span>
                  </strong>
                  <span>
                    &nbsp;Khi đơn h&agrave;ng của qu&yacute; kh&aacute;ch được
                    x&aacute;c nhận v&agrave; chuẩn bị để vận chuyển,
                    ch&uacute;ng t&ocirc;i sẽ gửi một tin nhắn văn bản
                    th&ocirc;ng b&aacute;o. Tin nhắn n&agrave;y sẽ cung cấp số
                    đơn h&agrave;ng của qu&yacute; kh&aacute;ch c&ugrave;ng với
                    một li&ecirc;n kết đến trang theo d&otilde;i đơn h&agrave;ng
                    tr&ecirc;n ứng dụng hoặc c&aacute;c b&ecirc;n thứ ba.
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p style="text-align: justify;">
                  <strong>
                    <span>
                      Th&ocirc;ng b&aacute;o giao h&agrave;ng:
                    </span>
                  </strong>
                  <span>
                    &nbsp;Thời gian giao h&agrave;ng đ&atilde; đến, ch&uacute;ng
                    t&ocirc;i sẽ tiếp tục gửi tin nhắn văn bản để th&ocirc;ng
                    b&aacute;o về qu&aacute; tr&igrave;nh đơn h&agrave;ng được
                    gửi đi. Qu&yacute; kh&aacute;ch sẽ nhận được th&ocirc;ng
                    b&aacute;o n&agrave;y trước hoặc sau khi h&agrave;ng
                    h&oacute;a được giao, t&ugrave;y thuộc v&agrave;o phương
                    thức vận chuyển v&agrave; thời gian m&agrave; qu&yacute;
                    kh&aacute;ch đ&atilde; chọn.
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <strong>
                    <span>
                      T&ugrave;y chỉnh th&ocirc;ng b&aacute;o:
                    </span>
                  </strong>
                  <span>
                    &nbsp;Ch&uacute;ng t&ocirc;i hiểu rằng nhu cầu của
                    qu&yacute; kh&aacute;ch c&oacute; thể thay đổi theo thời
                    gian. Do đ&oacute;, qu&yacute; kh&aacute;ch c&oacute; thể dễ
                    d&agrave;ng thay đổi số điện thoại di động được sử dụng để
                    nhận th&ocirc;ng b&aacute;o bằng c&aacute;ch đăng nhập
                    v&agrave;o t&agrave;i khoản của m&igrave;nh v&agrave; chỉnh
                    sửa t&ugrave;y chọn th&ocirc;ng b&aacute;o giao h&agrave;ng
                    hoặc nhận h&agrave;ng cho từng đơn h&agrave;ng cụ thể.
                  </span>
                </p>`,
	},
	{
		title: "Thông tin ngày giao hàng",
		id: "thong-tin-ngay-giao-hang",
		contentHtml: `<p style="text-align: justify;">
                    <span>
                      Để mang lại trải nghiệm mua sắm thuận tiện v&agrave; minh
                      bạch nhất, ch&uacute;ng t&ocirc;i cung cấp c&aacute;c
                      c&ocirc;ng cụ để bạn c&oacute; thể theo d&otilde;i
                      v&agrave; quản l&yacute; đơn h&agrave;ng của m&igrave;nh
                      một c&aacute;ch dễ d&agrave;ng.
                    </span>
                  </p>
                  <p>
                    <br />
                  </p>
                  <p style="text-align: justify;">
                    <strong>
                      <span>
                        Theo d&otilde;i đơn h&agrave;ng:
                      </span>
                    </strong>
                    <span>
                      &nbsp;Để theo d&otilde;i trạng th&aacute;i đơn h&agrave;ng
                      của bạn, bạn c&oacute; thể truy cập v&agrave;o Trạng
                      th&aacute;i Đơn H&agrave;ng trực tuyến th&ocirc;ng qua
                      [li&ecirc;n kết n&agrave;y] hoặc kiểm tra tr&ecirc;n
                      c&aacute;c ứng dụng. Tr&ecirc;n trang T&agrave;i Khoản,
                      bạn c&oacute; thể xem trạng th&aacute;i hiện tại của đơn
                      đặt h&agrave;ng, xem c&aacute;c mặt h&agrave;ng đ&atilde;
                      đặt, v&agrave; kiểm tra thời gian gửi v&agrave; giao
                      h&agrave;ng ước t&iacute;nh.
                    </span>
                  </p>
                  <p>
                    <br />
                  </p>
                  <p style="text-align: justify;">
                    <strong>
                      <span>
                        Ước t&iacute;nh vận chuyển v&agrave; giao
                        h&agrave;ng:&nbsp;
                      </span>
                    </strong>
                    <span>
                      Khung thời gian ước t&iacute;nh về thời điểm m&agrave; mặt
                      h&agrave;ng sẽ được chuẩn bị vận chuyển v&agrave; được lấy
                      tại cửa h&agrave;ng. Thời gian &quot;Giao
                      H&agrave;ng&quot; ước t&iacute;nh thời điểm m&agrave; mặt
                      h&agrave;ng sẽ được giao đến địa chỉ giao h&agrave;ng của
                      bạn sau khi đ&atilde; được vận chuyển. Thời gian giao
                      h&agrave;ng ước t&iacute;nh phụ thuộc v&agrave;o phương
                      thức vận chuyển v&agrave; thời gian bạn chọn khi thanh
                      to&aacute;n.
                    </span>
                  </p>`,
	},
	{
		title: "Chữ ký giao hàng",
		id: "chu-ky-khi-giao-hang",
		contentHtml: `<p style="text-align: justify;">
                <span>
                  Khi nhận h&agrave;ng, bạn sẽ được y&ecirc;u cầu k&yacute; nhận
                  để x&aacute;c nhận việc nhận h&agrave;ng th&agrave;nh
                  c&ocirc;ng. Điều n&agrave;y kh&ocirc;ng chỉ gi&uacute;p
                  ch&uacute;ng t&ocirc;i đảm bảo rằng h&agrave;ng h&oacute;a
                  đ&atilde; đến đ&uacute;ng địa chỉ m&agrave; c&ograve;n
                  l&agrave; bước quan trọng trong việc đảm bảo t&iacute;nh
                  to&agrave;n vẹn của sản phẩm. Chữ k&yacute; giao h&agrave;ng
                  cũng l&agrave; minh chứng về việc bạn đ&atilde; nhận được
                  h&agrave;ng một c&aacute;ch an to&agrave;n v&agrave;
                  đ&uacute;ng hẹn.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p style="text-align: justify;">
                <span>
                  The Thanh cam kết rằng mỗi sản phẩm được giao đến tay bạn đều
                  được đ&oacute;ng g&oacute;i cẩn thận v&agrave; đầy đủ tem
                  ni&ecirc;m phong. Điều n&agrave;y bảo đảm rằng sản phẩm
                  kh&ocirc;ng bị hư hỏng hoặc thiếu s&oacute;t trong qu&aacute;
                  tr&igrave;nh vận chuyển. Ch&uacute;ng t&ocirc;i kiểm tra mỗi
                  đơn h&agrave;ng trước khi giao để đảm bảo rằng sản phẩm
                  đ&aacute;p ứng hoặc vượt qua c&aacute;c ti&ecirc;u chuẩn chất
                  lượng của ch&uacute;ng t&ocirc;i.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p style="text-align: justify;">
                <span>
                  Ch&uacute;ng t&ocirc;i khuyến kh&iacute;ch bạn kiểm tra sản
                  phẩm ngay sau khi nhận h&agrave;ng. Nếu bạn ph&aacute;t hiện
                  bất kỳ vấn đề n&agrave;o li&ecirc;n quan đến t&iacute;nh
                  to&agrave;n vẹn của sản phẩm, vui l&ograve;ng li&ecirc;n hệ
                  với ch&uacute;ng t&ocirc;i ngay lập tức để c&oacute; thể hỗ
                  trợ nhanh ch&oacute;ng.&nbsp;
                </span>
              </p>`,
	},
	{
		title: "Hạn chế vận chuyển",
		id: "han-che-van-chuyen",
		contentHtml: `<p style="text-align: justify;">
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        Trong qu&aacute; tr&igrave;nh vận h&agrave;nh chuyển đồ
                        ăn v&agrave; mua đồ, ch&uacute;ng t&ocirc;i muốn chia sẻ
                        một số chế độ v&agrave; lưu &yacute; đặc th&ugrave; để
                        đảm bảo sản phẩm ẩm thực của bạn đến tay kh&aacute;ch
                        h&agrave;ng một c&aacute;ch an to&agrave;n v&agrave;
                        nguy&ecirc;n vẹn nhất.
                      </font>
                    </font>
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p style="text-align: justify;">
                  <strong>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          Điều kiện bảo quản:
                        </font>
                      </font>
                    </span>
                  </strong>
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        
                        &nbsp;Đồ ăn v&agrave; đồ uống thường y&ecirc;u cầu điều
                        kiện bảo quản đặc biệt để đảm bảo an to&agrave;n
                        v&agrave; sinh thực phẩm v&agrave; sản phẩm chất lượng.
                        Trong qu&aacute; tr&igrave;nh chuyển đổi, ch&uacute;ng
                        t&ocirc;i phải đảm bảo rằng c&aacute;c sản phẩm được
                        chuyển ở nhiệt độ th&iacute;ch hợp v&agrave; trong
                        m&ocirc;i trường m&ocirc;i trường sẽ tr&aacute;nh bị hư
                        hỏng hoặc nhiễm độc.
                      </font>
                    </font>
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p style="text-align: justify;">
                  <strong>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          Thời gian vận h&agrave;nh chuyển:&nbsp;
                        </font>
                      </font>
                    </span>
                  </strong>
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        
                        Đối với c&aacute;c sản phẩm dễ hư hỏng như đồ ăn tươi
                        sống hoặc đồ uống kh&ocirc;ng c&oacute; chất bảo quản,
                        thời gian vận h&agrave;nh c&agrave;ng ngắn c&agrave;ng
                        tốt để giảm thiểu nguy cơ hư hỏng cơ bản. Ch&uacute;ng
                        t&ocirc;i lu&ocirc;n cố gắng vận chuyển h&agrave;ng
                        nhanh ch&oacute;ng v&agrave; hiệu quả để đảm bảo sản
                        phẩm đến tay kh&aacute;ch h&agrave;ng một c&aacute;ch an
                        to&agrave;n v&agrave; ngon l&agrave;nh.
                      </font>
                    </font>
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p style="text-align: justify;">
                  <strong>
                    <span>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          Phạm vi vận chuyển:&nbsp;
                        </font>
                      </font>
                    </span>
                  </strong>
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">
                        
                        Ch&uacute;ng t&ocirc;i chỉ b&aacute;n v&agrave; vận
                        chuyển c&aacute;c sản phẩm trong ranh giới Việt Nam. Để
                        đảm bảo dịch vụ chuyển hiệu quả v&agrave; đảm bảo
                        t&iacute;nh to&agrave;n vẹn của sản phẩm, ch&uacute;ng
                        t&ocirc;i kh&ocirc;ng thực hiện giao dịch đến hộp thư
                        địa chỉ PO Box, người giao nhận h&agrave;ng h&oacute;a
                        hoặc c&aacute;c địa chỉ b&ecirc;n ngo&agrave;i Việt Nam.
                      </font>
                    </font>
                  </span>
                </p>`,
	},
	{
		title: "Vấn đề với đồ uống của bạn",
		id: "van-de-voi-do-uong-cua-ban",
		contentHtml: `<p style="text-align: justify;">
                <span>
                  Ch&uacute;ng t&ocirc;i đặt sự h&agrave;i l&ograve;ng của
                  kh&aacute;ch h&agrave;ng l&ecirc;n h&agrave;ng đầu v&agrave;
                  cam kết cung cấp dịch vụ vận chuyển đ&aacute;ng tin cậy đi
                  c&ugrave;ng chất lượng sản phẩm. Nếu c&oacute; bất kỳ vấn đề
                  n&agrave;o xảy ra với đơn h&agrave;ng của bạn, h&atilde;y
                  li&ecirc;n hệ ngay với ch&uacute;ng t&ocirc;i để được giải
                  quyết nhanh ch&oacute;ng v&agrave; hiệu quả.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p style="text-align: justify;">
                <strong>
                  <span>
                    Ho&agrave;n tiền vận chuyển:
                  </span>
                </strong>
                <span>
                  &nbsp;Nếu bạn đ&atilde; thanh to&aacute;n cho dịch vụ vận
                  chuyển nhưng kh&ocirc;ng nhận được đồ uống đ&uacute;ng theo
                  y&ecirc;u cầu, ch&uacute;ng t&ocirc;i th&agrave;nh thật xin
                  lỗi về sự bất tiện n&agrave;y. Vui l&ograve;ng li&ecirc;n hệ
                  với Dịch Vụ Kh&aacute;ch H&agrave;ng của The Thanh Coffee theo
                  số điện thoại [số điện thoại Dịch Vụ Kh&aacute;ch H&agrave;ng]
                  để y&ecirc;u cầu ho&agrave;n tiền vận chuyển v&agrave; giải
                  quyết khiếu nại của bạn.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span>
                    Sản phẩm kh&ocirc;ng ch&iacute;nh x&aacute;c hoặc bị hư
                    hỏng:&nbsp;
                  </span>
                </strong>
                <span>
                  Nếu bạn nhận được sản phẩm kh&ocirc;ng ch&iacute;nh x&aacute;c
                  hoặc bị hư hỏng trong qu&aacute; tr&igrave;nh vận chuyển, vui
                  l&ograve;ng li&ecirc;n hệ với Dịch Vụ Kh&aacute;ch H&agrave;ng
                  của The Thanh Coffee theo số điện thoại [số điện thoại Dịch Vụ
                  Kh&aacute;ch H&agrave;ng] để b&aacute;o c&aacute;o vấn đề
                  v&agrave; nhận sự hỗ trợ cần thiết.
                </span>
              </p>`,
	},
];

export const useContentItems = () => {
	const [data, refetch, isLoading] = useAbouts();
	return data && data[0]
		? data.map((item, index) => ({
				...item,
				contentHtml: item.details,
				imgSrc: item.image ?? contentItems[index].imgSrc,
		  }))
		: contentItems;
};
