import { Box, Stack } from "@mui/material"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRef, useState } from "react";

type CarouselType = {
    data: string[]
}


export const Carousel: React.FC<CarouselType> = ({ data }) => {
    const myElementRef: any = useRef(null);

    const handleScroll = () => {
        console.log(myElementRef)
    };

    const handleRight = () => {
        myElementRef.current.scrollLeft = myElementRef.current.scrollLeft + 1000
    };

    const handleLeft = () => {
        myElementRef.current.scrollLeft = myElementRef.current.scrollLeft - 1000
    };

    return (
        <Box display={"flex"} flexDirection={"row"} position={"relative"} alignItems={"center"} justifyContent={"space-between"} zIndex={1}>
            <Box sx={{ cursor: "pointer" }} onClick={handleLeft} zIndex={1} position={"absolute"} bgcolor={"rgba(170, 170, 170, 0.8)"} borderRadius={50} display={"flex"} alignItems={"center"} justifyContent={"center"} width={40} height={40} marginLeft={2}>
                <ChevronLeftIcon fontSize="large" />
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleRight} zIndex={1} position={"absolute"} bgcolor={"rgba(170, 170, 170, 0.8)"} borderRadius={50} display={"flex"} alignItems={"center"} justifyContent={"center"} width={40} height={40} right={0} marginRight={2}>
                <ChevronRightIcon fontSize="large" />
            </Box>
            <div onScroll={handleScroll} ref={myElementRef} style={{ display: "flex", overflowX: "scroll", alignItems: "center", position: "relative", justifyContent: "space-between", scrollBehavior: "smooth" }}>
                <Stack direction={"row"} spacing={2}>
                    {data.map((e: any, index) => (
                        <Box
                            onClick={() => console.log("sda")}
                            id={`${index}`}
                            key={`image-${index}`}
                            height={200}
                            width={330}
                            sx={{ cursor: "pointer", backgroundImage: `url(${e.image})`, backgroundPosition: "center", backgroundSize: "cover" }}
                        />
                    ))}
                </Stack>
            </div>
        </Box>
    )
}