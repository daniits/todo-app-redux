import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,

  document.getElementById("root")
);
