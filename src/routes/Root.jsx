import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MenuDrink from "../pages/MenuDrink";
import MenuDrinkList from "../pages/MenuDrinkList";
import FavoriteItemList from "../pages/FavoriteItemList";
import Delivery from "../pages/Delivery";
import CustomerService from "../pages/CustomerService";
import ContactThanhCoffee from "../pages/ContactThanhCoffee";
// import CustomerServiceAnswerThieuSao from "../component/CustomerServiceAnswerThieuSao";
import DetailFood from "../pages/DetailFood";
import MenuOrder from "../pages/DetailFood/MenuOrder";
import PayQR from "../pages/PayQR";
import NoteProduce from "../pages/NoteProduce";
import FindShop from "../pages/FindShop";
import ShopOpen from "../pages/ShopOpen";
import News from "../pages/News";
import EnviromentalFriendly from "../pages/EnviromentalFriendly";
import SupplierStandard from "../pages/SupplierStandard";
import JoinTheThanh from "../pages/JoinTheThanh";
import InterestedPosition from "../pages/InterestedPosition";
import NewsArticles from "../pages/NewsArticles";
import NewsCenter from "../pages/NewsCenter";
import RentingHelpCenter from "../pages/RentingHelpCenter";
import EFTransactionForRenter from "../pages/EFTransactionForRenter";
import CompanyFile from "../pages/CompanyFile";
import RawMaterialSource from "../pages/RawMaterialSource";
import AboutUs from "../pages/AboutUs/";
import DeleveryOption from "../pages/DeliveryOption";
import ContactNumber from "../pages/ContactNumber";
import ContactInvestor from "../pages/ContactInvestor";
import Franchies from "../pages/Franchies";
import CodeBusinessEthics from "../pages/CodeBusinessEthics";
import Message from "../pages/Message";
import Missionandvalue from "../pages/Missionandvalue";
import Workingenvironment from "../pages/Workingenvironment";
import Complianceculture from "../pages/Complianceculture";
import Responsibility from "../pages/Responsibility";
import Datasecurity from "../pages/Datasecurity";
import Intellectualproperty from "../pages/Intellectualproperty";
import AssetProtection from "../pages/AssetProtection";
import BusinessProfile from "../pages/BusinessProfile";
import Investigation from "../pages/Investigation";
import Seriously from "../pages/Seriously";
import FrequentQuestions from "../pages/FrequentQuestions";
import ComplianceLaw from "../pages/ComplianceLaw";
import Support from "../pages/Support";
import Recruitment from "../pages/Recruitment";
import JobInShop from "../pages/JobInShop";
import JobInOffice from "../pages/JobInOffice";
import ProductionandDistribution from "../pages/ProductionandDistribution";
import DeliveryQuestion from "../pages/DeliveryOption/DeliveryQuestion";
import RecruitmentDetail from "../pages/RecruitmentDetail";
import FindOutMoreAboutDelivery from "../pages/FindOutMoreAboutDelivery";
import TermOfService from "../pages/TermOfService";
import RecruitmentDetailForm2 from "../pages/RecruitmentDetailForm2";
import ApplySuccess from "../pages/ApplySuccess";
import PolicyConditions from "../pages/PolicyConditions";
import Termsofuse from "../pages/Termsofuse";
import WorkStyle from "../pages/WorkStyle";
import CommitmentToAct from "../pages/CommitmentToAct";
import FranchiseForm from "../pages/FranchiseForm";
import TestUploadCV from "../api/test";
import JobParttime from "../pages/JobParttime";
import PolicyContent from "../pages/PolicyContent";
import TermContent from "../pages/TermContent";
import BenefitsandPrivileges from "../pages/BenefitandPrivileges/BenefitsandPrivileges";
import InDevelopmentPage from "../pages/InDevelopmentPage";
import Address from "../pages/Address";
import Product from "../pages/Device/ProductPage";
import CauChuyenCuaChungToi from "./../pages/CauChuyenCuaChungToi";
import PhanThuongVaUuDai from "./../pages/PhanThuongVaUuDai";
import CauHoiVePhanThuongVaUuDai from "./../pages/CauHoiPTUD";
import DichVuAnUong from "./../pages/DichVuAnUong";
import TheThanhRewards from "./../pages/TheThanhRewards";
import SoThich from "./../pages/SoThich";
import Certificate from "../pages/Certificate";
import OutsideMenu from "../pages/OutsideMenu";
const Root = () => {
	return (
		<Routes>
			<Route
				path="/*"
				element={<InDevelopmentPage />}
			/>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/do-uong"
				element={
					<MenuDrinkList
						title={"Đồ uống"}
						menuTitle={"Menu"}
						menuSubtitle={"Thực đơn nổi bật"}
						topicJsonPath={"menu/menu.json"}
						productRoute={"/san-pham"}
					/>
				}
			/>
			<Route
				path="/do-uong/:type"
				element={<MenuDrink />}
			/>
			{/* <Route
				path="/thiet-bi-nha-hang"
				element={<CateList />}
			/> */}
			<Route
				path="/san-pham/:id"
				element={<DetailFood />}
			/>
			<Route
				path="/thiet-bi/:id"
				element={<Product />}
			/>
			<Route
				path="/yeu-thich"
				element={<FavoriteItemList />}
			/>
			{/* <Route
				path="/van-chuyen-va-giao-hang"
				element={<Delivery />}
			/> */}
			<Route
				path="/dich-vu-khach-hang"
				element={<CustomerService />}
			/>
			<Route
				path="/lien-he-ho-tro-san-pham"
				element={<ContactThanhCoffee />}
			/>
			<Route
				path="/nha-cung-cap"
				element={<InDevelopmentPage />}
			/>
			{/* <Route
				path="/tuyen-dung"
				element={<JoinTheThanh />}
			/> */}
			{/* <Route path="/tim-cong-viec" element={<InterestedPosition />} /> */}
			<Route
				path="/tin-san-pham"
				element={<NewsArticles />}
			/>
			<Route
				path="/trung-tam-tin-tuc/:type"
				element={<NewsCenter />}
			/>
			<Route
				path="/ho-tro-chu-nha"
				element={<RentingHelpCenter />}
			/>
			<Route
				path="/trung-tam-ho-tro-chu-nha/chuyen-tien-dien-tu-eft"
				element={<EFTransactionForRenter />}
			/>
			{/* <Route
				path="/ho-so-cong-ty"
				element={<CompanyFile />}
			/> */}
			<Route
				path="/menu-de-xuat"
				element={<MenuOrder />}
			/>
			<Route
				path="/thanh-toan"
				element={<PayQR />}
			/>
			<Route
				path="/luu-y-ve-san-pham"
				element={<NoteProduce />}
			/>
			<Route
				path="/tim-kiem-cua-hang"
				element={<FindShop />}
			/>
			<Route
				path="/cua-hang/:id"
				element={<ShopOpen />}
			/>
			<Route
				path="/noi-dung-tin-tuc/:id"
				element={<News />}
			/>
			<Route
				path="/moi-truong"
				element={<EnviromentalFriendly />}
			/>
			<Route
				path="/nguon-nguyen-lieu"
				element={<RawMaterialSource />}
			/>
			<Route
				path="/menu"
				element={<OutsideMenu />}
			/>
			<Route
				path="/cong-ty-cua-chung-toi"
				element={<AboutUs />}
			/>
			<Route
				path="/tro-giup-mua-sam"
				element={<DeleveryOption />}
			/>
			<Route
				path="/tro-giup-mua-sam/cau-hoi-thuong-gap"
				element={<DeliveryQuestion />}
			/>
			<Route
				path="/lien-he-chung-toi"
				element={<ContactNumber />}
			/>
			<Route
				path="/lien-he-dau-tu"
				element={<ContactInvestor />}
			/>
			<Route
				path="/nhuong-quyen"
				element={<Franchies />}
			/>
			<Route
				path="/gia-tri-va-van-hoa"
				element={<CodeBusinessEthics />}
			/>
			<Route
				path="/thong-diep-gui-gam"
				element={<Message />}
			/>
			<Route
				path="/nhiem-vu-va-gia-tri"
				element={<Missionandvalue />}
			/>
			<Route
				path="/moi-truong-lam-viec"
				element={<Workingenvironment />}
			/>
			<Route
				path="/van-hoa-tuan-thu"
				element={<Complianceculture />}
			/>
			<Route
				path="/trach-nhiem"
				element={<Responsibility />}
			/>
			<Route
				path="/bao-mat-du-lieu"
				element={<Datasecurity />}
			/>
			<Route
				path="/so-huu-tri-tue"
				element={<Intellectualproperty />}
			/>
			<Route
				path="/bao-ve-tai-san"
				element={<AssetProtection />}
			/>
			<Route
				path="/ho-so-kinh-doanh"
				element={<BusinessProfile />}
			/>
			<Route
				path="/dieu-tra"
				element={<Investigation />}
			/>
			<Route
				path="/gia-tri-chung-toi-coi-trong"
				element={<Seriously />}
			/>
			<Route
				path="/cau-hoi-thuong-gap"
				element={<FrequentQuestions />}
			/>
			<Route
				path="/tuan-thu-phap-luat"
				element={<ComplianceLaw />}
			/>
			<Route
				path="/dieu-kien-chinh-sach"
				element={<PolicyConditions />}
			/>
			<Route
				path="/dieu-kien-chinh-sach/policies/:id"
				element={<PolicyContent />}
			/>
			<Route
				path="/dieu-kien-chinh-sach/terms/:id"
				element={<TermContent />}
			/>
			<Route
				path="/dieu-khoan-su-dung"
				element={<Termsofuse />}
			/>
			<Route
				path="/ho-tro"
				element={<Support />}
			/>
			<Route
				path="/tham-gia-the-thanh"
				element={<Recruitment />}
			/>
			<Route
				path="/cong-viec-tai-cua-hang"
				element={<JobInShop />}
			/>
			<Route
				path="/cong-viec-tai-van-phong"
				element={<JobInOffice />}
			/>
			<Route
				path="/cong-viec-ban-thoi-gian"
				element={<JobParttime />}
			/>
			<Route
				path="/san-xuat-va-phan-phoi"
				element={<ProductionandDistribution />}
			/>
			<Route
				path="/chi-tiet-cong-viec/:id"
				element={<RecruitmentDetail />}
			/>
			<Route
				path="/form-tham-khao-tu-ban-be"
				element={<RecruitmentDetailForm2 />}
			/>
			<Route
				path="/apply-thanh-cong"
				element={<ApplySuccess />}
			/>
			<Route
				path="/phong-cach-lam-viec"
				element={<WorkStyle />}
			/>
			<Route
				path="/loi-ich-va-dac-quyen"
				element={<BenefitsandPrivileges />}
			></Route>
			<Route
				path="/tro-giup-thanh-coffee-giao-hang"
				element={<FindOutMoreAboutDelivery />}
			/>
			<Route
				path="/dieu-khoan-va-dieu-kien"
				element={<TermOfService />}
			/>
			<Route
				path="/cam-ket-ve-hoat-dong"
				element={<CommitmentToAct />}
			/>
			<Route
				path="/nhuong-quyen/dien-thong-tin"
				element={<FranchiseForm />}
			/>
			<Route
				path="/test-upload"
				element={<TestUploadCV />}
			/>
			<Route
				path="/nhuong-quyen/dia-diem"
				element={<Address />}
			/>
			<Route
				path="/nhuong-quyen/cau-chuyen-cua-chung-toi"
				element={<CauChuyenCuaChungToi />}
			/>
			<Route
				path="/nhuong-quyen/phan-thuong-va-uu-dai"
				element={<PhanThuongVaUuDai />}
			/>
			<Route
				path="/nhuong-quyen/cau-hoi-ve-phan-thuong-va-uu-dai"
				element={<CauHoiVePhanThuongVaUuDai />}
			/>
			<Route
				path="/nhuong-quyen/the-thanh-rewards"
				element={<TheThanhRewards />}
			/>
			<Route
				path="/nhuong-quyen/dich-vu-an-uong"
				element={<DichVuAnUong />}
			/>
			<Route
				path="/nhuong-quyen/so-thich"
				element={<SoThich />}
			/>
			<Route
				path="chung-chi"
				element={<Certificate />}
			/>
		</Routes>
	);
};

export default Root;
