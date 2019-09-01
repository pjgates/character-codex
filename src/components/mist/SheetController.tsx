import React, { Component } from "react";
import styled from "styled-components";
import { Sheet } from "./Sheet";
import { fetchData, CharacterData } from "./DataController";

const _ = require("lodash");

interface Props {
    playerName: string;
}

interface State {
    characters?: CharacterData[]
}

export class SheetController extends Component<Props, State> {

    state: State = {}

    componentDidMount() {
        fetchData((data) => {
            return this.setState({
                characters: data,
            })
        })
    }

    render() {
        let character: CharacterData | undefined;
        if (this.state.characters) {
            const index = _.findIndex(this.state.characters, (character: CharacterData) => {
                return character.player.toLowerCase() === this.props.playerName;
            });

            character = this.state.characters[index];
        }

        return (
            <SheetContainer>
                {character &&
                    <Sheet character={character} />
                }
            </SheetContainer>
        );
    }


};

const SheetContainer = styled.div`
    height: 100vh;
    display: grid
    grid-template-columns: 15px repeat(4, 1fr) 15px;
    grid-template-rows: 20px 1fr 20px;
    grid-column-gap: 5px;
`;
