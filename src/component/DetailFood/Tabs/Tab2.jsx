import { Box } from "@mui/material";
import React from "react";

const Tab2 = ({ introductions, nutritions }) => {
	return (
		<Box>
			{introductions?.map((info) => (
				<Box
					sx={{
						mb: "40px",
					}}
					key={info.id}
				>
					<strong>
						<h1
							style={{ fontSize: "16px" }}
							className="tw-pb-5"
						>
							{info.title}
						</h1>
					</strong>
					<p
						style={{ fontSize: "16px" }}
						dangerouslySetInnerHTML={{
							__html: info.details,
						}}
					></p>
				</Box>
			))}
			<Box sx={{ pb: "20px", mt: "-40px" }}>
				{nutritions?.map((part) => (
					<Box
						sx={{
							fontSize: "16px",
							display: "flex",
							justifyContent: "space-between",
							p: "16px 0px",
							borderBottom: "1px solid black",
							fontWeight: "700",
						}}
						key={part?.id}
					>
						<Box>{part?.name}</Box>
						<Box>{part?.quantity}</Box>
					</Box>
				))}
			</Box>
			<Box
				sx={{
					color: "#575757",
				}}
			>
				<Box
					sx={{
						fontSize: "12px",
					}}
				>
					<ul
						style={{
							paddingLeft: 16,
							margin: 0,
						}}
					>
						<li>Mỗi dữ liệu được cập nhật theo thời gian, vì vậy vui lòng kiểm tra ngày cập nhật gần nhất.</li>
						<li>Theo nguyên tắc chung các giá trị được tính theo mỗi khẩu phần.</li>
						<li>Các tính toán dựa trên công thức và giá trị tiêu chuẩn được phẩn tích bởi tổ chức thử nghiệm ( đối với một số nguyên liệu thô, giá trị được tính toán dữ trên Bảng thành phần tiêu chuẩn thực phẩm Việt Nam, v.v..) Nó có thể khác với sản phẩm thực tế</li>
						<li>Nếu số lượng nhỏ, nó sẽ được hiển thị là "0", và nếu không có dữ liệu, nó sẽ được hiển thị là "-"</li>
						<li>Nếu rượu được sử dụng như một phần của các thành phần, nó sẽ được đánh dấu là "có chứa cồn" và giá trị phân tích tiêu chuẩn của hàm lượng cồn trong mỗi khẩu phần cũng được liệt kê.</li>
						<li>Xin lưu ý rằng thông tin sẽ khác nếu bạn tự thêm đường, sữa v.v.</li>
						<li>Sữa đậu nành được sử dụng tại Thanh Coffee là sữa đậu nành chế biến sẵn</li>
						<li>Loại ít béo là sự pha trộn giữa sữa và sữa không béo</li>
					</ul>
				</Box>
			</Box>
		</Box>
	);
};

export default Tab2;
