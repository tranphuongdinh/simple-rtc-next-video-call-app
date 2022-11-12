import { useEffect } from "react";
import io from "socket.io-client";
import "../styles/globals.css";

import { ContextProvider } from "../context/SocketContext";
let socket = null;

function MyApp({ Component, pageProps }) {
  const getSocket = async () => {
    await fetch("/api/socket");
    socket = io();
  };

  useEffect(() => {
    getSocket();
  }, []);

  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
