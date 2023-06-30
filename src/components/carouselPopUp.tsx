import { Box, Typography } from "@mui/material";
import { CarouselPopUpType } from "@types";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

export const CarouselPopUp: React.FC<CarouselPopUpType> = (props) => {
    const { open, close, data } = props;
    const [screenType, setScreenType] = useState("");
    console.log(open)
    useEffect(() => {
        const screenWidth = window.innerWidth;
        setScreenType(screenWidth > 800 ? "window" : "mobile")
    }, [])

    return (
        <Box
            zIndex={6}
            margin={0}
            display={open ? "flex" : "none"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"fixed"}
            top={0}
            left={0}
            width={"100vw"}
            height={"100vh"}
            paddingY={4}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                position={"fixed"}
                width={screenType === "window" ? "55%" : "100%"}
                height={"100%"}
                zIndex={8}
            >
                <Box position={"fixed"} right={40} top={40} onClick={close}>
                    <CloseIcon fontSize="large" />
                </Box>
                <Box
                    height={screenType === "window" ? "66%" : "30%"}
                    width={"100%"}
                    sx={{
                        backgroundImage: `url(${data.imageUrl})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                    }}
                />
                <Box
                    flexDirection={"column"}
                    alignItems={"center"}
                    bgcolor={"#FFFFFF"}
                    padding={2}
                    borderRadius={4}
                    width={"70%"}
                >
                    <Typography fontSize={14}><span style={{ fontWeight: 600 }}>ID дугаар:</span> {data.name}</Typography>
                    <Typography fontSize={14}><span style={{ fontWeight: 600 }}>Огноо:</span> {data.date}</Typography>
                    <Typography fontSize={14}><span style={{ fontWeight: 600 }}>Гэрэл зурагчин:</span> {data.photography}</Typography>
                    <Typography fontSize={14}>Хуулбарлан ашиглахыг хориглоно</Typography>
                    <Typography fontSize={14}>Энэхүү гэрэл зургийг угаалган эсвэл файлаар худалдаж авахыг хүсвэл 91903937, 90262021 дугаар руу залган зургийнхаа ID дугаарыг хэлээд аваарай.</Typography>
                </Box>
            </Box>
            <Box
                onClick={close}
                zIndex={7}
                width={"100vw"}
                height={"100vh"}
                bgcolor={"rgba(195, 193, 193, 0.6)"}
                position={"fixed"}
                top={0}
                left={0}
            >
            </Box>
        </Box>
    );
};
