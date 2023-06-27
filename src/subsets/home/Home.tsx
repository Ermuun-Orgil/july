import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import julyImg from "../../assets/illustrations/july.JPG";
import gamma from "../../assets/illustrations/gamma.jpeg";
import injinaash from "../../assets/illustrations/injinaash.jpeg";

export const Home = () => {

  const [screenType, setScreenType] = useState("window");
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenType(screenWidth > 600 ? "window" : "mobile")
  }, [])

  // const julyImg = "../../assets/illustrations/july.JPG"
  const julyScript = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <Box paddingX={8} paddingTop={12}>
      <Box>
        <Stack spacing={8}>
          <Stack direction={"row"} spacing={10}>
            <Image alt="july" src={julyImg} width={800} style={{ objectFit: "contain" }}></Image>
            <Typography fontSize={18}>{julyScript}</Typography>
          </Stack>
          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>
          <Stack direction={"row"} spacing={10}>
            <Typography fontSize={18}>{julyScript}</Typography>
            <Image alt="july" src={gamma} width={800} style={{ objectFit: "contain" }}></Image>
          </Stack>
          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>
          <Stack direction={"row"} spacing={10} flexWrap={"wrap"} useFlexGap>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={400} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={400} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={400} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={400} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
