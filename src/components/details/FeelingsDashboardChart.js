// @flow

import React, {PropTypes} from 'react';
import {PieChart, Pie, Legend, Tooltip} from 'recharts';
import Dimensions from 'react-dimensions';
import {Grid, Col, Row} from 'react-flexbox-grid';
import {good, bad, ligthen} from '../../util/colors';
import type {Topic} from '../../types/definitions';

class FeelingsDashboardChart extends React.Component {
    props: {topic: Topic, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = (this.props.containerHeight || this.props.containerWidth);
        const {topic} = this.props;

        const data02 = [{name: 'Group A', value: 0.7}, {name: '', value: 0.3}];

        const cx = Math.min(75, w / 6, h / 3);
        const cy = cx;
        const innerRadius = 0.65 * cx;
        const outerRadius = 0.85 * cx;

        return (
            <PieChart width={w} height={h}>
                <Pie cx={cx*1} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius}
                     data={this.data('sadness')}/>
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                    Sadness
                </text>

                <Pie cx={cx*3} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius}
                     data={this.data('joy')}/>
                <text x={cx*3} y={cy} textAnchor="middle" dominantBaseline="middle">
                    Joy
                </text>

                <Pie cx={cx*5} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius}
                     data={this.data('fear')}/>
                <text x={cx*5} y={cy} textAnchor="middle" dominantBaseline="middle">
                    Fear
                </text>

                <Pie cx={cx*1} cy={cy*3} innerRadius={innerRadius} outerRadius={outerRadius}
                     data={this.data('disgust')}/>
                <text x={cx} y={cy*3} textAnchor="middle" dominantBaseline="middle">
                    Disgust
                </text>

                <Pie cx={cx*3} cy={cy*3} innerRadius={innerRadius} outerRadius={outerRadius}
                     data={this.data('anger')}/>
                <text x={cx*3} y={cy*3} textAnchor="middle" dominantBaseline="middle">
                    Anger
                </text>
            </PieChart>
        );
    }

    data(propName: string) {
        const value: number = this.props.topic[propName].avg;
        const color = propName === 'joy' ? good : bad;

        return [
            {
                name: propName,
                value: value,
                fill: color
            },
            {
                name: '',
                value: 1 - value,
                fill: ligthen(color)
            }
        ];
    }
}

FeelingsDashboardChart.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Dimensions()(FeelingsDashboardChart);
