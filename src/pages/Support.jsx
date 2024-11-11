import {
  Box,
  Container,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import moitruonglamviec from "../component/img/moitruonglamviec.jpg";
import MessageNenMauXanh from "../component/svg/icon/MessageNenMauXanhIcon";
import PhoneIcon from "../component/svg/icon/PhoneNenMauXanhIcon";
import GpsIcon from "../component/svg/icon/GpsNenMauXanhIcon";
import GpsIcons from "../component/svg/icon/GpsIcon";
import CustomerSearchIcon from "../component/svg/icon/CustomerSearchIcon";

const options = [
  {
    value: "option1",
    title: "Sản phẩm",
    list: [
      {
        id: "item1_1",
        name: "Quán cà phê của bạn có những loại cà phê nào?",
        content:
          "Chúng tôi cung cấp nhiều loại cà phê bao gồm: Espresso, Latte, Capuccino, americano, macchiato, mocha  và nhiều loại cà phê đặc biệt khác. Bạn có thể xem thực đơn chi tiết trên trang Web của chúng tôi.",
      },
      {
        id: "item1_2",
        name: "Có các loại trà nào tại The Thanh Coffee?",
        content:
          "Chúng tôi có các loại Trà Ủ lạnh bao gồm: Trà Đen, Trà bá tước, Trà Matcha và Trà xanh đá chanh. Mỗi loại trà đều được lựa chọn kỹ lưỡng để mang đến hương vị thơm ngon và tươi mát nhất.",
      },
      {
        id: "item1_3",
        name: "Các món ăn nhẹ nào có sẵn tại quán?",
        content:
          "Chúng tôi cung cấp nhiều loại bánh ngọt, bánh mì và các món ăn nhẹ khác. Bạn có thể xem thực đơn chi tiết trên trang Web của chúng tôi.",
      },
      {
        id: "item1_4",
        name: "Thực phẩm và đồ uống tại quán có sử dụng nguyen liệu hữu cơ không?",
        content:
          "Chúng tôi sử dụng các nguyên liệu hữu cơ và tươi ngon nhất có thể đảm bảo chất lượng và hương vị tốt nhất cho món ăn và đồ uống của chúng tôi.",
      },
      {
        id: "item1_5",
        name: "Quán có chương trình khuyến mãi hay ưu đãi đặc biệt cho đồ uống và thực phẩm không?",
        content:
          "Có, chúng tôi thường xuyên có các chương trình khuyến mãi và ưu đãi đặc biệt. Bạn có thể theo dõi trang Web và các kênh như Facebook, Instagram,.. của chúng tôi để cập nhật thông tin mới nhất.",
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
        content:
          "Khách hàng có thể đặt hàng trực tiếp ở quán tại Địa chỉ: 147 Đội Cấn, Ba Đình, Hà Nội  hoặc qua điện thoại/website của chúng tôi.",
      },
      {
        id: "item2_2",
        name: "Quán cung cấp hóa đơn VAT cho đơn hàng không?",
        content: "Đúng vậy, chúng tôi cung cấp hóa đơn VAT cho mỗi đơn hàng.",
      },
      {
        id: "item2_3",
        name: "Quy trình xác nhận lại đơn hàng như thế nào?",
        content:
          "Chúng tôi sẽ gọi điện hoặc gửi email xác nhận lại đơn hàng trước khi giao hàng.",
      },
      {
        id: "item2_4",
        name: "Thời gian dự kiến giao hàng là bao lâu?",
        content:
          "Thời gian giao hàng thường từ 30 phút đến 1 giờ tùy thuộc vào khoảng cách và số lượng đơn hàng.",
      },
      {
        id: "item2_5",
        name: "Quý khách có yêu cầu đặc biệt nào khi đặt hàng không?",
        content:
          "Chúng tôi sẵn sàng đáp ứng các yêu cầu đặc biệt như đóng gói riêng, thêm topping hay thay đổi hương vị theo yêu cầu của khách hàng.",
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
        content:
          "Quán đang tìm kiếm các vị trí nhân viên phục vụ và pha chế. Yêu cầu công việc bao gồm phục vụ khách hàng, chuẩn bị và pha chế đồ uống, duy trì sạch sẽ và chất lượng dịch vụ.",
      },
      {
        id: "item3_2",
        name: "Mức lương và các phúc lợi khác như thế nào?",
        content:
          "Mức lương và các phúc lợi được cung cấp sẽ được thương lượng theo kinh nghiệm và kỹ năng của ứng viên. Các phúc lợi bao gồm bảo hiểm, bữa ăn, và các chương trình khuyến mãi cho nhân viên.",
      },
      {
        id: "item3_3",
        name: "Yêu cầu kinh nghiệm làm việc trong ngành cà phê hay các kỹ năng cụ thể nào?",
        content:
          "Ưu tiên ứng viên có kinh nghiệm làm việc trong ngành cà phê, có kỹ năng giao tiếp tốt, khả năng làm việc trong môi trường áp lực cao và sẵn sàng làm việc ca ngày và ca tối.",
      },
      {
        id: "item3_4",
        name: "Thời gian làm việc và ca làm việc như thế nào?",
        content:
          "Thời gian làm việc linh hoạt, bao gồm ca sáng, ca chiều và ca tối, cùng với các ngày cuối tuần và ngày lễ khi cần thiết.",
      },
      {
        id: "item3_5",
        name: "Quá trình phỏng vấn và lịch trình tuyển dụng như thế nào?",
        content:
          "Quá trình phỏng vấn bao gồm một cuộc trò chuyện cá nhân để đánh giá kỹ năng và phù hợp công việc. Lịch trình tuyển dụng sẽ được thông báo cụ thể sau khi xác định ứng viên phù hợp.",
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
        content:
          "Hiện tại, chúng tôi có một số nhà cung cấp đáng tin cậy cung cấp cà phê, sữa, đường và các nguyên liệu khác cho quán.",
      },
      {
        id: "item4_2",
        name: "Quán có tiêu chuẩn nào đối với việc chọn lựa nhà cung cấp?",
        content:
          "Chúng tôi chọn lựa nhà cung cấp dựa trên các tiêu chuẩn về chất lượng sản phẩm, giá cả hợp lý và tính bền vững của nguồn nguyên liệu.",
      },
      {
        id: "item4_3",
        name: "Quán đã xem xét các tiêu chuẩn về bền vững và nguồn gốc của các sản phẩm mình sử dụng chưa?",
        content:
          "Đúng vậy, chúng tôi luôn ưu tiên các sản phẩm có nguồn gốc bền vững và đảm bảo an toàn thực phẩm để đảm bảo sức khỏe của khách hàng và môi trường.",
      },
      {
        id: "item4_4",
        name: "Quy trình kiểm tra và đánh giá nhà cung cấp hiện tại của quán như thế nào?",
        content:
          "Chúng tôi thường xuyên kiểm tra chất lượng nguyên liệu và hợp đồng với các nhà cung cấp để đảm bảo chúng đáp ứng các tiêu chuẩn và yêu cầu của quán.",
      },
      {
        id: "item4_5",
        name: "Lịch trình đặt hàng và quản lý kho hàng như thế nào để đảm bảo nguyên liệu luôn đảm bảo sẵn có?",
        content:
          "Chúng tôi có một hệ thống quản lý kho hàng chặt chẽ và lên lịch đặt hàng định kỳ để đảm bảo nguyên liệu luôn có sẵn theo nhu cầu sản xuất và tiêu dùng.",
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
        content:
          "Hiện tại, chúng tôi đang xem xét kế hoạch mở rộng để cải thiện không gian và nâng cấp thiết bị để cung cấp dịch vụ tốt hơn cho khách hàng.",
      },
      {
        id: "item5_2",
        name: "Quán cà phê có kế hoạch mở rộng thêm chi nhánh hay không?",
        content:
          "Chúng tôi đang xem xét mở rộng và phát triển thêm các chi nhánh để tiếp cận nhiều khách hàng hơn và mở rộng thương hiệu của chúng tôi.",
      },
      {
        id: "item5_3",
        name: "Các kế hoạch đầu tư hiện tại của quán như thế nào để cải thiện hoạt động kinh doanh?",
        content:
          "Hiện nay, chúng tôi đang đầu tư vào việc nâng cấp hệ thống công nghệ, cải thiện quy trình phục vụ và đào tạo nhân viên để tăng cường trải nghiệm của khách hàng.",
      },
      {
        id: "item5_4",
        name: "Quán cà phê có dự định hợp tác với các đối tác đầu tư nào để phát triển không gian kinh doanh không?",
        content:
          "Chúng tôi đang trong quá trình thảo luận và xem xét các cơ hội hợp tác với các đối tác đầu tư để mở rộng hoạt động kinh doanh và cải thiện dịch vụ.",
      },
      {
        id: "item5_5",
        name: "Quán cà phê có chiến lược gì để thu hút đầu tư và phát triển thương hiệu không?",
        content:
          "Chúng tôi đang phát triển chiến lược marketing và truyền thông để thu hút đầu tư và nâng cao nhận thức thương hiệu của quán trên thị trường.",
      },
    ],
  },
];

const Support = () => {
  const [searchHelp, setSearchHelp] = useState();
  const [services, setServices] = useState([]);
  const [isHelpPage, setIsHelpPage] = useState(true);
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedOptionValue, setSelectedOptionValue] = useState("option1");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const isMobile = useMediaQuery("(max-width:1440px)");
  const handleSearch = (event) => {
    setServiceSearch(event.target.value);
    setServices(
      allServices.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    if (serviceSearch === "") setSearchHelp(null);
    else {
      setSearchHelp(
        options?.filter((items, id) => {
          return items?.list[id].name
            ?.toLowerCase()
            .includes(serviceSearch?.toLowerCase());
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
  return (
    <Box sx={{ ...styles.fontSize13, textAlign: "justify" }}>
      {isMobile ? (
        <Box>
          <Logotop />
          <Navbardesktop />
          <Box sx={{ pt: "180px" }}></Box>
          <Box>
            <Box
              sx={{
                textAlign: "center",
                color: "white",
                padding: "0px 20px",
                background: "rgba(255, 255, 255)",
              }}
            >
              <Box
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  width: "max-content",
                  display: "inline-block",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#dad8d4",
                  borderRadius: "16px",
                  color: "black",
                  p: "5px 10px",
                }}
              >
                Liên hệ chúng tôi
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  color: "black",
                  textAlign: "center",
                  p: "16px 0",
                }}
              >
                Dịch vụ khách hàng
              </Box>
              <Box sx={{ pt: "25px" }}>
                {searchHelp && (
                  <Box>
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
                          color: "black",
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
                      fontSize: "24px",
                      width: "100%",
                      ...styles.backgroundColor.mauTrang,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      ".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline,&.MuiTextField-root":
                        {
                          borderRadius: "8px",
                        },
                      ".MuiInputBase-root": {
                        paddingRight: "0px",
                        marginRight: 0,
                      },
                      ".MuiInputBase-input": {
                        p: "22px 0px",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "black",
                      },
                      "& .css-14bqts3": {
                        color: "black",
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
              <Box
                sx={{
                  ...styles.centerFlex,
                  pt: "30px",
                }}
              >
                <Box sx={{ fontSize: "14px", color: "black" }}>Tìm kiếm:</Box>
                <Box
                  onClick={(e) => setServiceSearch(e.target.innerText)}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    p: "4px 16px",
                    ...styles.backgroundColor.xamdad8d4,
                    border: 0,
                    borderRadius: "18px",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  Công việc đang tuyển
                </Box>
                <Box
                  onClick={(e) => setServiceSearch(e.target.innerText)}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    p: "4px 16px",
                    ...styles.backgroundColor.xamdad8d4,
                    border: 0,
                    borderRadius: "18px",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Phúc lợi
                </Box>
                <Box
                  onClick={(e) => {
                    setServiceSearch(e.target.innerText);
                  }}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    p: "4px 16px",
                    ...styles.backgroundColor.xamdad8d4,
                    border: 0,
                    borderRadius: "18px",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Nộp hồ sơ
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: "20px" }}>
            <Box
              sx={{
                pt: "40px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  background: "#dad8d4",
                  mb: "10px",
                }}
              >
                <Box
                  sx={{ pb: "64px", display: "flex", justifyContent: "Center" }}
                >
                  <MessageNenMauXanh />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Nhắn tin với đội ngũ tư vấn
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Nói chuyện với chúng tôi
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  www.thethanhcoffee.com/helpline
                </Box>
              </Box>
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  background: "#dad8d4",
                  mb: "10px",
                }}
              >
                <Box
                  sx={{ pb: "64px", display: "flex", justifyContent: "Center" }}
                >
                  <GpsIcon />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Nhắn tin với đội ngũ tư vấn
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Nói chuyện với chúng tôi
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  www.thethanhcoffee.com/helpline
                </Box>
              </Box>
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  background: "#dad8d4",
                  mb: "10px",
                }}
              >
                <Box
                  sx={{ pb: "64px", display: "flex", justifyContent: "Center" }}
                >
                  <PhoneIcon />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Nhắn tin với đội ngũ tư vấn
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Nói chuyện với chúng tôi
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  www.thethanhcoffee.com/helpline
                </Box>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", p: "96px 20px" }}>
              <Box
                sx={{
                  fontSize: "14px",
                  display: "inline-block",
                  p: "4px 12px",
                }}
              >
                Liên hệ với chúng tôi
              </Box>
              <Box sx={{ fontSize: 36, fontWeight: "600", pt: "16px" }}>
                Các địa điểm của chúng tôi
              </Box>
              <Box
                sx={{
                  fontSize: 20,
                  color: "#747474",
                  lineHeight: "30px",
                  pt: "20px",
                }}
              >
                Hãy đến thăm đội ngũ thân thiện tại một trong các văn phòng của
                chúng tôi.
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "20px",
                }}
              >
                15 Phạm Hùng, Mỹ Đình, Hà Nội
              </Box>
              <Box>
                <iframe
                  title="google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.098512597329!2d105.77847852663537!3d21.028743916193832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b31b463e4b%3A0xf699daba5fc6b129!2zMTUgUGjhuqFtIEjDuW5nLCBN4bu5IMSQw6xuaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1715759238744!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: "1px solid black" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
            <Box sx={{ pt: "40px" }}>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "20px",
                }}
              >
                147 Đội Cấn, Ba Đình, Hà Nội
              </Box>
              <Box>
                <iframe
                  title="google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.957811268983!2d105.81281303852109!3d21.036061895153793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab131c59b603%3A0x2f4e9c54761b0bc6!2zTmcuIDI2NiDEkOG7mWkgQ-G6pW4vMTQ3IFAuIMSQ4buZaSBD4bqlbiwgVOG7lSAzMCwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719765002145!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: "1px solid black" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
            <Box
              sx={{
                pt: "96px",
                pr: "20px",
                pl: "20px",
              }}
            >
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <GpsIcons />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Văn Phòng
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Thứ 2 - Thứ 6, 9 giờ sáng - 5 giờ chiều
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  15 Phạm Hùng, Mỹ Đình, Hà Nội
                </Box>
              </Box>
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <GpsIcons />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>Cửa Hàng</Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Thứ 2 - Thứ 6, 9 giờ sáng - 5 giờ chiều
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  147 Đội Cấn, Ba Đình, Hà Nội
                </Box>
              </Box>
            </Box>
          </Box>
          <FooterDesktop />
        </Box>
      ) : (
        <Box>
          <Logotop />
          <Navbardesktop />
          <Box sx={{ pt: "145px" }}></Box>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              src={moitruonglamviec}
              alt="anh coffee"
              style={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "black",
                opacity: "0.4",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translate(0, -50%)",
                left: 0,
                right: 0,
                textAlign: "center",
                color: "white",
                padding: "0px 60px",
                background: "rgba(255, 255, 255, 0.6)",
                m: "0px 216px",
              }}
            >
              <Box
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  p: "4px 12px",
                  width: "max-content",
                  display: "inline-block",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#dad8d4",
                  borderRadius: "16px",
                  color: "black",
                  "@media (max-width:900px)": {
                    fontSize: "35px",
                  },
                  mt: "24px",
                }}
              >
                Liên hệ chúng tôi
              </Box>
              <Box
                sx={{
                  fontSize: "36px",
                  color: "black",
                  textAlign: "center",
                  p: "16px 0",
                }}
              >
                Dịch vụ khách hàng
              </Box>
              <Box sx={{ pt: "25px", position: "relative" }}>
                {searchHelp && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 85,
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
                          color: "black",
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
                      fontSize: "24px",
                      width: "100%",
                      ...styles.backgroundColor.mauTrang,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      ".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline,&.MuiTextField-root":
                        {
                          borderRadius: "8px",
                          border: "none",
                        },
                      ".MuiInputBase-root": {
                        paddingRight: "0px",
                        marginRight: 0,
                      },
                      ".MuiInputBase-input": {
                        p: "22px 0px",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "black",
                      },
                      "& .css-14bqts3": {
                        color: "black",
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
              <Box
                sx={{
                  ...styles.centerFlex,
                  pt: "30px",
                  flexWrap: "wrap",
                  justifyContent: "left",
                  columnGap: "20px",
                  rowGap: "8px",
                  mb: "24px",
                }}
              >
                <Box sx={{ color: "#FFFFFF", fontSize: "20px" }}>Tìm kiếm:</Box>
                <Box
                  onClick={(e) => setServiceSearch(e.target.innerText)}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    p: "4px 16px",
                    ...styles.backgroundColor.xamdad8d4,
                    border: 0,
                    borderRadius: "18px",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  Công việc đang tuyển
                </Box>
                <Box
                  onClick={(e) => setServiceSearch(e.target.innerText)}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    p: "4px 16px",
                    ...styles.backgroundColor.xamdad8d4,
                    border: 0,
                    borderRadius: "18px",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Phúc lợi
                </Box>
                <Box
                  onClick={(e) => {
                    setServiceSearch(e.target.innerText);
                  }}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    p: "4px 16px",
                    ...styles.backgroundColor.xamdad8d4,
                    border: 0,
                    borderRadius: "18px",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Nộp hồ sơ
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: "96px 140px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "96px",
              }}
            >
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  background: "#dad8d4",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <MessageNenMauXanh />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Nhắn tin với đội ngũ tư vấn
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Nói chuyện với chúng tôi
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  www.thethanhcoffee.com/helpline
                </Box>
              </Box>
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  background: "#dad8d4",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <GpsIcon />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Nhắn tin với đội ngũ tư vấn
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Nói chuyện với chúng tôi
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  www.thethanhcoffee.com/helpline
                </Box>
              </Box>
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  background: "#dad8d4",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <PhoneIcon
                    styles={{ justifyContent: "center", display: "flex" }}
                  />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Nhắn tin với đội ngũ tư vấn
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Nói chuyện với chúng tôi
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  www.thethanhcoffee.com/helpline
                </Box>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", p: "96px 0" }}>
              <Box
                sx={{
                  fontSize: "14px",

                  display: "inline-block",
                  p: "4px 12px",
                }}
              >
                Liên hệ với chúng tôi
              </Box>
              <Box sx={{ fontSize: 36, fontWeight: "600", pt: "16px" }}>
                Các địa điểm của chúng tôi
              </Box>
              <Box
                sx={{
                  fontSize: 20,
                  color: "#747474",
                  lineHeight: "30px",
                  pt: "20px",
                }}
              >
                Hãy đến thăm đội ngũ thân thiện tại một trong các văn phòng của
                chúng tôi.
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "20px",
                }}
              >
                15 Phạm Hùng, Mỹ Đình, Hà Nội
              </Box>
              <Box>
                <iframe
                  title="google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.098512597329!2d105.77847852663537!3d21.028743916193832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b31b463e4b%3A0xf699daba5fc6b129!2zMTUgUGjhuqFtIEjDuW5nLCBN4bu5IMSQw6xuaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1715759238744!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: "1px solid black" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
            <Box sx={{ pt: "40px" }}>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "20px",
                }}
              >
                147 Đội Cấn, Ba Đình, Hà Nội
              </Box>
              <Box>
                <iframe
                  title="google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.957811268983!2d105.81281303852109!3d21.036061895153793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab131c59b603%3A0x2f4e9c54761b0bc6!2zTmcuIDI2NiDEkOG7mWkgQ-G6pW4vMTQ3IFAuIMSQ4buZaSBD4bqlbiwgVOG7lSAzMCwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719765002145!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: "1px solid black" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "96px",
                pr: "100px",
                pl: "100px",
              }}
            >
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <GpsIcons />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Văn Phòng
                </Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Thứ 2 - Thứ 6, 9 giờ sáng - 5 giờ chiều
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  15 Phạm Hùng, Mỹ Đình, Hà Nội
                </Box>
              </Box>
              <Box
                sx={{
                  p: "24px 24px 48px 24px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ pb: "64px" }}>
                  <GpsIcons />
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "600" }}>Cửa hàng</Box>
                <Box
                  sx={{
                    fontSize: "16px",

                    pt: "8px",
                    pb: "20px",
                  }}
                >
                  Thứ 2 - Thứ 6, 9 giờ sáng - 5 giờ chiều
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600" }}>
                  147 Đội Cấn, Ba Đình, Hà Nội
                </Box>
              </Box>
            </Box>
          </Box>
          <FooterDesktop />
        </Box>
      )}
    </Box>
  );
};

export default Support;
