// @flow

import React, {PropTypes} from 'react';
import Dimensions from 'react-dimensions';
import FeelingsRadarChart from './FeelingsRadarChart';
import FeelingsCandlesChart from './FeelingsCandlesChart';
import Summary from './Summary';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';

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
                    <hr/>
                    <p>Select a keyword for analysis ...</p>
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
                <hr/>
                <h3>Drill-Down Analysis for "{keyWord.word}"</h3>
                <Tabs index={this.state.selectedIndex} onChange={this.handleTabChange} inverse>
                    <Tab label='Overview'>
                        <Summary keyWord={keyWord}/>
                    </Tab>
                    <Tab label='Radar'>
                        <div style={{height: `${sz}px`}}>
                            <FeelingsRadarChart keyWord={keyWord}/>
                        </div>
                    </Tab>
                    <Tab label='Spectrum'>
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
