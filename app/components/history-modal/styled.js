import { Modal, Stack, styled, Typography } from "@mui/material";
import CloseIcon from "../mui/icon/cross";

export const StyledModal = styled(Modal, {
  name: "StyledModal",
})({
  padding: "0 12px",
});

export const StyledStackContainer = styled(Stack, {
  name: "StyledStackContainer",
})({
  position: "relative",
  backgroundColor: "#171923",
  borderRadius: "10px",
  height: "max-content",
  maxHeight: "420px",
  maxWidth: "450px",
  margin: "60px auto 0px",
  padding: "20px",
});

export const StyledTypographyTitle = styled(Typography, {
  name: "StyledTypographyTitle",
})({
  fontWeight: "bold",
  textAlign: "center",
});

export const StyledCloseIcon = styled(CloseIcon, {
  name: "StyledCloseIcon",
})({
  position: "absolute",
  top: 26,
  right: 20,
  fontSize: "24px",
  cursor: "pointer",
  "&:hover": { color: "#999" },
});

export const StyledTypographyText = styled(Typography, {
  name: "StyledTypographyText",
})({
  textAlign: "center",
  color: "#A0AEC0",
  fontSize: "14px",
  fontWeight: "bold",
});

export const StyledStackBadgeBlock = styled(Stack, {
  name: "StyledStackBadgeBlock",
})({
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#000",
  },
});
