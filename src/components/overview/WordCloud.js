// @flow

import React, {PropTypes} from 'react';
import {TagCloud} from "react-tagcloud";
import scale from '../../util/colors';
import scaler from '../../util/scaler'
import Dimensions from 'react-dimensions';
import type {Topic} from '../../types/definitions.js';
import './WordCloud.css';

class WordCloud extends React.Component {

    props: {topics: Topic[], sizeScaleType: string, selectTopic: Function, containerWidth: number, containerHeight: number};

    render() {

        const w: number = Math.min(450, this.props.containerWidth);
        const h: number = this.props.containerHeight;
        const {sizeScaleType} = this.props;

        const data = this.props.topics.map(t => {
            return {value: t.word, color: scale(t.sentiment.avg).hex(), count: scaler(t.mentions, sizeScaleType)}
        });

        return (
            <TagCloud style={{width: `${w}px`, height: `${h}px`, margin: 'auto'}}
                      minSize={0.5}
                      maxSize={2.5}
                      tags={data}
                      className="simple-cloud"
                      disableRandomColor={true}
                      shuffle={false}
                      renderer={this.customRenderer.bind(this)}
                      onClick={this.onLeafClick.bind(this)}/>
        )
    }

    customRenderer(tag, size, color) {
        return <span className={"tag-cloud-tag"}
            key={tag.value}
            style={{
                  animation: 'blinker 3s linear infinite',
                  animationIterationCount: 1,
                  animationDuration: `1s`,
                  fontSize: `${size}em`,
                  color: `${color || 'green'}`,
                  margin: `0px 5px 1px 5px`,
                  padding: `px 5px 1px 5px`,
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
