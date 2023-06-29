import { Box, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef, useState } from "react";
import { MomentDataType } from "@types";
import { CarouselPopUp } from "./carouselPopUp";

export const Carousel: React.FC<MomentDataType> = (props) => {
    const [open, setOpen] = useState(false)
    const { photos } = props;
    

    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            position={"relative"}
            alignItems={"center"}
            justifyContent={"space-between"}
            zIndex={1}
        >
            <Box
                sx={{ cursor: "pointer" }}
                onClick={handleLeft}
                zIndex={1}
                position={"absolute"}
                bgcolor={"rgba(170, 170, 170, 0.8)"}
                borderRadius={50}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={40}
                height={40}
                marginLeft={2}
            >
                <ChevronLeftIcon fontSize="large" />
            </Box>
            <Box
                sx={{ cursor: "pointer" }}
                onClick={handleRight}
                zIndex={1}
                position={"absolute"}
                bgcolor={"rgba(170, 170, 170, 0.8)"}
                borderRadius={50}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={40}
                height={40}
                right={0}
                marginRight={2}
            >
                <ChevronRightIcon fontSize="large" />
            </Box>
            <div
                onScroll={handleScroll}
                ref={myElementRef}
                style={{
                    zIndex: 0,
                    display: "flex",
                    overflowX: "scroll",
                    alignItems: "center",
                    position: "relative",
                    justifyContent: "space-between",
                    scrollBehavior: "smooth",
                }}
            >
                <Stack direction={"row"} spacing={2} zIndex={0}>
                    {photos?.map((cur, index) => (
                        <Box
                            onClick={openPopUp}
                            id={`${index}`}
                            key={`image-${index}`}
                            height={200}
                            width={330}
                            zIndex={0}
                            sx={{
                                cursor: "pointer",
                                backgroundImage: `url(${cur.imageUrl})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                            }}
                        />
                    ))}
                </Stack>
            </div>
            <CarouselPopUp open={open} setOpen={setOpen} />
        </Box>
    );
};
