import { useFirestoreCollection } from "@firebase/index";
import { MomentDataType } from "@types";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "@components/carousel";

export const Gallery = () => {
  const { loading, data } = useFirestoreCollection<MomentDataType[]>([
    "moments",
  ]);

  if (loading) return <Box>Loading..</Box>;

  return (
    <Box paddingX={4} paddingTop={12}>
      <Typography variant="h5">2008 оны 7 сарын 1, 2 цаг 24 минут</Typography>

      {data.map((cur) => (
        <Carousel key={`carousel-${cur.id}`} {...cur} />
      ))}
    </Box>
  );
};
