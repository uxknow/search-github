import { Stack } from "../../mui/material";
import {
  StyledAvatar,
  StyledButtonDelete,
  StyledButtonVisit,
  StyledDeleteForeverIcon,
  StyledStack,
  StyledTypographyName,
  StyledTypographyUsername,
} from "./styled";

const UserBadge = ({ avatar, username, name, url, deleteUser }) => {
  return (
    <StyledStack direction="row" justifyContent="space-between">
      <Stack direction="row" alignItems="center" gap={1}>
        <StyledAvatar src={avatar} alt={username} />
        <Stack>
          <StyledTypographyName>{name ? name : "User"}</StyledTypographyName>
          <StyledTypographyUsername variant="body2">
            {username}
          </StyledTypographyUsername>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" gap={2}>
        <StyledButtonVisit
          href={url}
          variant="contained"
          color="success"
          component="a"
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </StyledButtonVisit>
        <StyledButtonDelete
          color="error"
          onClick={() => deleteUser(username)}
        >
          <StyledDeleteForeverIcon/>
        </StyledButtonDelete>
      </Stack>
    </StyledStack>
  );
};

export default UserBadge;
