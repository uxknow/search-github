"use client";

import { useEffect, useState } from "react";
import { Slide, Typography } from "../mui/material";
import UserBadge from "./user-badge";
import {
  StyledCloseIcon,
  StyledModal,
  StyledStackBadgeBlock,
  StyledStackContainer,
  StyledTypographyText,
  StyledTypographyTitle,
} from "./styled";

const HistoryModal = ({ isOpen, onClose }) => {
  const [searchUsers, setSearchUsers] = useState([]);

  useEffect(() => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    setSearchUsers(users);
  }, [localStorage.getItem("users")]);

  const deleteUser = (username) => {
    const filterUsers = searchUsers.filter(
      (user) => user.username !== username
    );
    localStorage.setItem("users", JSON.stringify(filterUsers));
    setSearchUsers(filterUsers);
  };

  return (
    <StyledModal open={isOpen} onClose={onClose}>
      <Slide in={isOpen}>
        <StyledStackContainer gap={2}>
          <StyledTypographyTitle variant="h6" component="h2">
            Search History
          </StyledTypographyTitle>
          <StyledCloseIcon onClick={onClose}/>
          <Typography>Users you searched for:</Typography>
          {searchUsers.length === 0 && (
            <StyledTypographyText>No users searched yet</StyledTypographyText>
          )}
          {searchUsers.length > 0 && (
            <StyledStackBadgeBlock gap={2}>
              {searchUsers.map(({ avatar, name, username, url }) => (
                <UserBadge
                  key={username}
                  avatar={avatar}
                  username={username}
                  name={name}
                  url={url}
                  deleteUser={deleteUser}
                />
              ))}
            </StyledStackBadgeBlock>
          )}
        </StyledStackContainer>
      </Slide>
    </StyledModal>
  );
};

export default HistoryModal;
