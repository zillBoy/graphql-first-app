/**
 * React Dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Internal Dependencies
 */
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BASE_URL } from "../src/utils/Api";

/**
 * Third pary Dependencies
 */
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
