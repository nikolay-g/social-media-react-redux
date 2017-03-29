// @flow

import React, {PropTypes} from 'react';
import {TagCloud} from "react-tagcloud";
import scale from '../../util/colors';
import scaler from '../../util/scaler'
import Dimensions from 'react-dimensions';
import type {Topic} from '../../types/definitions.js';
import _ from 'lodash';
import './WordCloud.css';

class WordCloud extends React.Component {

    props: {topics: Topic[], sizeScaleType: string, selectTopic: Function, containerWidth: number, containerHeight: number};

    render() {
        const {containerWidth, containerHeight} = this.props;

        let w: number = Math.min(1200, containerWidth);
        let h: number = containerHeight;

        const area = w * h;
        let minSize = 25;
        let maxSize = 60;
        if(area <= 470 * 350) {
            minSize = 11;
            maxSize = 22;
        } else if(area <= 640 * 420) {
            minSize = 15;
            maxSize = 35;
        } else if(area <= 900 * 300) {
            maxSize = 45;
        } else if(area <= 1000 * 400) {
            maxSize = 50;
        }
        console.log(w, h, minSize, maxSize)

        return (
            <TagCloud style={{width: `${w}px`, height: `${h}px`, margin: 'auto'}}
                      minSize={minSize}
                      maxSize={maxSize}
                      tags={this.data()}
                      className="simple-cloud"
                      disableRandomColor={true}
                      shuffle={false}
                      renderer={this.customRenderer.bind(this)}
                      onClick={this.onLeafClick.bind(this)}/>
        )
    }

    data() {
        const {sizeScaleType} = this.props;

        let data = this.props.topics.map(t => {
            return {value: t.word, color: scale(t.sentiment.avg).hex(), count: scaler(t.mentions, sizeScaleType)}
        });
        data = _.sortBy(data, 'count');
        for(let i = 0; i < data.length / 4; i++){
            let el = data.splice(i, 1);
            data.push(el[0]);
        }
        return data;
    }

    customRenderer(tag, size, color) {
        return <span className={"tag-cloud-tag"}
            key={tag.value}
            style={{
                  animation: 'blinker 3s linear infinite',
                  animationIterationCount: 1,
                  animationDuration: `1s`,
                  fontSize: `${size}px`,
                  color: `${color || 'green'}`,
                  margin: `0px 5px 2px 5px`,
                  padding: `0px 5px 2px 5px`,
                  display: 'inline-block',
                  cursor: 'pointer'
            }}>{tag.value}</span>
    };

    onLeafClick(tag: string) {
        this.props.selectTopic(tag.value);
    }
}

WordCloud.propTypes = {
    topics: PropTypes.array.isRequired,
    selectTopic: PropTypes.func.isRequired,
    sizeScaleType: PropTypes.string.isRequired
};

export default Dimensions()(WordCloud);
