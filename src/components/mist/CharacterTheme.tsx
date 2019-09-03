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
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import theme from "../../theme";
import WhatshotIcon from "@material-ui/icons/Whatshot";

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
        const dense = true;
        const showSecondary = false;
        return (
            <Grid item xs={12} sm={6} lg={3}>
                <Card
                    elevation={2}
                    style={{ backgroundColor: "#333", minHeight: "400px" }}
                >
                    <Card elevation={3}>
                    <CustomCardHeader
                        style={{ padding: theme.spacing(2, 3) }}
                        avatar={
                            <Avatar aria-label="theme">
                                {this.props.type &&
                                    this.props.type.substring(0, 1)}
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
                    </Card>
                    <ThemeSummaryPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography style={{fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)"}}>Theme Summary</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <div>
                            <Typography variant="subtitle2">Mystery</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.</Typography><br/>
                            <Typography variant="subtitle2">Identity</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.</Typography>
                        </div>
                        </ExpansionPanelDetails>
                    </ThemeSummaryPanel>
                    <CardContent
                        style={{ margin: theme.spacing(1, 0), height: "100%" }}
                    >
                        <div style={{display: "flex", flexDirection: "column", height: "calc(100% - 152px)"}} >
                        <List dense={dense} style={{flex: "1 1 auto"}}>
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
                                                    tag={
                                                        this.props.powers &&
                                                        this.props.powers[key]
                                                    }
                                                    letter={key}
                                                    onClick={() => {
                                                        // Do something
                                                    }}
                                                />
                                            );
                                        }
                                    },
                                )}
                        </List>
                        <Divider
                            variant={"middle"}
                            style={{ margin: theme.spacing(1, 0) }}
                        />
                        <List dense={dense}>
                            {this.props.weaknesses &&
                                Object.keys(this.props.weaknesses).map(
                                    (key: string) => {
                                        if (
                                            this.props.weaknesses &&
                                            this.props.weaknesses[key].length >
                                                0
                                        ) {
                                            return (
                                                <Tag
                                                    key={key}
                                                    tag={
                                                        this.props.weaknesses &&
                                                        this.props.weaknesses[
                                                            key
                                                        ]
                                                    }
                                                    letter={key}
                                                />
                                            );
                                        }
                                    },
                                )}
                        </List>
                        <Typography>{this.props.improvements}</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
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

const ThemeSummaryPanel = styled(ExpansionPanel)`
    &.MuiExpansionPanel-root.Mui-expanded {
        margin-top: 0px;
    }

    &.MuiExpansionPanel-root.Mui-expanded::before {
        opacity: 1
    }
`

interface TagProps {
    letter: string;
    tag: string;
    burned?: boolean;
    onClick?: () => void;
}
const Tag: FunctionComponent<TagProps> = (props: TagProps) => {
    return (
        <ListItem>
            <ListItemAvatar style={{ color: "#757575" }}>
                <span>{props.letter}</span>
            </ListItemAvatar>
            <ListItemText primary={props.tag} />
            {props.onClick && (
                <Button>
                    <WhatshotIcon />
                </Button>
            )}
        </ListItem>
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
