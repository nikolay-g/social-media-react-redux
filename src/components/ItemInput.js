// @flow

import React, {PropTypes, Component} from 'react';

class ItemInput extends Component {
    // The type for the state
    onAddItemClick: Function;
    onLoadFromSrvClick: Function;

    constructor(props: any) {
        super(props);

        this.onAddItemClick = this.onAddItemClick.bind(this);
        this.onLoadFromSrvClick = this.onLoadFromSrvClick.bind(this);
    }

    onAddItemClick() {
        const id: any = document.getElementById('id');
        const name: any = document.getElementById('name');

        this.props.addItem({
            id: id.value,
            name: name.value
        });

        id.value = "";
        name.value = "";

        id.focus();
    }

    onLoadFromSrvClick() {
        this.props.getServerItems();
    }

    render() {
        return (
            <div>
                <input id="id" type="text" placeholder="Id"/>
                <input id="name" type="text" placeholder="Name"/>
                <button onClick={this.onAddItemClick}>Add Item</button>
                <button onClick={this.onLoadFromSrvClick}>Load from Server</button>
            </div>
        );
    }
}

ItemInput.propTypes = {
    addItem: PropTypes.func.isRequired,
    getServerItems: PropTypes.func.isRequired
};

export default ItemInput;
