// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import { Surface, Radar, RadarChart, PolarGrid, Legend, Tooltip,
         PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class FeelingsRadarChart extends React.Component {

    render() {
        const w: number = this.props.containerWidth //|| 0.75 * window.innerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth) //|| window.innerHeight + 100;
        const sz: number = Math.min(w,h);

        const data = [
            { subject: 'Sadness', A: 0.5, fullMark: 1 },
            { subject: 'Joy', A: 0.2, fullMark: 1 },
            { subject: 'Fear', A: 0.3, fullMark: 1 },
            { subject: 'Disgust', A: 0.4, fullMark: 1 },
            { subject: 'Anger', A: 0.5, fullMark: 1 }
        ];

        return (
            <RadarChart outerRadius={sz/3} width={sz} height={sz} data={data}>
              <Radar name="Feelings" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis domain={[0,1]}/>
            </RadarChart>
        );
    }

}

export default Dimensions()(FeelingsRadarChart);
