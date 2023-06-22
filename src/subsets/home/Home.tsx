import { Box } from "@mui/material";
import React from "react";
import { useFirestoreCollection } from "@firebase/index";
import { MomentDataType } from "@types";
import { Moments } from "./moment";

export const Home = () => {
  const { loading, data } = useFirestoreCollection<MomentDataType[]>([
    "moments",
  ]);

  if (loading) return <Box>Loading..</Box>;

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
