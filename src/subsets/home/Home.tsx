import { Box, Stack, Typography } from "@mui/material";
import Image from 'next/image'
import julyImg from "../../assets/illustrations/july.JPG";
import gamma from "../../assets/illustrations/gamma.jpeg";
import injinaash from "../../assets/illustrations/injinaash.jpeg";
import { useEffect, useState } from "react";

const jul = "../../assets/illustrations/july.JPG";

export const Home = () => {
  const [screenType, setScreenType] = useState("")

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    setScreenType(screenWidth > 800 ? "window" : "mobile")
  }, [])
  // const julyImg = "../../assets/illustrations/july.JPG"
  const julyScript = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <Box paddingX={5} paddingTop={12} paddingBottom={8}>
      <Box>
        <Stack spacing={8}>
          <Stack spacing={5} direction={screenType === "window" ? "row" : "column"} flexWrap={"wrap"} useFlexGap display={"flex"} justifyContent={"center"} >
            <Box position={"relative"} height={screenType === "mobile" ? 210 : 500} width={screenType === "window" ? "65%" : "100%"}>
              <Image className="home-image" alt="july" src={julyImg} fill style={{ objectFit: "scale-down" }} />
            </Box>
            <Typography fontSize={18} flex={1}>{julyScript}</Typography>
          </Stack>

          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>

          <Stack spacing={screenType === "window" ? 8 : 4} direction={screenType === "window" ? "row" : "column"} flexWrap={"wrap"} useFlexGap>
            {screenType === "window" ?
              <>
                <Typography fontSize={18} flex={1}>{julyScript}</Typography>
                <Box position={"relative"} height={500} width={"65%"}>
                  <Image className="home-image" alt="july" src={gamma} fill style={{ objectFit: "scale-down" }} />
                </Box>
              </> :
              <>
                <Box position={"relative"} height={210} width={"100%"}>
                  <Image className="home-image" alt="july" src={gamma} fill style={{ objectFit: "scale-down" }} />
                </Box>
                <Typography fontSize={18} flex={1}>{julyScript}</Typography>
              </>
            }
          </Stack>

          <Box display={"flex"} justifyContent={"center"}>
            <Box width={"65%"} borderTop={1} />
          </Box>

          <Stack direction={"row"} spacing={10} flexWrap={"wrap"} useFlexGap>
            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={150} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>

            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={150} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>

            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={150} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>

            <Box flex={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image alt={"injinaash"} src={injinaash} width={150} />
              <Typography textAlign={"center"} fontWeight={600} fontSize={18} marginTop={2}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
