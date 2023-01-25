import {
  alpha,
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputBase,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import UserCard from "./genericCompo/UserCard";
import OneOOneChat from "./OneOOneChat";
import { AppState } from "../Context/AppProvider";
import RoomChat from "./RoomChat";

function ChatBox({ setFetchAgain, fetchAgain }) {
  const { user, setSelectedChat, selectedChat } = AppState();

  let users = [];

  if (selectedChat) {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    users = selectedChat.users.filter((u) => u._id !== user._id);
    console.log(users, "users");
  }

  return (
    <Grid
      item
      xs={7}
      sx={{
        pl: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {users.length ? (
        <Box>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#2a6f97",
              p: "8px",
            }}
          >
            {users.map((user) => (
              <Avatar
                alt="Remy Sharp"
                src={user.pic}
                sx={{
                  marginRight: "-15px",
                  boxShadow: "2px 2px 4px #012a4a",
                  border: "1px solid #012a4a",
                }}
                size="small"
              />
            ))}
          </Paper>
        </Box>
      ) : null}

      {/* {selectedChat && setSelectedChat.isGroupChat ? (
        <RoomChat setFetchAgain={setFetchAgain} fetchAgain={fetchAgain} />
      ) : (
        <OneOOneChat setFetchAgain={setFetchAgain} fetchAgain={fetchAgain} />
      )} */}

      {selectedChat && (
        <OneOOneChat setFetchAgain={setFetchAgain} fetchAgain={fetchAgain} />
      )}
    </Grid>
  );
}

export default ChatBox;
