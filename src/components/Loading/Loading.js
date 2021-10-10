import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { LoadingContainer } from "./styled";

export default function Loading() {
  return (
    <LoadingContainer>
      <Box sx={{ width: "100%" }}>
        <LinearProgress  />
      </Box>
    </LoadingContainer>
  );
}
