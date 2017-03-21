// @flow

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem, getServerItems} from '../actions/items';
import TreeMap from '../components/overview/TreeMap';
import WordCloud from '../components/overview/WordCloud';
import KeywordDetails from '../components/details/KeywordDetails';
import {Container, Col, Row} from 'react-grid-system';
import type {Item, StoreType} from '../types/definitions'

class ItemsContainer extends Component {
    // The type for the state
    state: StoreType;

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    render() {
        const {items, chartType} = this.props;

        return (
            <div>
                { this.loadChart(chartType) }
                <KeywordDetails/>
            </div>
        );
    }

    loadChart(chartType: string) {
        if (chartType === 'treemap') {
            return (<div style={{height: '45vh'}}> <TreeMap mode="binary"/> </div>);
        } else if (chartType === 'bubble_chart'){
            return (<div style={{height: '45vh'}}> <TreeMap mode="circlePack"/> </div>);
        } else if(chartType === 'cloud') {
            return (<div style={{height: '45vh'}}> <WordCloud /> </div>)
        }
    }
}

ItemsContainer.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    chartType: PropTypes.string
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
