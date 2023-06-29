import { Alert, Button, styled } from "@mui/material";

export const StyledAlert = styled(Alert, {
  name: "StyledAlert",
})({
  display: "flex",
  position: "absolute",
  bottom: 20,
  minWidth: 220,
  maxWidth: 500,
});

export const StyledButton = styled(Button, {
  name: "StyledButton",
})({
  padding: 0,
  minWidth: "max-content",
  lineHeight: 1,
  color: 'inherit'
});
