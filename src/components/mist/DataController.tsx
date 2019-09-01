import { ThemeProps, CharacterTag } from "./CharacterTheme.js";

const _ = require("lodash");
const { flow, map, partialRight: pr, spread, merge } = _;

type Creds = typeof import("../../creds.json");
const creds: Creds = require("../../creds.json");
const url = `https://sheets.googleapis.com/v4/spreadsheets/${creds.sheetId}/values:batchGet?ranges=Data&majorDimension=ROWS&key=${creds.apiKey}`;

type CharacterDataSchema = typeof import("../../assets/characterSchema.json");
export interface CharacterData {
    name: string;
    player: string;
    mythos: string;
    logos: string;
    themes: ThemeProps[];
}

export const fetchData = (callback: (data: CharacterData[]) => void) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const batchRowValues = data.valueRanges[0].values;

            // Get Data
            const rows: CharacterDataSchema[] = [];
            for (let i = 1; i < batchRowValues.length; i++) {
                let rowObject: any = {};
                for (let j = 0; j < batchRowValues[i].length; j++) {
                    rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                }
                rows.push(rowObject);
            }

            // Parse Data
            const characters = rows.map((row: CharacterDataSchema) => {
                const parse = flow(
                    pr(map, (value: any, key: string) => {
                        let attribute = key.split("__")[0];

                        if (!key.includes("themes")) {
                            return {
                                [attribute]: value,
                            };
                        } else {
                            attribute = "themes";
                            const themeIndex = key.split("__")[1];
                            const themeKey = key.split("__")[2];
                            if (
                                key.includes("powers") ||
                                key.includes("weaknesses")
                            ) {
                                value = getTags(value);
                            }

                            return {
                                [attribute]: {
                                    [themeIndex]: {
                                        [themeKey]: value,
                                    },
                                },
                            };
                        }
                    }),
                    spread(merge),
                );
                const character: CharacterData = parse(row);

                return character;
            });

            callback(characters);
        });
};

export const getTags = (value: any) => {
    const tagStrings: string[] = value.split(";");
    var tags = tagStrings.reduce((memo: CharacterTag[], tagString: string) => {
        const letter: string = tagString.split(":")[0].trim();
        const tag: string = tagString.split(":")[1];
        if (letter !== "") {
            memo.push({ [letter]: tag });
        }
        return memo;
    }, []);
    value = tags;
    return value;
};
