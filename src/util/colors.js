// @flow

import chroma from 'chroma-js';

// From http://gka.github.io/palettes/#diverging|c0=darkred,deeppink,gainsboro|c1=gainsboro,lightgreen,teal|steps=13|bez0=1|bez1=1|coL0=1|coL1=1
const colorSpectrum = ['#8b0000','#b01532','#ce385c','#e25e81','#ec87a4','#ebb1c2','#dcdcdc','#9fd6aa','#7fc69a',
    '#65b690','#4ba389','#2f9184','#008080'];

const scale = chroma.scale(colorSpectrum).domain([-1, 1]);

export const bad = colorSpectrum[0];
export const good = colorSpectrum[colorSpectrum.length - 1];
export const ligthen = (color: string) => chroma.mix(color, 'white', 0.95);

export default scale;
