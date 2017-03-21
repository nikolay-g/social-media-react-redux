// @flow

import type { AppState } from '../types/definitions';
import rand from 'random-seed';

let rf = rand(100);

const stats = [
    { avg: 0.2, min: 0.05, max: 0.6, qrt1: 0.25, qrt3: 0.4 },
    { avg: 0.3, min: 0.1, max: 0.6, qrt1: 0.2, qrt3: 0.5 },
    { avg: 0.4, min: 0.2, max: 0.7, qrt1: 0.3, qrt3: 0.6 },
    { avg: 0.5, min: 0.3, max: 0.7, qrt1: 0.4, qrt3: 0.7 },
    { avg: 0.6, min: 0.4, max: 0.9, qrt1: 0.5, qrt3: 0.8 },
    { avg: 0.7, min: 0.5, max: 0.8, qrt1: 0.6, qrt3: 0.8 },
    { avg: 0.7, min: 0.6, max: 0.7, qrt1: 0.7, qrt3: 0.8 }
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
