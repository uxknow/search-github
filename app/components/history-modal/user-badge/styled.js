import { Avatar, Button, Stack, Typography, styled } from "@mui/material";
import DeleteForeverIcon from "../../mui/icon/delete";

export const StyledStack = styled(Stack, {
  name: "StyledStack",
})({
  backgroundColor: "rgba(255, 255, 255, 0.078)",
  borderRadius: "4px",
  padding: "4px 6px",
});

export const StyledAvatar = styled(Avatar, {
  name: "StyledAvatar",
})({
  width: 70,
  height: 70,
});

export const StyledTypographyName = styled(Typography, {
  name: "StyledTypographyName",
})({
  fontWeight: "bold",
});

export const StyledTypographyUsername = styled(Typography, {
  name: "StyledTypographyUsername",
})({
  color: "#A0AEC0",
});

export const StyledButtonVisit = styled(Button, {
  name: "StyledButtonVisit",
})({
  height: "30px",
  padding: "4px 0px",
});

export const StyledButtonDelete = styled(Button, {
  name: "StyledButtonDelete",
})({
  padding: 0,
  minWidth: "max-content",
});

export const StyledDeleteForeverIcon = styled(DeleteForeverIcon, {
  name: "StyledDeleteForeverIcon",
})({
  "&:hover": {
    color: "#a31c1c",
    transition: "0.3s ease",
  },
});
