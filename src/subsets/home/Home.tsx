import { Box, Slide, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import HorizontalScroll from "react-scroll-horizontal";
import React from "react";

export const Home = () => {
  const router = useRouter();
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

  const onPressSecond = () => {
    router.push("/second");
  };

  return (
    <Box padding={8}>
      <Typography variant="h5">2008 оны 7 сарын 1, 2 цаг 24 минут</Typography>
      <Box width={"100%"} overflow={"scroll"} display={"flex"} flexDirection={"row"}>
        {/* <Stack direction={"row"} spacing={5} display={"table"} overflow={"auto"}> */}
          {dummyData.map((e: any) => {
            return (
              <Box height={200} width={330} sx={{ backgroundImage: `url(${e.image})`, backgroundPosition: "center", backgroundSize: "cover" }}></Box>
            )
          })}
        {/* </Stack> */}
      </Box>
      <Link href="/home">first</Link>
      <button onClick={onPressSecond}>second</button>
    </Box>
  );
};
