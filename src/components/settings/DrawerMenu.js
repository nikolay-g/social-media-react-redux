// @flow

import React, {PropTypes} from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import RadioGroup from 'react-toolbox/lib/radio/RadioGroup';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';

import type {Selection} from '../types/definitions';
import './DrawerMenu.css';


const DrawerMenu = (props: {selection: Selection, updateSelection: Function}) => {

    const {selection, updateSelection} = props;

    return (
        <div className={"drawer-menu-props"}>
            <p>Source:</p>
            <Checkbox
                checked={selection.sources.includes('fb')}
                onChange={() => updateSelection(update(selection, 'sources', 'fb'))}
                label="Twitter"
            />
            <Checkbox
                checked={selection.sources.includes('tw')}
                onChange={() => updateSelection(update(selection, 'sources', 'tw'))}
                label="Facebook"
            />
            <br/>

            <p>Timeframe:</p>
            <RadioGroup name='time' value={selection.timeframe} onChange={(v) => updateSelection(update(selection, 'timeframe', v))}>
                <RadioButton label='Last 24h' value='24h'/>
                <RadioButton label='Last Week' value='lastweek'/>
                <RadioButton label='Last Month' value='lastmonth'/>
            </RadioGroup>
            <br/>

            <p>Location:</p>
            <Checkbox
                checked={selection.states.includes('vic')}
                onChange={() => updateSelection(update(selection, 'states', 'vic'))}
                label="VIC"
            />
            <Checkbox
                checked={selection.states.includes('nsw')}
                onChange={() => updateSelection(update(selection, 'states', 'nsw'))}
                label="NSW"
            />
            <Checkbox
                checked={selection.states.includes('qld')}
                onChange={() => updateSelection(update(selection, 'states', 'qld'))}
                label="QLD"
            />
            <Checkbox
                checked={selection.states.includes('other')}
                onChange={() => updateSelection(update(selection, 'states', 'other'))}
                label="Other"
            />
        </div>
    );
};

const update = (selection: Selection, key: string, value: *): Selection => {
    let copy: Selection = Object.assign({}, selection, {});
    if(copy[key].constructor === Array) {
        let array = copy[key];
        if(array.includes(value)) {
            var i = array.indexOf(value);
            if(i != -1) {
                array.splice(i, 1);
            }
        } else {
            array.push(value);
        }
    } else {
        copy[key] = value;
    }

    return copy
};

DrawerMenu.propTypes = {
    selection: PropTypes.object.isRequired
};

export default DrawerMenu;
