import { ArrowRight, ChevronRight } from "@mui/icons-material";
import { Box, Tabs } from "@mui/material";
import React, { useState } from "react";
import { styles } from "../../../../styles";
import Overview from "./Overview";
import Downloadable from "./Downloadable";
import ProjectLayout from "./ProjectLayout";
import OurMission from "./OurMission";
const Desktop = () => {
    const projectTabs = [
        { id: 1, title: "Tổng quan dự án", tabs: <Overview /> },
        { id: 2, title: "Tải xuống", tabs: <Downloadable /> },
        {
            id: 3,
            title: "Layout và hạng mục nội thất",
            tabs: <ProjectLayout />,
        },
        { id: 4, title: "Nhiệm vụ của chúng tôi", tabs: <OurMission /> },
    ];
    const [projectInfo, setProjectInfo] = useState(1);
    return (
        <Box sx={{ pt: "32px" }}>
            <Box
                sx={{
                    display: "flex",
                    gap: "27px",
                }}
            >
                <Box width={"260px"}>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                        <Box
                            sx={{
                                fontWeight: 600,
                                fontSize: "14px",
                                color: "#06542D",
                            }}
                        >
                            <Box>Bắt đầu</Box>
                        </Box>
                        <Box
                            sx={{
                                ...styles.centerFlex,
                                svg: { width: "16px", height: "16px" },
                            }}
                        >
                            <ChevronRight />
                        </Box>
                        <Box sx={{ fontSize: "14px" }}>
                            <Box>Dự án</Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            pt: "30px",
                            fontSize: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        {projectTabs.map((item) => (
                            <Box
                                key={item.id}
                                sx={{ ...styles.centerFlex, gap: "5px" }}
                            >
                                <ArrowRight />
                                <Box
                                    onClick={() => setProjectInfo(item.id)}
                                    sx={
                                        projectInfo === item.id && {
                                            fontWeight: 700,
                                        }
                                    }
                                >
                                    <Box sx={{ cursor: "pointer" }}>
                                        {item.title}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: "calc(100% - 260px)" }}>
                    {projectTabs.map((item) => (
                        <Box key={item.id}>
                            {projectInfo === item.id && <Box>{item.tabs}</Box>}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Desktop;
