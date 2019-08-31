import React, { FunctionComponent, Component } from "react";
import styled from "styled-components";

const _ = require("lodash");

export interface ThemeProps {
    name: string;
    type: ThemeType;
    powers: CharacterTag[];
    weaknesses: CharacterTag[];
    improvements?: string[];
}
interface ThemeState {
    cardSide: "front" | "back";
}
interface CharacterTag {
    [key: string]: string
}

export type ThemeType =
    "Adaptation" |
    "Bastion" |
    "Conjuration" |
    "Destiny" |
    "Divination" |
    "Expression" |
    "Familiar" |
    "Mobility" |
    "Relic" |
    "Subversion" |
    "Defining Event" |
    "Defining Relationship" |
    "Mission" |
    "Personality" |
    "Possessions" |
    "Routine" |
    "Training" |
    "Turf";

export class CharacterTheme extends Component<ThemeProps, ThemeState> {
    state: ThemeState = {
        cardSide: "front"
    }

    render() {
        return (
            <>
                {/* Header Section */}
                <div>
                    {this.props.name}
                </div>
                {/* Powers Section */}
                <div>
                {
                    this.props.powers.map((tag: CharacterTag) => {
                        const key = Object.keys(tag)[0]
                        return (
                            <Tag
                                key={key}
                                letter={key}
                                tag={tag[key]}
                            />
                        )
                    })
                }
                </div>
                {/* Weaknesses Section */}
                <div>
                {
                    this.props.weaknesses.map((tag: CharacterTag) => {
                        const key = Object.keys(tag)[0]
                        return (
                            <Tag
                                key={key}
                                letter={key}
                                tag={tag[key]}
                            />
                        )
                    })
                }
                </div>
                {/* Improvements Section */}
                <div>
                    {this.props.improvements}
                </div>
            </>
        );
    }
    
};
const ThemeBox = styled.div`

`
const ThemeHeader = styled.div`
    grid-row-start: 1;
`
const ThemePowers = styled.div`
    grid-row-start: 2;
`
const ThemeWeakness = styled.div`
    grid-row-start: 3;
`
const ThemeImprove = styled.div`
    grid-row-start: 4;
`


interface TagProps {
    letter: string;
    tag: string;
    burned?: boolean;
}
const Tag: FunctionComponent<TagProps> = (
    props: TagProps,
) => {
    return (
        <TagLayout>
            <div>{props.letter}</div>
            <div>{props.tag}</div>
            <div></div>
        </TagLayout>
    );
};
const TagLayout = styled.div`
    display: grid
    grid-template-columns: 20px 1fr 20px;
    grid-column-gap: 5px;
    height: 20px;
`


