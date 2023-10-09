import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
//import App from './components/app/app'
//import App from './test'
import * as serviceWorker from "./serviceWorker";
import { StrictMode } from "react";
import { AuthProvider } from "../src/components/auth/Auth";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();
