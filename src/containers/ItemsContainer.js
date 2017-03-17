// @flow

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem, getServerItems} from '../actions/items';
import ItemsList from '../components/ItemsList';
import ItemInput from '../components/ItemInput';
import type {Item, StoreType} from '../types/definitions'

class ItemsContainer extends Component {
    // The type for the state
    state: StoreType;

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    render() {
        const {items} = this.props;

        return (
            <div>
                <ItemInput addItem={ this.props.actions.addItem }
                  getServerItems = {this.props.actions.getServerItems}
                />
                <ItemsList items={ items }/>
            </div>
        );
    }
}

ItemsContainer.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch: *) {
    return {
        actions: bindActionCreators({ addItem, getServerItems }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
