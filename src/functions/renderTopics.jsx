import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { RESPONSIVE_TABLET, styles } from "../styles";
import ArrowDownBlack from "../component/svg/icon/ArrowDownBlack";

const renderSubTopics = (sub) => {
	return sub.subTopics && sub.subTopics.length > 0 ? (
		renderTopics(sub)
	) : (
		<AccordionDetails
			sx={{
				...styles.backgroundColor.mauTra,
				p: "10px 75.6px",
				borderBottom: "solid black 1px",
				"&.MuiAccordionDetails-root": { border: 0 },
				"&.MuiAccordionDetails-root:last-child": {
					borderBottom: "solid black 1px",
				},
				textAlign: "left",
				[RESPONSIVE_TABLET]: {
					px: "20px",
				},
			}}
			key={sub?.id}
		>
			<Box
				sx={{
					...styles.fontSize13,
					// height: "40px",
					...styles.centerFlex,
					fontSize: "14px",
				}}
			>
				<a href={sub?.link}>
					<Box>{sub?.title}</Box>
				</a>
			</Box>
			{sub?.subTopics && sub?.subTopics.length > 0 && sub?.subTopics.map(renderSubTopics)}
		</AccordionDetails>
	);
};

const renderTopics = (topic) => {
	return (
		<Box
			sx={{ position: "relative" }}
			key={topic?.id}
		>
			<Accordion
				sx={{
					textAlign: "justify",
					"&.MuiAccordion-root": { boxShadow: "0" },
				}}
				disableGutters={true}
			>
				<AccordionSummary
					expandIcon={<ArrowDownBlack />}
					aria-controls="panel1a-content"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "10px",
						color: "black",
						width: "100%",
						p: "0px 18px 0px 80px",
						backgroundColor: "#F3F1EC",
						borderBottom: "solid black 1px",
						"&	.MuiAccordionSummary-content": {
							margin: 0,
						},
						[RESPONSIVE_TABLET]: {
							px: "20px",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						{topic.link && topic.link !== "#" ? (
							<a href={topic?.link}>
								<Box
									sx={{
										fontWeight: "600",
										...styles.fontSize13,
										fontSize: "13px",
									}}
								>
									{topic?.title}
								</Box>
							</a>
						) : (
							<Box
								sx={{
									fontWeight: "bold",
									...styles.fontSize13,
									fontSize: "13px",
								}}
							>
								{topic?.title}
							</Box>
						)}
						<Box sx={{ width: "50px", height: "50px" }}></Box>
					</Box>
				</AccordionSummary>
				{topic?.subTopics && topic?.subTopics.length > 0 && topic?.subTopics.map(renderSubTopics)}
			</Accordion>
		</Box>
	);
};

export { renderTopics };
