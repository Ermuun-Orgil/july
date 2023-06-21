import { Box, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect, useState } from "react";
import { animated, useSpring } from '@react-spring/web'
import { height } from "@mui/system";

export const Header = () => {
  const [screenType, setScreenType] = useState("")
  const [open, setOpen] = useState(false)
  const [springs, setSprings] = useSpring(() => ({ x: 800, config: { tension: 280, friction: 60 } }))

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenType(screenWidth > 600 ? "window" : "mobile")
    console.log(screenWidth)
  }, [])

  useEffect(() => {
    if (open)
      setSprings({ x: 0, config: { tension: 280, friction: 60 } })
  }, [open])

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} boxShadow={2} alignItems={"center"} justifyContent={"space-around"}>
        <h5>1st of July</h5>
        <Stack direction={"row"} spacing={3} display={screenType === "mobile" ? "none" : "flex"}>
          <Typography>Нүүр</Typography>
          <Box borderLeft={1} />
          <Typography>Бидний тухай</Typography>
          <Box borderLeft={1} />
          <Typography>Холбоо барих</Typography>
        </Stack>
        <div onClick={() => setOpen(true)}>
          <Box border={1} display={screenType === "mobile" ? "flex" : "none"} justifyContent={"center"} alignItems={"center"} borderRadius={2} padding={0.5}>
            <MenuIcon />
          </Box>
        </div>
      </Box>
      <animated.div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          display: `${open ? "flex" : "none"}`,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          ...springs
        }}
      // width={"100vw"}
      // height={"100vh"}
      // position={"absolute"}
      // top={0}
      // left={0}
      // display={open ? "flex" : "none"}
      // alignItems={"center"}
      // justifyContent={"center"}
      // bgcolor={"#FFFFFF"}
      >
        <Box position={"absolute"} right={0} top={0} padding={5}>
          <ClearIcon fontSize="large" />
        </Box>
        <Stack display={"flex"} alignItems={"center"} spacing={2}>
          <Typography fontSize={30}>Нүүр</Typography>
          <Box borderTop={1} width={"100%"} />
          <Typography fontSize={30}>Бидний тухай</Typography>
          <Box borderTop={1} width={"100%"} />
          <Typography fontSize={30}>Холбоо барих</Typography>
        </Stack>
      </animated.div>
    </>
  );
};
