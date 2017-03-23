// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import Dimensions from 'react-dimensions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type {Topic} from '../../types/definitions';

class WordFreqChart extends React.Component {
    props: {topic: Topic, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth);
        const sz: number = 0.75 * Math.min(w,h);
        const {topic} = this.props;

        const data = topic.wordFreq;

        return (
            <BarChart width={sz} height={sz} data={data}>
                <XAxis dataKey="word"/>
                <YAxis/>
                <Bar dataKey='freq' fill='#8884d8'/>
            </BarChart>
        );
    }
}

WordFreqChart.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Dimensions()(WordFreqChart);
