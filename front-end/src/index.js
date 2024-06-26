import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import App from "./app";
import theme, { customTheme } from "./theme";
const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
  reportWebVitals();
};
if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
