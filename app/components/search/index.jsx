"use client";

import { useState } from "react";
import { Typography, Stack } from "../mui/material";
import CustomSnackbar from "../mui/custom-snackbar";
import { StyledButton, StyledFormControl, StyledOutlinedInput } from "./styled";
import { addUserToLC } from "@/utils";

const Search = ({ setUserData, setRepos, setLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState("");

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchValue) return;

    setLoading(true);
    setUserData(null);
    try {
      const [res, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${searchValue}`),
        fetch(`https://api.github.com/users/${searchValue}/repos`),
      ]);

      const data = await res.json();
      const reposData = await reposRes.json();

      if (data?.message) {
        handleShowToast();
        setUserData(null);
        setRepos(null);
        setMsg(`User ${data.message.toLowerCase()}`);
      } else {
        setUserData(data);
        setRepos(reposData);
        addUserToLC(data, data.login);
        setSearchValue("");
      }
      setLoading(false);
    } catch (err) {
      handleShowToast();
      setMsg(err?.message);
    }
  };

  return (
    <Stack alignItems="center" spacing={3}>
      <Typography fontSize={26}>Search users on GitHub</Typography>
      <StyledFormControl fullWidth component={"form"} onSubmit={handleSubmit}>
        <StyledOutlinedInput
          fullWidth
          placeholder="Type username"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <StyledButton
          variant="contained"
          color="success"
          type="submit"
          disabled={!searchValue}
        >
          search
        </StyledButton>
      </StyledFormControl>
      {showToast && <CustomSnackbar type="error" msg={msg} />}
    </Stack>
  );
};

export default Search;
