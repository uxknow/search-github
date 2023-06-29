import {
  Avatar,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

export const StyledGrid = styled(Grid, {
  name: "StyledGrid",
})({
  border: "2px solid #8ff794",
  borderRadius: "4px",
  padding: "34px 40px",
  marginTop: "64px",
});

export const StyledAvatar = styled(Avatar, {
  name: "StyledAvatar",
})({
  width: 120,
  height: 120,
  fontWeight: 'bold'
});

export const StyledLink = styled(Link, {
  name: "StyledLink",
})({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const StyledTypography = styled(Typography, {
  name: "StyledTypography",
})({
  color: "#abad03",
  letterSpacing: "0.1rem",
  fontSize: 18,
});

export const StyledList = styled(List, {
  name: "StyledList",
})({
  paddingTop: 0,
});

export const StyledListItem = styled(ListItem, {
  name: "StyledListItem",
})({
  fontWeight: "bold",
  padding: 0,
});

export const StyledListItemText = styled(ListItemText, {
  name: "StyledListItemText",
})({
  flex: "0 1 auto",
  color: "#9AE6B4",
  marginRight: "4px",
});
