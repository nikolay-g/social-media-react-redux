// @flow

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {topic} from '../actions/selections';
import TreeMap from '../components/overview/TreeMap';
import WordCloud from '../components/overview/WordCloud';
import TopicDetails from '../components/details/TopicDetails';
import type {AppState} from '../types/definitions'

class ItemsContainer extends Component {

    props: {appState: AppState, chartType: String, actions:*};

    render() {
        const {topics, selection } = this.props.appState;
        const topic = selection.currentTopic && topics.find(topic => topic.word === selection.currentTopic);

        return (
            <div>
                { this.loadChart() }
                <TopicDetails topic={topic}/>
            </div>
        );
    }

    loadChart() {
        // const {appState} = this.props;
        const topics = this.props.appState.topics;
        const selectTopic = this.props.actions.topic;
        const {scale} = this.props.appState.selection;

        if (this.props.chartType === 'treemap') {
            return (<div style={{height: '35vh'}}>
                <TreeMap mode="binary" sizeScaleType={scale} topics={topics} selectTopic={selectTopic} />
            </div>);
        } else if (this.props.chartType === 'bubble_chart'){
            return (<div style={{height: '35vh'}}>
                <TreeMap mode="circlePack" sizeScaleType={scale} topics={topics} selectTopic={selectTopic} />
            </div>);
        } else if(this.props.chartType === 'cloud') {
            return (<div style={{height: '35vh'}}>
                <WordCloud topics={topics} sizeScaleType={scale} selectTopic={selectTopic}/>
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
        actions: bindActionCreators({ topic }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
