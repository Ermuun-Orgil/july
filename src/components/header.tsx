import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} boxShadow={2} alignItems={"center"} justifyContent={"space-between"} paddingX={24}>
      <h5>1st of July</h5>
      <Stack direction={"row"} spacing={3}>
        <Typography>Нүүр</Typography>
        <Box borderLeft={1} />
        <Typography>Бидний тухай</Typography>
        <Box borderLeft={1} />
        <Typography>Холбоо барих</Typography>
      </Stack>
    </Box>
  );
};
