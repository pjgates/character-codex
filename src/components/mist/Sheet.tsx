import React, { FunctionComponent } from "react";
import { CharacterTheme } from "./CharacterTheme";
import styled from "styled-components";
import { CharacterData } from "./DataController";

interface Props {
    character: CharacterData;
}

export const Sheet: FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            {props.character.themes && Object.values(props.character.themes).map((theme, index) => {
                return (
                    <CharacterTheme
                        column={index + 1}
                        key={index}
                        name={theme.name}
                        type={theme.type}
                        powers={theme.powers}
                        weaknesses={theme.weaknesses}
                    />
                );
            })}
        </>
    );
};

export const CharacterSheet = styled.div`
    height: calc(100vh - 64px);
    display: grid
    grid-template-columns: 15px repeat(4, 1fr) 15px;
    grid-template-rows: 100px 1fr 20px;
    grid-column-gap: 10px;
`;