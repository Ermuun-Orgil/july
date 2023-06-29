import { useFirestoreCollection } from "@firebase/index";
import { MomentDataType } from "@types";
import { Moments } from "./moment";
import { Box, Slide, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSpringValue, animated } from '@react-spring/web'
import { Carousel } from "@components/carousel";
import Image from "next/image";

export const Detail = () => {
    const dummy = {
        photographer: "L.Elbegzaya",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/july-a9a1f.appspot.com/o/2008%3B07%3B01-12%3B55%3B27.jpg?alt=media&token=14f19654-1347-4d17-9e8e-73dae256ae27",
        date: "2008.07.01 12:00"
    }
    return (
        <Box paddingX={8} paddingTop={12}>
            <Box sx={{ backgroundImage: `url(${dummy.imageUrl})`, backgroundPosition: "fill", backgroundSize: "cover"  }} width={"75%"} height={"50vh"} />
            <div>sda</div>
        </Box>
    );
}
