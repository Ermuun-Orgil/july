import { useFirestoreCollection } from "@firebase/index";
import { Box } from "@mui/material";
import { PhotoDataType } from "@types";
import React from "react";

interface MomentsProps {
  id: string;
}

export const Moments = (props: MomentsProps) => {
  const { id } = props;
  const { loading, data } = useFirestoreCollection<PhotoDataType[]>([
    "moments",
    id,
    "photos",
  ]);

  if (loading) return <Box>Loading...</Box>;

  return (
    <Box>
      {data.map((cur) => (
        <Box
          key={cur.id}
          height={200}
          width={330}
          sx={{
            backgroundImage: `url(${cur.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
      ))}
    </Box>
  );
};
