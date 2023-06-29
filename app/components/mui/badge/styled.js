import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box, {
  name: 'StyledBox'
}) ({
  borderRadius: "4px",
  padding: "2px 4px",
  textTransform: "uppercase",
  textShadow: '0px 1px',
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center",
  whiteSpace: "nowrap"
})