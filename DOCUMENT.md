# Hướng dẫn chỉnh sửa nội dung trang web
## Lưu ý khi sử dụng code
TUYỆT ĐỐI KHÔNG xoá file package.json trong quá trình làm việc nếu tiếp tục muốn code hoạt động đúng cách

## Các trang web có thể chỉnh sửa nội dung trên trang quản lý

 - Trang chủ
 - Nguồn nguyên liệu
 - Môi trường
 - Đồ uống
 - Văn hoá tuân thủ
 - Tìm hiểu thêm về The Thanh Coffee giao hàng
 - Trách nhiệm
 - Môi trường làm việc
 - Trợ giúp mua sắm 

 ## Đối với các trang web khác
 ### Hướng dẫn cơ bản
 Dịch tên trang web ra tiếng anh, sau đó vào file tương ứng với đuôi .jsx trong thư mục src/pages và sửa.
 Ví dụ: Muốn sửa trang nhiệm vụ giá trị , ta có: nhiệm vụ và giá trị tiếng Anh là mission and value => vào file mang tên: MissionAndValue.jsx và chỉnh sửa, trong đó là cấu trúc HTML của trang, bạn chỉ cần tìm và chỉnh sửa mục nội dung trong các file ấy.
 ### Danh sách trang và file code trang web / đoạn code chứa nội dung tương ứng
 
 ***Note: Toàn bộ source code của các trang đều nằm ở thư mục src/, các thư mục được phân tách bởi dấu "/", ví dụ: Trang chủ là có source nằm ở pages/Home/Desktop.jsx -> file Desktop.jsx trong thư mục Home trong thư mục pages*

 - Trang không khả dụng: pages/InDevelopmentPage/Desktop.jsx
 - Trang chủ: pages/Home/Desktop.jsx
 - Các trang giới thiệu sản phẩm:
	 - Trang đồ uống( Trang ngoài ): pages/MenuDrinkList/Desktop.jsx
	 - Trang đồ uống ( Trang đã phân mục ) : pages/MenuDrink/Desktop.jsx
	 - Trang chi tiết sản phẩm : pages/DetailFood/Desktop.jsx
	 - Trang yêu thích: pages/FavoriteItemList/Desktop.jsx, Dành cho mobile:  pages/FavoriteItemList/Mobile.jsx
	 - Chỉnh sửa cách danh sách sản phẩm hiển thị: component/DrinkList.jsx
	 - Chỉnh sửa cách các sản phẩm đơn lẻ hiển thị: component/DrinksItems.jsx
	 - Chỉnh sửa cách hiển thị của menu: component/MenuSidebar.jsx
	 - Chỉnh sửa cách hiển thị của thanh điều hướng của trang: component/DetailFood/ResponsiveBox/NavigationBarDesktop.jsx hoặc component/DetailFood/ResponsiveBox/NavigationBarMobile.jsx	
 - Trang dịch vụ khách hàng: pages/CustomerService/Desktop.jsx, 
	 - Chỉnh sửa các dịch vụ: content/customerService.js 
 - Trang liên hệ hỗ trợ sản phẩm: pages/ContactThanhCoffee/Desktop.jsx
 - Trang nhà cung cấp: pages/InDevelopmentPage/Desktop.jsx
 - Trang tin sản phẩm: pages/NewsArticles/Desktop.jsx
 - Trang  Sứ mệnh, lời hứa và giá trị: pages/AboutUs/Desktop.jsx
	 - Giá trị của chúng tôi: content/ourValueContents.js
 - Trang trung tâm tin tức: pages/NewsCenter/Desktop.jsx
 - Trang hỗ trợ chủ nhà: pages/RentingHelpCenter/Desktop.jsx
 - Trang menu đề xuất: pages/MenuOrder/Desktop.jsx
 - Trang thanh toán: pages/PayQR/Desktop.jsx
 - Trang lưu ý về sản phẩm: pages/NoteProduce/Desktop.jsx
 - Trang tìm kiếm cửa hàng: pages/FindShop/Desktop.jsx
 - Các trang cửa hàng: pages/ShopOpen/Desktop.jsx
 - Trang nội dung tin tức: pages/News/Desktop.jsx
 - Trang liên hệ đầu tư: pages/ContactInvestor/Desktop.jsx
 - Trang nhượng quyền: pages/Franchises/Desktop.jsx
 - Trang giá trị và văn hoá: pages/CodeBusinessEthics.jsx
 - Trang thông điệp gửi gắm: pages/Message.jsx
 - Trang nhiệm vụ và giá trị: pages/Missionandvalue.jsx
 - Trang bảo mật dữ liệu: pages/Datasecurity.jsx
 - Trang sở hữu trí tuệ: pages/Intellectualproperty.jsx
 - Trang bảo vệ tài sản: pages/AssetProtection.jsx
 - Trang hồ sơ kinh doanh: pages/BusinessProfile.jsx
 - Trang điều tra: pages/Investigation.jsx
 - Trang giá trị chúng tôi coi trọng: pages/Seriously.jsx
 - Trang câu hỏi thường gặp: pages/FrequentQuestions.jsx
 - Trang tuân thủ pháp luật: pages/ComplianceLaw.jsx
 - Trang điều kiện chính sách: pages/PolicyConditions.jsx
 - Trang chi tiết chính sách: pages/PolicyContent.jsx
 - Trang chi tiết điều khoản: pages/TermContent.jsx
 - Trang điều khoản sử dụng: pages/Termofuse.jsx
 - Trang hỗ trợ: pages/Support.jsx
 - Trang tham gia the thanh: pages/Recruitment.jsx
 - Các trang công việc: 
	 - Công việc tại cửa hàng: pages/JobInShop.jsx
	 - Công việc tại văn phòng: pages/JobInOffice.jsx
	 - Công việc bán thời gian: pages/JobParttime.jsx
 - Trang sản xuất và phân phối: pages/ProductionandDistribution.jsx
 - Trang chi tiết công việc: pages/RecruitmentDetail.jsx
 - Trang form tham khảo từ bạn bè: pages/RecruitmentDetailForm2.jsx
 - Trang apply thành công: pages/ApplySuccess.jsx
 - Trang phong cách làm việc: pages/WorkStyle.jsx
 - Trang lợi ích và đặc quyền: pages/BenefitsandPrivileges.jsx
 - Trang điều khoản và điêu kiện: pages/TermOfService/Desktop.jsx
 - Trang cam kết về hoạt động: pages/CommitmentToAct/Desktop.jsx
 - Trang điền thông tin nhượng quyền: pages/FranchiseForm.jsx
	 - Chỉnh sửa các form: Vào component/FranchisForms/Form tương ứng với form muốn chỉnh sửa
 - Trang địa điểm nhượng quyền: pages/Address.jsx
 - Trang câu chuyện của chúng tôi mục nhượng quyền: pages/CauChuyenCuaChungToi.jsx
 - Trang phần thưởng và ưu đãi mục nhượng quyền: pages/PhanThuongVaUuDai.jsx
 - Trang câu hỏi về phần thưởng ưu đãi: pages/CauHoiVePhanThuongVaUuDai.jsx
 - Trang the thanh rewards mục nhượng quyền: pages/TheThanhRewards.jsx
 - Trang dịch vụ ăn uống mục nhượng quyền: pages/DichVuAnUong.jsx
 - Trang sở thích mục nhượng quyền: pages/SoThich.jsx
 - Trang chứng chỉ: pages/Ceritficate.jsx
	 - Nội dung nằm ở : content/certificate.js


