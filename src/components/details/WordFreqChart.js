// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import Dimensions from 'react-dimensions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';
import type {Topic} from '../../types/definitions';

class WordFreqChart extends React.Component {
    props: {topic: Topic, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth);
        const sz: number = Math.min(500, w, h);
        const {topic} = this.props;

        const data = topic.wordFreq;

        return (
            <BarChart width={sz} height={0.65 * sz} data={data} minTickGap={100}>
                <XAxis dataKey="word" interval={0} height={0.25 * sz} tick={<CustomizedAxisTick/>} />
                <YAxis interval={1} />
                <Bar dataKey='freq' fill='#8884d8'/>
            </BarChart>
        );
    }
}

class CustomizedAxisTick extends React.Component{
  render () {
    const {x, y, stroke, payload} = this.props;

   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-30)">{payload.value}</text>
      </g>
    );
  }
};

WordFreqChart.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Dimensions()(WordFreqChart);
