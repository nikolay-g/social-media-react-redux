// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import { Surface, Radar, RadarChart, PolarGrid, Legend, Tooltip,
         PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type {KeyWord} from '../../types/definitions';

class FeelingsRadarChart extends React.Component {
    props: {keyWord: KeyWord, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth);
        const sz: number = 0.8 * Math.min(w,h);
        const {keyWord} = this.props;

        const data = [
            { subject: 'Sadness', A: keyWord.sadness.avg, fullMark: 1 },
            { subject: 'Joy', A: keyWord.joy.avg, fullMark: 1 },
            { subject: 'Fear', A: keyWord.fear.avg, fullMark: 1 },
            { subject: 'Disgust', A: keyWord.disgust.avg, fullMark: 1 },
            { subject: 'Anger', A: keyWord.anger.avg, fullMark: 1 }
        ];

        return (
            <RadarChart outerRadius={sz/3.5} cx={sz/2.5} cy={sz/2.5} width={sz} height={sz} data={data}>
              <Radar name="Feelings" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis domain={[0,1]}/>
            </RadarChart>
        );
    }
}

FeelingsRadarChart.propTypes = {
    keyWord: PropTypes.object.isRequired
};

export default Dimensions()(FeelingsRadarChart);
