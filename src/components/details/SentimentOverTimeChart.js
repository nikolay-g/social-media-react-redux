// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import Dimensions from 'react-dimensions';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import _ from 'lodash';
import type {Topic} from '../../types/definitions';

class SentimentOverTimeChart extends React.Component {
    props: {topic: Topic, containerWidth: number, containerHeight: number};

    render() {
        const w: number = Math.min(700, this.props.containerWidth);
        const h: number = (this.props.containerHeight || this.props.containerWidth);
        const sz: number = 0.6 * Math.min(500, w, h);
        const {topic} = this.props;


        const data = topic.contents;
        const dateFormat = time => moment(time).format('DD/MMM/YY');

        const ats = data.map(d => d.at);
        const min = _.min(ats);
        const max = _.max(ats);
        const xDelta = 60 * 60 * 1000 + (max - min) / 10;
        const xDomain = [min - xDelta, max + xDelta];

        return (
            <ScatterChart width={0.8*w} height={0.8*sz} margin={{top: 1, left: 1}}>
                <XAxis dataKey={'at'} tickFormatter={dateFormat} domain={xDomain} />
                <YAxis dataKey={'sentiment'} domain={[-1, 1]}/>
                <Scatter data={data} fill='#8884d8'/>
            </ScatterChart>
        );
    }
}

SentimentOverTimeChart.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Dimensions()(SentimentOverTimeChart);
