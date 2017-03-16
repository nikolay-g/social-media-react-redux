// @flow

import React, {PropTypes} from 'react';
import type {Item} from '../types/definitions';

type PropsType = {item: Item};

const ItemDisplay = ({item}: PropsType) => {
    return (
        <div>
            {item.id}, {item.name}
        </div>
    );
};

ItemDisplay.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemDisplay;
