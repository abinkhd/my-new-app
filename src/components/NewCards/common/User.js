import React from "react";
import { Stack,Avatar } from "@mui/material";
import DropDown from "./DropDown";

const User = ({user}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="user.jpg" /><h2>{user?.userId}</h2>
    </Stack>
  );
};

export default User;
