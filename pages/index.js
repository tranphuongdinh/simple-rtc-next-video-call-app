import { AppBar, Typography } from "@mui/material";
import Notifications from "../components/Notifications";
import Options from "../components/Options";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  return (
    <div>
      <AppBar position="inherit" color="inherit">
        <Typography variant="h2" align="center">
          WEB RTC CHAT
        </Typography>

        <VideoPlayer />

        <Options>
          <Notifications />
        </Options>
      </AppBar>
    </div>
  );
}
