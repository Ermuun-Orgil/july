import { useFirestoreCollection } from "@firebase/index";
import { MomentDataType } from "@types";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CarouselPopUp } from "../../components/carouselPopUp";
import { Carousel } from "@components/carousel";

export const Gallery = () => {
  const { loading, data } = useFirestoreCollection<MomentDataType[]>([
    "moments",
  ]);

  console.log(data)
  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState({});

  const close = () => {
    setOpen(false);
  }

  if (loading) return <Box>Loading..</Box>;

  return (
    <Stack paddingX={4} paddingTop={6}>
      {data.map((cur) => (
        <Carousel key={`carousel-${cur.id}`} {...cur} setPhoto={setPopupData} setOpen={setOpen} />
      ))}
      <CarouselPopUp data={popupData} open={open} close={close} />
      <Typography marginBottom={6} textAlign={"center"} fontWeight={600} fontSize={16}>Хуулбарлан ашиглахыг хориглоно</Typography>
    </Stack>
  );
};
