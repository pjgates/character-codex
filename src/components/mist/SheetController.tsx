import React, { Component } from "react";
import styled from "styled-components";
import { Sheet } from "./Sheet";
import { fetchData, CharacterData } from "./DataController";
import { Card, CardContent } from "@material-ui/core";

const _ = require("lodash");

interface Props {
    playerName?: string;
}

interface State {
    characters?: CharacterData[];
}

export class SheetController extends Component<Props, State> {
    state: State = {};

    componentDidMount() {
        fetchData(data => {
            return this.setState({
                characters: data,
            });
        });
    }

    render() {
        let content: JSX.Element = <div></div>;
        if (!this.props.playerName) {
            content = (
                <ErrorBlock>
                    <CardContent>Please provide a player name</CardContent>
                </ErrorBlock>
            );
        } else if (this.state.characters) {
            let character: CharacterData | undefined;
            const index = _.findIndex(
                this.state.characters,
                (character: CharacterData) => {
                    return (
                        character.player.toLowerCase() === (this.props.playerName && this.props.playerName.toLowerCase())
                    );
                },
            );

            character = this.state.characters[index];
            if (character) {
                content = <Sheet character={character} />;
            } else {
                const name = this.props.playerName;
                const displayName =
                    name.charAt(0).toUpperCase() + name.slice(1);
                content = (
                    <ErrorBlock>
                        <CardContent>
                            Player '{displayName}' not found.
                        </CardContent>
                    </ErrorBlock>
                );
            }
        }

        return <>{content}</>;
    }
}

const ErrorBlock = styled(Card)`
    /* grid-row-start: 1;
    grid-column-start: 3;
    grid-column-end: 5; */
    align-self: center;
    justify-self: center;
`;
