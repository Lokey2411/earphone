import React, { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import ArrowDown from "./svg/icon/ArrowDown";
import { MobileContext } from "../store/context/Mobile";
import { styles } from "../styles";
const CauHoiThuongGap = ({ question }) => {
	const { isMobile } = useContext(MobileContext);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			{isMobile ? (
				<Accordion disableGutters={true}>
					<AccordionSummary
						expandIcon={
							<Box
								sx={{
									"svg > path": { stroke: "black" },
								}}
							>
								<ArrowDown />
							</Box>
						}
						aria-controls="panel1a-content"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "10px",
							color: "black",
							width: "100%",
							padding: "24px",
							backgroundColor: "#D9D9D9",
							"&	.MuiAccordionSummary-content": { margin: 0 },
						}}
					>
						<Box sx={{ fontSize: "14px", fontFamily: "Inter" }}>{question.title}</Box>
					</AccordionSummary>
					<AccordionDetails sx={{ backgroundColor: "white", p: "24px 24px" }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "5px",
							}}
						>
							<Box
								sx={{
									color: "black !important",
									"& *": {
										fontSize: "14px !important",
										fontFamily: "Inter !important",
										color: "black !important",
									},
								}}
								dangerouslySetInnerHTML={{
									__html: question.answer,
								}}
							></Box>
						</Box>
					</AccordionDetails>
				</Accordion>
			) : (
				<Accordion
					disableGutters={true}
					sx={{
						...styles.backgroundColor.mauTra,
						"&.MuiAccordion-root": { boxShadow: "none" },
						color: "black",
					}}
				>
					<AccordionSummary
						expandIcon={
							<Box
								sx={{
									"svg > path": { stroke: "black" },
									svg: { width: "37px", height: "17px" },
								}}
							>
								<ArrowDown />
							</Box>
						}
						aria-controls="panel1a-content"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "10px",
							width: "100%",
							padding: "30px 50px",
							...styles.backgroundColor.xamD9,
							"& .MuiAccordionSummary-content": { margin: 0 },
						}}
					>
						<Box sx={{ fontSize: "24px" }}>{question.title}</Box>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							...styles.backgroundColor.xamE4E3E1,
							p: "30px 50px",
							mt: "10px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "5px",
							}}
						>
							<Box
								sx={{
									span: {
										fontSize: "32px !important",
										fontFamily: "Inter !important",
									},
									li: {
										fontSize: "32px !important",
										fontFamily: "Inter !important",
									},
									ul: {
										fontSize: "32px !important",
										fontFamily: "Inter !important",
										pl: "40px",
									},
									p: {
										fontSize: "32px !important",
										fontFamily: "Inter !important",
									},
								}}
								dangerouslySetInnerHTML={{
									__html: question.answer,
								}}
							></Box>
						</Box>
					</AccordionDetails>
				</Accordion>
			)}
		</Box>
	);
};

export default CauHoiThuongGap;
