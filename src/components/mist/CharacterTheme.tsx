import React, { FunctionComponent, Component } from "react";
import styled from "styled-components";
import {
    CardHeader,
    Card,
    Divider,
    Typography,
    CardContent,
    IconButton,
    Avatar,
    makeStyles,
    createStyles,
    Theme,
} from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import theme from "../../theme";

export interface ThemeProps {
    name?: string;
    type?: MythosTheme | LogosTheme;
    powers?: any;
    weaknesses?: any;
    improvements?: string[];
    column: number;
}
interface ThemeState {
    cardSide: "front" | "back";
}
export interface CharacterTag {
    [key: string]: string;
}

export type MythosTheme =
    | "Adaptation"
    | "Bastion"
    | "Conjuration"
    | "Destiny"
    | "Divination"
    | "Expression"
    | "Familiar"
    | "Mobility"
    | "Relic"
    | "Subversion";
export type LogosTheme =
    | "Defining Event"
    | "Defining Relationship"
    | "Mission"
    | "Personality"
    | "Possessions"
    | "Routine"
    | "Training"
    | "Turf";

export class CharacterTheme extends Component<ThemeProps, ThemeState> {
    state: ThemeState = {
        cardSide: "front",
    };

    render() {
        return (
            <CharacterThemeContainer
                column={this.props.column}
                elevation={2}
                style={{ backgroundColor: "#333" }}
            >
                <CustomCardHeader
                    style={{ padding: theme.spacing(5, 2) }}
                    avatar={
                        <Avatar aria-label="theme">
                            {this.props.type && this.props.type.substring(0, 1)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="edit" size="small">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.name}
                    subheader={this.props.type}
                />
                <CardContent style={{ margin: theme.spacing(3, 0) }}>
                    {/* Powers Section */}
                    <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                    >
                        {this.props.powers &&
                            Object.keys(this.props.powers).map(
                                (key: string) => {
                                    if (
                                        this.props.weaknesses &&
                                        this.props.powers[key].length > 0
                                    ) {
                                        return (
                                            <Tag
                                                key={key}
                                                letter={key}
                                                tag={
                                                    this.props.powers &&
                                                    this.props.powers[key]
                                                }
                                            />
                                        );
                                    }
                                },
                            )}
                    </Typography>
                    <Divider
                        variant={"middle"}
                        style={{ margin: theme.spacing(1, 0) }}
                    />
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {this.props.weaknesses &&
                            Object.keys(this.props.weaknesses).map(
                                (key: string) => {
                                    if (
                                        this.props.weaknesses &&
                                        this.props.weaknesses[key].length > 0
                                    ) {
                                        return (
                                            <Tag
                                                key={key}
                                                letter={key}
                                                tag={
                                                    this.props.weaknesses &&
                                                    this.props.weaknesses[key]
                                                }
                                            />
                                        );
                                    }
                                },
                            )}
                    </Typography>
                    <Typography>{this.props.improvements}</Typography>
                </CardContent>
            </CharacterThemeContainer>
        );
    }
}
interface CharacterThemeContainerProps {
    column: number;
}
const CharacterThemeContainer = styled(({ elevation, ...other }) => (
    <Card elevation={elevation} {...other} />
))`
    grid-column-start: ${(props: CharacterThemeContainerProps) =>
        props.column + 1};
    grid-row-start: 2;
    display: grid;
    grid-template-rows: 50px 2fr 1fr 100px;
`;

interface TagProps {
    letter: string;
    tag: string;
    burned?: boolean;
}
const Tag: FunctionComponent<TagProps> = (props: TagProps) => {
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
`;

const CustomCardHeader = styled(CardHeader)`
    && {
        > .MuiCardHeader-action {
            margin: 0px;
            align-self: center;
        }
    }
`;
