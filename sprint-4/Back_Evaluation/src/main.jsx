import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
// import {DataContextProvider} from "./AddContext/dataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
  
  </BrowserRouter>
);
