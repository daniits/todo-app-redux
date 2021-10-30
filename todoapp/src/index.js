import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Import Store From Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,

  document.getElementById("root")
);
