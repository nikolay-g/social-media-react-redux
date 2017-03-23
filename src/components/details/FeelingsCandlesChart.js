// @flow

import React, {PropTypes} from 'react';
import {TagCloud} from "react-tagcloud";
import Dimensions from 'react-dimensions';
import {VictoryCandlestick, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';
import type {Topic} from '../../types/definitions';

class FeelingsCandlesChart extends React.Component {

    props: {topic: Topic, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth);
        const sz: number = 0.85*Math.min(w, h);
        const {topic} = this.props;
        const {sadness, joy, fear, disgust, anger} = topic;

        return (
            <div style={{width: `${sz}px`, height: `${sz}px`}}>
                <VictoryChart>
                    <VictoryCandlestick
                        data={[
                            {x: '', open: 0, close: 0, high: 0, low: 0},
                            {x: 'Sadness', open: sadness.qrt1, close: sadness.qrt3, high: sadness.max, low: sadness.min},
                            {x: 'Joy', open: joy.qrt1, close: joy.qrt3, high: joy.max, low: joy.min},
                            {x: 'Fear', open: fear.qrt1, close: fear.qrt3, high: fear.max, low: fear.min},
                            {x: 'Disgust', open: disgust.qrt1, close: disgust.qrt3, high: disgust.max, low: disgust.min},
                            {x: 'Anger', open: anger.qrt1, close: anger.qrt3, high: anger.max, low: anger.min},
                            {x: '', open: 0, close: 0, high: 0, low: 0}
                          ]}
                        domain={{y:[0,1]}}
                        theme={VictoryTheme.grayscale}
                        standalone={false}
                    />
                </VictoryChart>
            </div>
        );
    }
}

FeelingsCandlesChart.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Dimensions()(FeelingsCandlesChart);
