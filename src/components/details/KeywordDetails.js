// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import { Surface, Radar, RadarChart, PolarGrid, Legend, Tooltip,
         PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { VictoryCandlestick, VictoryChart, VictoryAxis } from 'victory';
import FeelingsRadarChart from './FeelingsRadarChart';
import FeelingsCandlesChart from './FeelingsCandlesChart';
import Summary from './Summary';
// import {Container, Col, Row} from 'react-grid-system';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';

class KeywordDetails extends React.Component {

    state = {
      selectedIndex: 0
    };

    handleTabChange = (index) => {
      this.setState({selectedIndex: index});
    };

    render() {
        const w: number = this.props.containerWidth //|| 0.75 * window.innerWidth;
        const h: number = this.props.containerHeight || this.props.containerWidth  //|| window.innerHeight + 100;
        const sz: number = Math.min(w, h, 450);

        return (
            <section>
              <h3>Drill-Down</h3>
              <Tabs index={this.state.selectedIndex} onChange={this.handleTabChange} inverse>
                <Tab label='Overview'>
                    <Summary/>
                </Tab>
                <Tab label='Radar'>
                    <div style={{height: `${sz}px`}}>
                        <FeelingsRadarChart/>
                    </div>
                </Tab>
                <Tab label='Spectrum'>
                    <div style={{height: `${sz}px`}}>
                        <FeelingsCandlesChart/>
                    </div>
                </Tab>
              </Tabs>
            </section>
        );
    }
}

export default Dimensions()(KeywordDetails);
