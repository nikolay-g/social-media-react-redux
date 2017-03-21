// @flow

import type { AppState } from '../types/definitions';
import rand from 'random-seed';

let rf = rand(100);

const stats = [
    { avg: 0.05, min: 0.01, max: 0.61, qrt1: 0.25, qrt3: 0.42 },
    { avg: 0.33, min: 0.12, max: 0.62, qrt1: 0.21, qrt3: 0.51 },
    { avg: 0.45, min: 0.23, max: 0.73, qrt1: 0.32, qrt3: 0.63 },
    { avg: 0.52, min: 0.34, max: 0.71, qrt1: 0.43, qrt3: 0.71 },
    { avg: 0.67, min: 0.45, max: 0.92, qrt1: 0.51, qrt3: 0.82 },
    { avg: 0.78, min: 0.56, max: 0.83, qrt1: 0.62, qrt3: 0.83 },
    { avg: 0.73, min: 0.67, max: 0.74, qrt1: 0.73, qrt3: 0.81 },
    { avg: 0.68, min: 0.64, max: 0.73, qrt1: 0.71, qrt3: 0.83 },
    { avg: 0.90, min: 0.62, max: 0.72, qrt1: 0.72, qrt3: 0.82 },
];
const statsLen = stats.length;

const initialState: AppState = {
    selection: {
        sources: ['fb', 'tw'],
        states: ['vic', 'nsw', 'qld', 'other'],
        timeframe: '24h',
        currentWord: null
    },
    keyWords: [
        {
            word: 'Home Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Car Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Motor Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'House Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Airfare Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Loan',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Mortgage',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Life Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Travel Ins.',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        },{
            word: 'Motorcycle Loan',
            mentions: rf(100),
            sentiment: stats[rf(statsLen)],
            sadness: stats[rf(statsLen)],
            joy: stats[rf(statsLen)],
            fear: stats[rf(statsLen)],
            disgust: stats[rf(statsLen)],
            anger: stats[rf(statsLen)]
        }
    ]
};

export default initialState;
