"use client";

import { useState } from "react";
import Header from "./components/header";
import { CircularProgress, Container, Box } from "./components/mui/material";
import Search from "./components/search";
import UserInfo from "./components/user-info";
import Repositories from "./components/repositories";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(null);

  console.log(userData);
  return (
    <Container maxWidth="lg">
      <Header />
      <Search
        setUserData={setUserData}
        setLoading={setLoading}
        setRepos={setRepos}
      />
      {loading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {userData && <UserInfo userData={userData} />}
      {repos && userData && <Repositories repos={repos} />}
    </Container>
  );
}
