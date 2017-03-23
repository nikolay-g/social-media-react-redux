// @flow

import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import FeelingsRadarChart from './FeelingsRadarChart';
import FeelingsCandlesChart from './FeelingsCandlesChart';
import FeelingsDashboardChart from './FeelingsDashboardChart';
import WordFreqChart from './WordFreqChart';
import Summary from './Summary';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import './TopicDetails.css';

import type {Topic} from '../../types/definitions';

class TopicDetails extends React.Component {

    state = {selectedIndex: 0};
    props: {topic: ?Topic, containerWidth: number, containerHeight: number};

    handleTabChange = (index) => {
        this.setState({selectedIndex: index});
    };

    render() {
        const topic = this.props.topic;

        if (topic) {
            return this.renderTopicDetails(topic);
        } else {
            return (
                <div>
                    <br/>
                    <br/>
                    <h3>Select a topic for analysis ...</h3>
                </div>
            );
        }
    }

    renderTopicDetails(topic: Topic) {
        const w: number = this.props.containerWidth;
        const h: number = this.props.containerHeight || this.props.containerWidth;
        const sz: number = Math.min(w, h, 450);

        return (
            <section>
                <Tabs index={this.state.selectedIndex} onChange={this.handleTabChange} inverse className={"ChartNavButton"}>
                    <Tab label='Stats'>
                        <Summary topic={topic}/>
                    </Tab>
                    <Tab label='Emo Radar'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsRadarChart topic={topic}/>
                        </div>
                    </Tab>
                    <Tab label='Emo Board'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsDashboardChart topic={topic}/>
                        </div>
                    </Tab>
                    <Tab label='Emo Ranges'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsCandlesChart topic={topic}/>
                        </div>
                    </Tab>
                    <Tab label='Words'>
                        <div style={{height: `${sz}px`}}>
                            <WordFreqChart topic={topic}/>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        );
    }
}

TopicDetails.propTypes = {
    topic: PropTypes.object
};

export default Dimensions()(TopicDetails);
