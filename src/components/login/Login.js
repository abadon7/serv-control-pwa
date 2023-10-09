import React, { useContext } from "react";
//import UserContext, { dateContext } from "../app/contextData";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Logo from "../logo/Logo";
import { AuthContext } from "../auth/Auth";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttomGradient: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "50px",
    width: "100%",
    maxWidth: "300px",
  },
  mainContainer: {
    paddingTop: "50px",
    maxWidth: "500px",
  },
  paperCotainer: {
    padding: "50px 0",
  },
});

function Login(props) {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  const classes = useStyles();
  const { currentUser, login, logout } = useContext(AuthContext);

  return (
    //    <UserContext.Consumer>
    //      {({ userid, login, logout }) => (
    <div>
      {currentUser ? (
        <Button variant="outlined" color="primary" onClick={logout}>
          LogOut
        </Button>
      ) : (
        <Container maxWidth="sm" className={classes.mainContainer}>
          <Paper
            className={classes.paperCotainer}
            elevation={0}
            variant="outlined"
            square
          >
            <Grid align="center">
              <Grid item xs={10}>
                <Logo style={{ fontSize: 50 }} />
                <Typography component="h1" variant="h5">
                  Welcome to ServControl
                </Typography>
                <Typography component="h1" variant="subtitle1">
                  To continue, Sign in with Google
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.buttomGradient}
                  onClick={() => {
                    login();
                  }}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      )}
    </div>
    //  )}
    //</UserContext.Consumer>
  );
}
export default Login;
