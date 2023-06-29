import { useFirestoreCollection } from "@firebase/index";
import { MomentDataType } from "@types";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Carousel } from "@components/carousel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef, useState } from "react";
import { CarouselPopUp } from "../../components/carouselPopUp";

export const Gallery = () => {
  const { loading, data } = useFirestoreCollection<MomentDataType[]>([
    "moments",
  ]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("false");
  const [popupData, setPopupData] = useState({});
  const myElementRef: any = useRef(null);

  const handleScroll = () => {
    console.log(myElementRef);
  };

  const handleRight = () => {
    myElementRef.current.scrollLeft = myElementRef.current.scrollLeft + 1000;
  };

  const handleLeft = () => {
    myElementRef.current.scrollLeft = myElementRef.current.scrollLeft - 1000;
  };

  const openPopUp = (data: any) => {
    setPopupData(data);
    setOpen(true)
  }

  const close = () => {
    setOpen(false);
  }

  if (loading) return <Box>Loading..</Box>;

  console.log(data);

  return (
    <Stack paddingX={4} paddingTop={12}>
      {data.map((cur, index) => (
        <Box key={index} marginTop={2}>
          <Typography variant="h5">{cur.id.split("-")[0].replaceAll(":", "/")}-{cur.id.split("-")[1]} цаг</Typography>
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
                {cur.photos?.map((el, index) => (
                  <Box
                    onClick={() => openPopUp(el)}
                    id={`${index}`}
                    key={`image-${index}`}
                    height={200}
                    width={330}
                    zIndex={0}
                    sx={{
                      cursor: "pointer",
                      backgroundImage: `url(${el.imageUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                  />
                ))}
              </Stack>
            </div>
          </Box>
        </Box>
      ))}
      <CarouselPopUp data={popupData} open={open} close={close} />
    </Stack>
  );
};
