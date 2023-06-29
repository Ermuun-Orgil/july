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
                position={"fixed"}
                width={screenType === "window" ? "55%" : "100%"}
                height={"100%"}
                zIndex={8}
            >
                <Box
                    height={"70%"}
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
                    marginTop={2}
                    padding={2}
                    borderRadius={4}
                    width={500}
                >
                    <Typography fontSize={14}>ID: {data.name}</Typography>
                    <Typography fontSize={14}>date: {data.date}</Typography>
                    <Typography fontSize={14}>Гэрэл зурагчин: {data.photography}</Typography>
                    <Typography fontSize={14}>Хэрвээ та энэхүү гэрэл зургийг худалдаж авахыг хүсвэл 91903937, 99184934 дугаар руу залган зургийнхаа ID дугаарыг хэлээд аваарай.</Typography>
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
                sx={{filter: "blur(4px)"}}
            >
            </Box>
        </Box>
    );
};
