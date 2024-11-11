import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_MOBILE } from "../../styles";
import CacCauHoi from "../../component/CacCauHoi";
import { useQuestions } from "./../../hooks/useQuestions";

const FAQ = () => {
	const [questions] = useQuestions();
	return (
		<Box
			sx={{
				p: "30px 70px 72px",
				[RESPONSIVE_MOBILE]: {
					p: "20px 20px 20px 20px",
				},
			}}
		>
			<h1 className="lg:tw-text-34 sm:tw-text-2xl tw-font-bold tw-font-Inter tw-mb-3">Câu hỏi thường gặp</h1>
			<Box
				sx={{
					mx: "auto",
					"& .MuiButtonBase-root ": {
						padding: "24px",
					},
				}}
			>
				<CacCauHoi questions={questions} />
			</Box>
		</Box>
	);
};

export default FAQ;
