// @flow

export type Stats = { avg: number, min: number, max: number, qrt1: number, qrt3: number };
export type KeyWord = {
    word: string,
    mentions: number,
    sentiment: Stats,
    sadness: Stats,
    joy: Stats,
    fear: Stats,
    disgust: Stats,
    anger: Stats
};
export type Selection = { sources: string[], states: string[], timeframe: string, currentWord: ?string };
export type AppState = { selection: Selection, keyWords: KeyWord[] };