## Giai đoạn hậu kỳ
Lưu ý: Sau khi chỉnh sửa thì BUỘC PHẢI SAVE FILE để toàn bộ chỉnh sửa được apply
### Kiểm tra demo
Để kiểm tra demo khi có code, để kiểm tra trang web hiển thị như thế nào, chỉ đơn giản là chạy ở **dev server ( localhost )**
#### Các bước để kiểm tra demo
*Chú ý: Đối với tất cả các mục cài đặt đều chọn phiên bản phù hợp với hệ điều hành được sử dụng*
 - Tiền xử lý:
	 - **Các phụ thuộc cần cài đặt và link hướng dẫn cài đặt**
		 - [Git bash](https://git-scm.com/downloads)
		 - [Node.js](https://nodejs.org/en)
		 - Yarn( Cài đặt theo hướng dẫn bên dưới với điều kiện đã cài đặt Node.js tại bước 2 )
		 - Một IDE có thể sử dụng để viết mã Javascript ( Lời khuyên từ dev: [Visual Studio Code](https://code.visualstudio.com/download))
	 - **Các bước lấy về code**
		 - Tạo tài khoản gitlab
		 - Liên hệ admin để admin thêm vào nhóm sở hữu code
		 - Chạy lệnh `git clone https://gitlab.com/saint5715514/landing-page.git`
	 - **Các bước cài đặt đặt các gói phụ thuộc của code**
		 - Mở thư mục code ( thư mục cha có chứa file package.json ) với IDE đã chọn
		 - Mở cửa sổ dòng lệnh ( terminal ) trong IDE đã cài đặt ( Với Visual Studio code sử dụng ctrl + `)
		 - Cài đặt các gói phụ thuộc đã có trong code với lệnh trong cửa sổ dòng lệnh `yarn`
 - **Chạy localhost**
		  - Mở thư mục code ( thư mục cha có chứa file package.json ) với IDE đã chọn
		 - Mở cửa sổ dòng lệnh ( terminal ) trong IDE đã cài đặt ( Với Visual Studio code sử dụng ctrl + `)
		 - Sau khi đã cài đặt các gói phụ thuộc của code, chạy lệnh `yarn start` để khởi động code trên máy
		 - Đợi màn hình Terminal hiển thị như hình ảnh dưới ![Hình ảnh thành công chạy code](https://quanlychung.thanhcoffee.com/img/Screenshot%202024-10-10%20195346.png)
		 - Demo sẽ được hiển thị tại địa chỉ [http://localhost:3000](http://localhost:3000)
 - Sau khi hoàn thiện code và muốn đẩy lên trên website, thực hiện build theo các bước sau:
	 - Mở thư mục code ( thư mục cha có chứa file package.json ) với IDE đã chọn
	 - Mở cửa sổ dòng lệnh ( terminal ) trong IDE đã cài đặt ( Với Visual Studio code sử dụng ctrl + `)
	 - Sử dụng lệnh `yarn build` để biên dịch code thành code trong môi trường sản phẩm ( build code )
	 - Sau khi build thành công, cửa sổ lệnh sẽ hiển thị như hình bên dưới
	 ![Hình ảnh build thành công](https://quanlychung.thanhcoffee.com/img/Screenshot%202024-10-10%20200243.png)
	 - Nén thư mục build trong source code thành file .zip ( Không sử dụng thư mục build toàn cục, thư mục bên trong sẽ trông giống với hình bên dưới )
	 ![Hình ảnh file build.zip](https://quanlychung.thanhcoffee.com/img/Screenshot%202024-10-10%20200425.png)
	- Xoá toàn bộ mọi thứ tại thư mục `thethanhcoffee.com` trong File Manager trong cPanel ( Dịch vụ hosting ) TRỪ THƯ MỤC `uploads`
	- Upload file build.zip vào thư mục `thethanhcoffee.com` trong File Manager trong cPanel ( Dịch vụ hosting ) đã được cung cấp
	- Cài đặt file unzipper.php tại đường link này: https://github.com/ndeet/unzipper/blob/master/unzipper.php
	- Tải lên file unzipper.php vào thư mục `thethanhcoffee.com` trong File Manager trong cPanel ( Dịch vụ hosting ) đã được cung cấp
	- Truy cập vào đường link: https://thanhcoffee.com/unzipper.php
	- Ấn vào nút unzip Archive hiển thị giống hình dưới
	![enter image description here](https://quanlychung.thanhcoffee.com/img/Screenshot%202024-10-10%20201005.png)
	- Đợi unzipper chạy, khi unzipper thành công sẽ hiển thị thông báo như hình dưới
	![enter image description here](https://quanlychung.thanhcoffee.com/img/Screenshot%202024-10-10%20201400.png)
	- Sau khi unzipper thành công, xoá build.zip và unzipper.php đã upload lên nhằm bảo mật thông tin
- **Lưu trữ source code lên gitlab**
	- **Tiền xử lý :** Đăng nhập tài khoản gitlab đã đăng ký vào terminal với lệnh `git config --global --user.name "username đã đăng ký"` và `git config --global --user.email "email đã đăng ký"`
	- Mở source code bằng IDE đã được cài đặt
	- Mở terminal ( Cửa sổ dòng lệnh )
	- Chuyển sang nhánh của mình: 
		- *Lưu ý: Nếu đang ở nhánh khác mà muốn chuyển qua và đẩy code lên thì backup lại phần code đã làm rồi mới chạy lệnh*
		-  `git checkout [tên nhánh]`
	- Nếu như chưa có nhánh của riêng mình, chạy lệnh sau để tạo và chuyển sang nhánh mới: `git checkout -b [tên nhánh]`
	- Chạy lần lượt 3 lệnh sau
		- ``` git add .```
		- `git commit -m "trong ngoặc này thì ghi rõ mình đã làm gì trong code"`
		- `git push -u origin [tên nhánh]`
	- Sau khi chạy thành công, màn hình sẽ hiển thị như hình bên dưới:
	- ![enter image description here](https://thanhcoffee.com/Screenshot%202024-10-10%20202423.png)
- **Hướng dẫn cài đặt yarn**
	- Điều kiện:  Đã cài đặt thành công node.js và không báo lỗi don't recognize khi chạy lệnh `node -v`
	- Mở cửa sổ dòng lệnh ( terminal )
	- Chạy lệnh `npm install -g yarn` để cài đặt yarn