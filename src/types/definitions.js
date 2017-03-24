// @flow

export type Stats = { avg: number, min: number, max: number, qrt1: number, qrt3: number };
export type WordFreq = { word: string, freq: number };
export type Content = { text: string, at: number, sentiment: number, avatar: ?string };
export type Topic = {
    word: string,
    mentions: number,
    sentiment: Stats,
    sadness: Stats,
    joy: Stats,
    fear: Stats,
    disgust: Stats,
    anger: Stats,
    wordFreq: WordFreq[],
    contents: Content[]
};
export type Selection = { sources: string[], brands: string[], timeframe: string, currentTopic: ?string, scale: string };
export type AppState = { selection: Selection, topics: Topic[] };
