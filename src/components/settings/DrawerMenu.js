// @flow

import React, {PropTypes} from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import RadioGroup from 'react-toolbox/lib/radio/RadioGroup';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';

import type {Item} from '../types/definitions';
import './DrawerMenu.css';

type PropsType = {item: Item};

const DrawerMenu = () => {
    return (
        <div className={"drawer-menu-props"}>
            <p>Source:</p>
            <Checkbox
              checked={false}
              label="Twitter"
              ripple
            />
            <Checkbox
              checked={false}
              label="Facebook"
              ripple
            />
            <br/>

            <p>Timeframe:</p>
            <RadioGroup name='comic'>
              <RadioButton label='24h' value='24h' ripple/>
              <RadioButton label='Last Week' value='lastweek' ripple/>
              <RadioButton label='Last Month' value='lastmonth' ripple/>
            </RadioGroup>
            <br/>

            <p>Location:</p>
            <Checkbox
              checked={false}
              label="VIC"
              ripple
            />
            <Checkbox
              checked={false}
              label="NSW"
              ripple
            />
            <Checkbox
              checked={false}
              label="QLD"
              ripple
            />
            <Checkbox
              checked={false}
              label="Other"
              ripple
            />
        </div>
    );
};

export default DrawerMenu;
