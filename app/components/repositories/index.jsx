import { useEffect, useState } from "react";
import { Button, Typography } from "../mui/material";
import ReposItem from "./repos-item";
import { StyledStack, StyledTypography } from "./styled";

const Repositories = ({ repos }) => {
  const [showMore, setShowMore] = useState(repos.slice(0, 5));
  const [count, setCount] = useState(1);

  useEffect(() => {
    setShowMore(repos.slice(0, 5))
  }, [repos])

  const showMoreRepos = () => {
    if (showMore.length < repos.length) {
      setCount((prev) => prev + 1);
      setShowMore(repos.slice(0, 5 * (count + 1)));
    } else if (showMore.length === repos.length) {
      setShowMore(repos.slice(0, 5));
      setCount((prev) => 1);
    }
  };
  
  return (
    <StyledStack justifyContent="center" alignItems="center" gap={3}>
      <StyledTypography variant="h4" component="h2">
        repositories
      </StyledTypography>
      {repos?.length > 0 ? (
        <ReposItem repos={showMore} />
      ) : (
        <Typography alignSelf="flex-start">No repositories are here</Typography>
      )}
      {repos?.length > 5 && (
        <Button variant="contained" color="success" onClick={showMoreRepos}>
          {showMore.length === repos.length ? "show less" : "show more"}
        </Button>
      )}
    </StyledStack>
  );
};

export default Repositories;
