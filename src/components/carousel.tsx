import { Box, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef } from "react";
import { MomentDataType } from "@types";

export const Carousel: React.FC<MomentDataType> = (props) => {
    const { photos, id, setPhoto, setOpen } = props;
    const myElementRef: any = useRef(null);

    const handleRight = () => {
        myElementRef.current.scrollLeft = myElementRef.current.scrollLeft + 1000;
    };

    const handleLeft = () => {
        myElementRef.current.scrollLeft = myElementRef.current.scrollLeft - 1000;
    };

    const openPopUp = (data: any) => {
        setPhoto(data);
        setOpen(true)
      }

    return (
        <Box marginTop={4}>
            <Box width={"100%"} display={"flex"} justifyContent={"center"} marginBottom={3}>
                <Typography variant="h5">{id.split("-")[0].replaceAll(":", "/")} {id.split("-")[1]}:00-{id.split("-")[1]}:59 цаг</Typography>
            </Box>
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
                    ref={myElementRef}
                    style={{
                        display: "flex",
                        overflowX: "scroll",
                        alignItems: "center",
                        position: "relative",
                        justifyContent: "space-between",
                        scrollBehavior: "smooth",
                    }}
                >
                    <Stack direction={"row"} spacing={1}>
                        {photos?.map((cur, index) => (
                            <Box
                                onClick={() => openPopUp(cur)}
                                id={`${index}`}
                                key={`image-${index}`}
                                height={200}
                                width={300}
                                sx={{
                                    cursor: "pointer",
                                    backgroundImage: `url(${cur.imageUrl})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />
                        ))}
                    </Stack>
                </div>
            </Box>
        </Box>
    );
};
