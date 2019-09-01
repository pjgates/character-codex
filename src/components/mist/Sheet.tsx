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
            {Object.values(props.character.themes).map((theme, index) => {
                return (
                    <CharacterThemeContainer column={index + 1} key={index}>
                        <CharacterTheme
                            name={theme.name}
                            type={theme.type}
                            powers={theme.powers}
                            weaknesses={theme.weaknesses}
                        />
                    </CharacterThemeContainer>
                );
            })}
        </>
    );
};

interface CharacterThemeContainerProps {
    column: number;
}
const CharacterThemeContainer = styled.div`
    grid-column-start: ${(props: CharacterThemeContainerProps) => props.column + 1};
    grid-row-start: 2;
    display: grid;
    grid-template-rows: 50px 2fr 1fr 100px;
`;
