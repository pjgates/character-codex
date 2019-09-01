import React from "react";
import "./App.css";
import { SheetController } from "./components/mist/SheetController";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import ButtonAppBar from "./components/AppBar";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

const App: React.FC = () => {
    return (
        <Router basename={"/"}>
            <MuiThemeProvider theme={theme}>
                <Paper elevation={0} style={{backgroundColor: "#212121"}}>
                    <ButtonAppBar />
                    <Route
                        path={`/character-codex/`}
                        render={props => <CharacterRoute {...props} />}
                    />
                </Paper>
            </MuiThemeProvider>
        </Router>
    );
};

function CharacterRoute(props: any) {
    const queryString = require("query-string");
    var parsed = queryString.parse(props.location.search);
    return <SheetController playerName={parsed.name} />;
}

const Background = styled.div`
    /* background-color: #121212; */
`;

export default App;
