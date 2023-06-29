import { useState } from "react";
import { Stack, Box, Button } from "../mui/material";
import HistoryModal from "../history-modal";
import { StyledGithubIcon, StyledTypography } from "./styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={6}
      paddingY={2}
    >
      <Stack alignItems="center">
        <StyledGithubIcon />
        <StyledTypography>
          GitHub
        </StyledTypography>
      </Stack>
      <Box>
        <Button variant="contained" color="success" onClick={showModal}>
          search history
        </Button>
      </Box>
      {<HistoryModal isOpen={isOpen} onClose={onClose}/>}
    </Stack>
  );
};

export default Header;
