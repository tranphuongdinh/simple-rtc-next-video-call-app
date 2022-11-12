import { Button } from "@mui/material";
import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const Notifications = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall } = useContext(SocketContext);

  return (
    <div>
      {call?.isReceivedCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling: </h1>

          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
