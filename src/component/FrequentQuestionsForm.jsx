import React, { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { MobileContext } from "../store/context";
import { styles } from "../styles";
import AddIcon from "./svg/icon/AddIcon";
const FrequentQuestionsForm = ({ question }) => {
	const { isMobile } = useContext(MobileContext);
	return (
		<Box sx={{ ...styles.fontSize13 }}>
			{isMobile ? (
				<Accordion disableGutters={true}>
					<AccordionSummary
						expandIcon={<AddIcon />}
						aria-controls="panel1a-content"
					>
						<Box sx={{ fontSize: "18px", fontFamily: "Inter" }}>{question.title}</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
							<Box
								sx={{
									fontSize: "18px",
									fontFamily: "Inter",
									color: "#747474",
								}}
								dangerouslySetInnerHTML={{ __html: question.answer }}
							></Box>
						</Box>
					</AccordionDetails>
				</Accordion>
			) : (
				<Accordion disableGutters={true}>
					<AccordionSummary
						expandIcon={
							<Box>
								<AddIcon
									width={24}
									height={24}
								/>
							</Box>
						}
						aria-controls="panel1a-content"
						sx={{ mb: "30px" }}
					>
						<Box sx={{ fontSize: "18px", fontWeight: "600" }}>{question.title}</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ display: "flex" }}>
							<Box
								sx={{
									fontSize: "16px",
									color: "#747474",
									mb: "15px",
									lineHeight: "24px",
								}}
								dangerouslySetInnerHTML={{ __html: question.answer }}
							></Box>
						</Box>
					</AccordionDetails>
				</Accordion>
			)}
		</Box>
	);
};

export default FrequentQuestionsForm;
