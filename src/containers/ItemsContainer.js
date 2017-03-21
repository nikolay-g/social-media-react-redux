// @flow

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectKeyWord} from '../actions/selections';
import TreeMap from '../components/overview/TreeMap';
import WordCloud from '../components/overview/WordCloud';
import KeywordDetails from '../components/details/KeywordDetails';
import type {AppState} from '../types/definitions'

class ItemsContainer extends Component {

    props: {appState: AppState, chartType: String, actions:*};

    render() {
        const {keyWords, selection } = this.props.appState;
        const keyWord = selection.currentWord && keyWords.find( word => word.word === selection.currentWord);

        return (
            <div>
                { this.loadChart() }
                <KeywordDetails keyWord={keyWord}/>
            </div>
        );
    }

    loadChart() {
        // const {appState} = this.props;
        const keyWords = this.props.appState.keyWords;
        const selectKeyWordCallBack = this.props.actions.selectKeyWord;

        if (this.props.chartType === 'treemap') {
            return (<div style={{height: '45vh'}}>
                <TreeMap mode="binary" keyWords={keyWords} selectKeyWord={selectKeyWordCallBack} />
            </div>);
        } else if (this.props.chartType === 'bubble_chart'){
            return (<div style={{height: '45vh'}}>
                <TreeMap mode="circlePack" keyWords={keyWords} selectKeyWord={selectKeyWordCallBack} />
            </div>);
        } else if(this.props.chartType === 'cloud') {
            return (<div style={{height: '45vh'}}>
                <WordCloud keyWords={keyWords} selectKeyWord={selectKeyWordCallBack}/>
            </div>)
        }
    }
}

ItemsContainer.propTypes = {
    appState: PropTypes.object.isRequired,
    chartType: PropTypes.string.isRequired
};

function mapStateToProps(state, props) {
    return {
        appState: state,
        chartType: props.chartType
    };
}

function mapDispatchToProps(dispatch: *) {
    return {
        actions: bindActionCreators({ selectKeyWord }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
