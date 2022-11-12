import { Grid, Paper } from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const VideoPlayer = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall } = useContext(SocketContext);

  return (
    <Grid container>
      {stream && (
        <Paper>
          <Grid item xs={12} md={6}>
            <h2>{name || "Name"}</h2>
            <video playsInline muted ref={myVideo} autoPlay></video>
          </Grid>
        </Paper>
      )}

      {callAccepted && !callEnded && (
        <Paper>
          <Grid item xs={12} md={6}>
            <h2>{call.name || "Unknown"}</h2>
            <video playsInline muted ref={userVideo} autoPlay></video>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
