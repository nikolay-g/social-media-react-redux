// @flow

import React, {PropTypes} from 'react';
import {TagCloud} from "react-tagcloud";
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import type {KeyWord} from '../../types/definitions.js';
import './WordCloud.css';

class WordCloud extends React.Component {

    props: {keyWords: KeyWord[], selectKeyWord: Function, containerWidth: number, containerHeight: number};

    render() {

        const w: number = Math.min(450, this.props.containerWidth);
        const h: number = this.props.containerHeight;

        let scale = chroma.scale(['red', 'green']);

        const data = this.props.keyWords.map(kw => {
            return {value: kw.word, color: scale(kw.sentiment.avg).hex(), count: kw.mentions}
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
        return <span key={tag.value}
                     style={{
                  animation: 'blinker 3s linear infinite',
                  animationIterationCount: 1,
                  animationDuration: `${Math.sqrt(size)}s`,
                  fontSize: `${size}em`,
                  color: `${color || 'green'}`,
                  margin: `${Math.round(Math.log2(size) + 1)}px`,
                  padding: `${Math.round(Math.log2(size) + 1)}px`,
                  display: 'inline-block',
                  cursor: 'pointer'
            }}>{tag.value}</span>
    };

    onLeafClick(tag: string) {
        this.props.selectKeyWord(tag.value);
    }
}

WordCloud.propTypes = {
    keyWords: PropTypes.array.isRequired,
    selectKeyWord: PropTypes.func.isRequired,
    selectKeyWord: PropTypes.func.isRequired
};

export default Dimensions()(WordCloud);
