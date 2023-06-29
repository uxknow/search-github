import Badge from "../../mui/badge";
import { Stack, Typography, Grid } from "../../mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledBox, StyledLink, StyledStack } from "./styled";

const ReposItem = ({ repos }) => {
  const matches = useMediaQuery("(max-width:470px)");

  const badges = [
    {
      title: "stars",
      bg: "#feebc8",
      color: "#7b341e",
    },
    {
      title: "forks",
      bg: "#fed7e2",
      color: "#702459",
    },
    {
      title: "watchers",
      bg: "#c4f1f9",
      color: "#086f83",
    },
  ];
  
  return (
    <Stack width="100%" gap={3}>
      {repos.map(
        ({
          id,
          name,
          forks,
          stargazers_count,
          watchers,
          language,
          html_url,
        }) => (
          <StyledLink key={id} href={html_url} target="_blank" rel="noreferrer">
            <StyledStack
              direction={matches ? "column" : "row"}
              alignItems="center"
              justifyContent="space-between"
              gap={4}
            >
              <Stack>
                <Typography maxWidth="150px">{name}</Typography>
                <StyledBox>Language: {language ? language : "None"}</StyledBox>
              </Stack>
              <Grid container width="auto" justifyContent="center" gap={2}>
                {badges.map((badge) => (
                  <Grid key={badge.title} item minWidth='150px'>
                    <Badge color={badge.color} bgcolor={badge.bg}>
                      {badge.title}:{" "}
                      {badge.title === "stars"
                        ? stargazers_count
                        : badge.title === "forks"
                        ? forks
                        : watchers}
                    </Badge>
                  </Grid>
                ))}
              </Grid>
            </StyledStack>
          </StyledLink>
        )
      )}
    </Stack>
  );
};

export default ReposItem;
