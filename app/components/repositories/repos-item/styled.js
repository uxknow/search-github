import { Link, styled, Stack, Box } from "@mui/material";

export const StyledLink = styled(Link, {
  name: "Styled Link",
})({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

export const StyledStack = styled(Stack, {
  name: "StyledStack",
})({
  backgroundColor: "#0e0d0d",
  borderRadius: "5px",
  padding: "18px 44px",
  transition: '0.4s ease',
  "&:hover": {
    backgroundColor: "#2e2b2b",
  },
});

export const StyledBox = styled(Box, {
  name: 'StyledBox'
}) ({
  backgroundColor: "#b9f5d0",
  color: "#000",
  fontSize: "12px",
  fontWeight: "bold",
  padding: "0 6px",
  borderRadius: "4px",
  textShadow: "0px 1px #272626",
  minWidth: "150px",
  textTransform: "uppercase",
  textAlign: "center",
})
