import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { SheetController } from "./components/mist/SheetController";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
            <Link to="/character-codex"> Home </Link>
            <Link to="/character-codex/peter"> Peter </Link>
            <Route path="/character-codex/:name" component={CharacterRoute}></Route>
        </div>
    </Router>,
    document.getElementById("root"),
);


function CharacterRoute(props: any) {
    return <SheetController playerName={props.match.params.name} />;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
