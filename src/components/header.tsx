import { Box, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect, useState } from "react";
import { animated, useSpring } from '@react-spring/web'
import { useRouter } from "next/router";

export const Header = () => {
  const [screenType, setScreenType] = useState("")
  const [open, setOpen] = useState(false)
  const [openSprings, setOpenSprings] = useSpring(() => ({ y: -1000, config: { tension: 280, friction: 60 } }))
  const router = useRouter();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenType(screenWidth > 600 ? "window" : "mobile")
  }, [])

  useEffect(() => {
    if (open)
      setOpenSprings({ y: 0 });
  }, [open])

  const closeMenu = () => {
    setOpenSprings({ y: -1000 });
    setTimeout(() => {
      setOpen(false);
    }, 800)
  }

  const pushHome = () => {
    router.push("/");
    closeMenu();
  };

  const pushGallery = () => {
    router.push("/gallery");
    closeMenu();
  };

  const pushContact = () => {
    router.push("/contact");
    closeMenu();
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} boxShadow={2} alignItems={"center"} justifyContent={"space-around"} position={"fixed"} width={"100vw"} bgcolor={"#FFFFFF"}>
        <h5>1st of July</h5>
        <Stack direction={"row"} spacing={3} display={screenType === "mobile" ? "none" : "flex"}>
          <Typography onClick={pushHome}>Нүүр</Typography>
          <Box borderLeft={1} />
          <Typography onClick={pushGallery}>Галерей</Typography>
          <Box borderLeft={1} />
          <Typography onClick={pushContact}>Холбоо барих</Typography>
        </Stack>
        <div onClick={() => setOpen(true)} style={{ display: `${screenType === "mobile" ? "block" : "none"}` }}>
          <Box border={1} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={2} padding={0.5}>
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
          zIndex: 2,
          ...openSprings,
        }}
      >
        <div onClick={closeMenu}>
          <Box position={"absolute"} right={0} top={0} padding={5}>
            <ClearIcon fontSize="large" />
          </Box>
        </div>
        <Stack display={"flex"} alignItems={"center"} spacing={2}>
          <div onClick={pushHome} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography fontSize={30}>Нүүр</Typography>
          </div>
          <Box borderTop={1} width={"100%"} />
          <div onClick={pushGallery} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography fontSize={30}>Галерей</Typography>
          </div>
          <Box borderTop={1} width={"100%"} />
          <div onClick={pushContact} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography fontSize={30}>Холбоо барих</Typography>
          </div>
        </Stack>
      </animated.div>
    </>
  );
};
