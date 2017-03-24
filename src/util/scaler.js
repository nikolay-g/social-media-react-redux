// @flow

const scaler = (value: number, type: string) => {
    let result = 0;

    if(value === 0) {
        return 0;
    } else if(type === 'linear') {
        result = value;
    } else if(type === 'log2') {
        result = Math.log2(value)
    } else if(type === 'log10') {
        result = Math.log10(value)
    } else if(type === 'sqrt') {
        result = Math.sqrt(value)
    } else {
        throw `Unsupported scale type ${type}`;
    }

    if(result === 0) {
        return 1;
    } else {
        return result;
    }
};

export default scaler;