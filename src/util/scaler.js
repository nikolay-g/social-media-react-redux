// @flow

const scaler = (value: number, type: string) => {
    if(type === 'linear') {
        return value;
    } else if(type === 'log2') {
        return Math.log2(value)
    } else if(type === 'log10') {
        return Math.log10(value)
    } else if(type === 'sqrt') {
        return Math.sqrt(value)
    } else {
        throw `Unsupported scale type ${type}`;
    }
};

export default scaler;