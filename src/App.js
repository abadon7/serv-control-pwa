import React /*{ useState, useEffect }*/ from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.css";
import HomePage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
//import firebase from '../firebase/firebaseInit'
//import UserContext, { dateContext } from "../app/contextData";
//import { auth, provider } from "../firebase/firebaseInit";
//const theme = createMuiTheme()
import { useContext } from "react";
import { AuthContext } from "../src/components/auth/Auth";
//import firebase from "../firebase/firebaseInit";
//import Details from '../details/details'
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
//import { CssBaseline, CircularProgress } from '@material-ui/core'

const theme = createTheme();

const App = () => {
  // const NoMatch = () => <h1>404 Not Found</h1>;
  // return (
  //   <AuthProvider>
  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/home" element={<HomePage />} />
  //       <Route path="*" element={<NoMatch />} />
  //     </Routes>
  //   </AuthProvider>
  // );
  const { currentUser } = useContext(AuthContext);
  // const NoMatch = () => <h1>404 Not Found</h1>;
  return (
    <ThemeProvider theme={theme}>
      {currentUser ? <HomePage /> : <Login />}
    </ThemeProvider>
  );
};

export default App;
