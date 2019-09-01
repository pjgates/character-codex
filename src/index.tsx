import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { SheetController } from "./components/mist/SheetController";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
    <Router basename={"/"}>
        <div>
            <Route path={`/character-codex/`}
                render={ (props) => <CharacterRoute {...props} />}
            />
        </div>
    </Router>,
    document.getElementById("root"),
);

function CharacterRoute(props: any) {
    const queryString = require('query-string');
    var parsed = queryString.parse(props.location.search);
    if (parsed.name) {
        return <SheetController playerName={parsed.name} />;
    } else {
        return null;
    }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
