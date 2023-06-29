"use client";

import { useState } from "react";
import { AlertTitle, Slide, Snackbar } from "../material";
import CloseIcon from "../icon/cross";
import { StyledAlert, StyledButton } from "./styled";

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
}

const CustomSnackBar = ({ type, msg }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Snackbar
      TransitionComponent={SlideTransition}
      open={isOpen}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      autoHideDuration={2800}
      sx={{ width: "100%" }}
    >
      <StyledAlert
        variant="filled"
        severity={type}
        action={
          <StyledButton onClick={() => setIsOpen(false)} size="small">
            <CloseIcon />
          </StyledButton>
        }
      >
        <AlertTitle>{type.toUpperCase()}</AlertTitle>
        {msg}
      </StyledAlert>
    </Snackbar>
  );
};

export default CustomSnackBar;
