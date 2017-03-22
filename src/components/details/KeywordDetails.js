// @flow

import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import FeelingsRadarChart from './FeelingsRadarChart';
import FeelingsCandlesChart from './FeelingsCandlesChart';
import FeelingsDashboardChart from './FeelingsDashboardChart';
import Summary from './Summary';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import './KeywordDetails.css';

import type {KeyWord} from '../../types/definitions';

class KeywordDetails extends React.Component {

    state = {selectedIndex: 0};
    props: {keyWord: ?KeyWord, containerWidth: number, containerHeight: number};

    handleTabChange = (index) => {
        this.setState({selectedIndex: index});
    };

    render() {
        const keyWord = this.props.keyWord;

        if (keyWord) {
            return this.renderKeyWordDetails(keyWord);
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

    renderKeyWordDetails(keyWord: KeyWord) {
        const w: number = this.props.containerWidth;
        const h: number = this.props.containerHeight || this.props.containerWidth;
        const sz: number = Math.min(w, h, 450);

        return (
            <section>
                <p>Analysis for <strong>"{keyWord.word}" ... </strong></p>
                <Tabs index={this.state.selectedIndex} onChange={this.handleTabChange} inverse className={"ChartNavButton"}>
                    <Tab label='Stats'>
                        <Summary keyWord={keyWord}/>
                    </Tab>
                    <Tab label='Emo Radar'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsRadarChart keyWord={keyWord}/>
                        </div>
                    </Tab>
                    <Tab label='Emo Dashboard'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsDashboardChart keyWord={keyWord}/>
                        </div>
                    </Tab>
                    <Tab label='Emo Ranges'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsCandlesChart keyWord={keyWord}/>
                        </div>
                    </Tab>
                    <Tab label='Words'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsCandlesChart keyWord={keyWord}/>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        );
    }
}

KeywordDetails.propTypes = {
    keyWord: PropTypes.object
};

export default Dimensions()(KeywordDetails);
