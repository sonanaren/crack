import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import BikeAdd from "./components/BikeAdd";
import BikeList from "./components/BikeList";
import BikeDetails from "./components/BikeDetails";
import BikeUpdate from "./components/BikeUpdate";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core/CssBaseline";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={BikeList} />
            <Route path="/add-bike" component={BikeAdd} />
            <Route path="/edit-bike/:id" component={BikeUpdate} />
            <Route path="/show-bike/:id" component={BikeDetails} />
          </div>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
