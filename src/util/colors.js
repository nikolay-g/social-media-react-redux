// @flow

import chroma from 'chroma-js';

const colorSpectrum = ['#8b0000', '#b61d39', '#d84765', '#ef738b', '#fea0ac', '#ffd1c9',
    '#ffffe0', '#c7f0ba', '#9edba4', '#7ac696', '#5aaf8c', '#399785', '#008080'];

const scale = chroma.scale(colorSpectrum).domain([-1, 1]);

export const bad = colorSpectrum[0];
export const good = colorSpectrum[colorSpectrum.length - 1];
export const ligthen = (color: string) => chroma.mix(color, 'white', 0.95);

export default scale;
