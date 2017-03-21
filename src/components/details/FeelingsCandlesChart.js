// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import { VictoryCandlestick, VictoryChart, VictoryAxis } from 'victory';

class FeelingsCandlesChart extends React.Component {

    render() {
        const w: number = this.props.containerWidth //|| 0.75 * window.innerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth) //|| window.innerHeight + 100;
        const sz: number = Math.min(w,h);

        return (
            <div style={{width: `${sz}px`, height: `${sz}px`}}>
                <VictoryChart>
                <VictoryCandlestick
                  data={[
                    {},
                    {x: 'Sadness', open: 0.10, close: 0.15, high: 0.20, low: 0.05},
                    {x: 'Joy', open: 0.15, close: 0.20, high: 0.25, low: 0.10},
                    {x: 'Fear', open: 0.15, close: 0.20, high: 0.25, low: 0.10},
                    {x: 'Disgust', open: 0.15, close: 0.20, high: 0.25, low: 0.10},
                    {x: 'Anger', open: 0.15, close: 0.20, high: 0.25, low: 0.10},
                    {}
                  ]}
                  domain={{y:[0,1]}}
                />
                </VictoryChart>
            </div>
        );
    }

}

export default Dimensions()(FeelingsCandlesChart);
