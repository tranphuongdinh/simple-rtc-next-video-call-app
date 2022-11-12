import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../context/SocketContext";

const Options = ({ children }) => {
  const { call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <Container>
      <Paper>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} md={6}>
              <h2>Account Info</h2>
              <TextField label="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me}>
                <Button variant="contained" color="primary" fullWidth startIcon={<ContentCopyIcon />}>
                  Copy your ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6}>
              <h2>Make a call</h2>
              <TextField label="ID to call" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />

              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabledIcon />} fullWidth onClick={leaveCall}>
                  Hang up
                </Button>
              ) : (
                <Button variant="contained" color="secondary" startIcon={<PhoneForwardedIcon />} fullWidth onClick={() => callUser(idToCall)}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
