import { FormControl, OutlinedInput, styled, Button } from "@mui/material";

export const StyledFormControl = styled(FormControl, {
  name: "StyledFormControl",
})({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const StyledOutlinedInput = styled(OutlinedInput, {
  name: "StyledOutlinedInput",
})({
  color: "#fff",
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#999",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2e7e32" },
  },
  "& .MuiInputBase-input": { padding: "10px 14px" },
});

export const StyledButton = styled(Button, {
  name: 'StyledButton'
}) ({
  alignSelf: 'flex-start',
  '&:disabled': {
    color: '#fff',
    background: '#2e7e32',
    opacity: 0.5
  }
})
