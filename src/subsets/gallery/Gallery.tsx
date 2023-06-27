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

export const Gallery = () => {
  const router = useRouter();
  const myElementRef: any = useRef(null);
  const [positionLeft, setPositionLeft] = useState(0);
  const scroll = useSpringValue(0)

  const dummyData: any[] = [{
    image: "https://picsum.photos/1063/1375",
    date: "07/01/2008",
    photographer: "Элбэгзаяа",
  },
  {
    image: "https://picsum.photos/1063/1375",
    date: "07/01/2008",
    photographer: "Элбэгзаяа",
  },
  {
    image: "https://picsum.photos/1063/1375",
    date: "07/01/2008",
    photographer: "Элбэгзаяа",
  },
  ];

  const dummy = [
    {
      date: "2008/07/01 12:00",
      photos: [
        {
          image: "https://picsum.photos/1063/1375",
          photographer: "Элбэгзаяа",
        },
        {
          image: "https://picsum.photos/1063/1375",
          photographer: "Элбэгзаяа",
        },
        {
          image: "https://picsum.photos/1063/1375",
          photographer: "Элбэгзаяа",
        },
        {
          image: "https://picsum.photos/1063/1375",
          photographer: "Элбэгзаяа",
        },
      ],
    }
  ]

  const onPressSecond = () => {
    router.push("/second");
  };

  const handleScroll = () => {
    const el: any = myElementRef.current;
    if (el !== null)
      setPositionLeft(el.scrollLeft);
  };

  const handleRight = () => {
    myElementRef.current.scrollLeft = myElementRef.current.scrollLeft + 1000
  };

  const handleLeft = () => {
    myElementRef.current.scrollLeft = myElementRef.current.scrollLeft - 1000
  };
  const { loading, data } = useFirestoreCollection<MomentDataType[]>([
    "moments",
  ]);

  if (loading) return <Box>Loading..</Box>;


  return (
    <Box paddingX={8} paddingTop={12}>
      <Typography variant="h5">2008 оны 7 сарын 1, 2 цаг 24 минут</Typography>
      <Carousel data={dummyData} />
      return (
      <Box padding={8}>
        {data.map((cur) => (
          <Box key={cur.id}>
            <Box>{cur.description}</Box>

            <Moments id={cur.id} />
          </Box>
        ))}
      </Box>
      );
};
