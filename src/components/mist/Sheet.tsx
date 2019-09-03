import React, { FunctionComponent } from "react";
import { CharacterTheme } from "./CharacterTheme";
import styled from "styled-components";
import { CharacterData } from "./DataController";
import { Grid } from "@material-ui/core";

interface Props {
    character: CharacterData;
}

export const Sheet: FunctionComponent<Props> = (props: Props) => {
    return (
        <CharacterSheet>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            spacing={2}
        >
            {props.character.themes &&
                Object.values(props.character.themes).map((theme, index) => {
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
        </Grid>
        </CharacterSheet>
    );
};

export const CharacterSheet = styled.div`
    padding: 8px;
`;