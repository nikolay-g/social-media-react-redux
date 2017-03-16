// @flow

import React, {PropTypes} from 'react';
import ItemDisplay from './ItemDisplay';
import type {Item} from '../types/definitions.js';

const ItemList = ({items}: *) => {
    return (
        <div>
            {
                items.map((item: Item) => <ItemDisplay key={ item.id } item={ item }/>)
            }
        </div>);
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;
