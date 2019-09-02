import { ThemeProps } from "./CharacterTheme.js";

const unflatten = require("unflatten");

type Creds = typeof import("../../creds.json");
const creds: Creds = require("../../creds.json");
const url = `https://sheets.googleapis.com/v4/spreadsheets/${creds.sheetId}/values:batchGet?ranges=Data!G1:O92&majorDimension=COLUMNS&key=${creds.apiKey}`;

type CharacterDataSchema = typeof import("../../assets/characterSchema.json");
export interface CharacterData {
    name?: string;
    player: string;
    mythos?: string;
    logos?: string;
    themes?: ThemeProps[];
}

export const fetchData = (callback: (data: CharacterData[]) => void) => {
    fetch(url)
        .then(response => response.json())
        .then(
            (data: any) => {
                const batchColumnValues = data.valueRanges[0].values;

                // Get Data
                const columns: CharacterDataSchema[] = [];
                for (let i = 1; i < batchColumnValues.length; i++) {
                    let columnObject: any = {};
                    for (let j = 0; j < batchColumnValues[i].length; j++) {
                        columnObject[`${batchColumnValues[0][j]}`] =
                            batchColumnValues[i][j];
                    }
                    columns.push(columnObject);
                }

                const characters: CharacterData[] = columns.map((column: any) => {
                    return unflatten(column);
                })

                callback(characters);
            },
            (error: any) => {
                console.log("error: ", error); // XX
            },
        );
};
