import React, { FunctionComponent, Component } from "react";
import styled from "styled-components";
import { CharacterTheme, ThemeType } from "./CharacterTheme";

const _ = require("lodash");



interface Props {

}

export const Sheet: FunctionComponent<Props> = (
    props: Props,
) => {
    return (
        <SheetContainer>
            <ThemeContainer>
                <CharacterTheme
                    name={"Out of Sight, Out of Mind"}
                    type={"Subversion"}
                    powers={
                        [{ "A": "Memory Proof" }]
                    }
                    weaknesses={
                        [{ "B": "No Personal History" }]
                    }
                />
            </ThemeContainer>
        </SheetContainer>
    );
};

const SheetContainer = styled.div`
    height: 100vh;
    display: grid
    grid-template-columns: 15px repeat(4, 1fr) 15px;
    grid-template-rows: 20px 1fr 20px;
    grid-column-gap: 5px;
`

const ThemeContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    display: grid;
    grid-template-rows: 50px 2fr 1fr 100px;
`