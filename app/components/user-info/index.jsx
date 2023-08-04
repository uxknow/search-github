import { useEffect, useRef, useState } from "react";
import { Stack, Grid, Button, Typography } from "../mui/material";
import Badge from "../mui/badge";
import {
  StyledAvatar,
  StyledGrid,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledListItemText,
  StyledTypography,
} from "./styled";

const UserInfo = ({ userData }) => {
  const {
    login,
    name,
    avatar_url,
    html_url,
    company,
    created_at,
    location,
    public_repos,
    public_gists,
    followers,
    following,
    blog,
    bio,
  } = userData || {};
  const [maxWidthOfBadge, setMaxWidthOfBadge] = useState(null);
  const refBadge = useRef(null);

  const stringAvatar = (name, login) => {
    return {
      sx: {
        bgcolor: "#e4491a",
      },
      children: name
        ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
        : login?.slice(0, 2).toUpperCase(),
    };
  };

  const badges = [
    {
      title: "public_repos",
      bg: "#feebc8",
      color: "#7b341e",
      count: public_repos,
    },
    {
      title: "public_gists",
      bg: "#fed7e2",
      color: "#702459",
      count: public_gists,
    },
    {
      title: "followers",
      bg: "#c4f1f9",
      color: "#086f83",
      count: followers,
    },
    {
      title: "following",
      bg: "#e9d8fd",
      color: "#44337a",
      count: following,
    },
  ];

  const infoUser = [
    ["Company", company || "Not Specified"],
    ["Location", location || "Not Specified"],
    ["Blog / website", blog || "Not Specified"],
    ["Member Since", new Date(created_at).toLocaleDateString()],
  ];

  useEffect(() => {
    if (refBadge.current) {
      const childElements = Array.from(refBadge.current?.childNodes || []);
      setMaxWidthOfBadge(
        Math.max(
          ...childElements?.map((badge) =>
            parseFloat(getComputedStyle(badge).width)
          )
        )
      );
    }
  }, [refBadge]);

  return (
    <StyledGrid container gap={2}>
      <Grid item sm={12} md={3} xs={12}>
        <Stack alignItems="center" spacing={2}>
          {avatar_url ? (
            <StyledAvatar src={avatar_url} alt={login} />
          ) : (
            <StyledAvatar src="" {...stringAvatar(name, login)} alt={login} />
          )}
          <Button variant="contained" color="success">
            <StyledLink href={html_url} target="_blank" rel="noreferrer">
              view profile
            </StyledLink>
          </Button>
        </Stack>
      </Grid>
      <Grid item md={8} sm={12} xs={12}>
        <Stack spacing={3}>
          <Grid
            ref={refBadge}
            container
            columns={16}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {badges.map((badge) => (
              <Grid
                key={badge.title}
                md={3}
                sm={5.6}
                xs={8}
                item
                minWidth={
                  maxWidthOfBadge > 0 ? maxWidthOfBadge : "max-content"
                }
              >
                <Badge
                  color={badge.color}
                  bgcolor={badge.bg}
                >
                  {badge.title}: {badge.count}
                </Badge>
              </Grid>
            ))}
          </Grid>
          <StyledTypography>{name ? name : login}</StyledTypography>
          {bio && <Typography>{bio}</Typography>}
          <StyledList>
            {infoUser.map(([title, value]) => (
              <StyledListItem key={title}>
                <StyledListItemText>{title}:</StyledListItemText>
                {title.startsWith('Blog') && value !== 'Not Specified'  ? (
                  <StyledLink href={blog} target="_blank" rel="noreferrer">
                    {value}
                  </StyledLink>
                ) : (
                  value
                )}
              </StyledListItem>
            ))}
          </StyledList>
        </Stack>
      </Grid>
    </StyledGrid>
  );
};

export default UserInfo;
