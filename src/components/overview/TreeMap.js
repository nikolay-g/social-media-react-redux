// @flow

import React, {PropTypes} from 'react';
import type {KeyWord} from '../../types/definitions.js';
import {RadialChart, Treemap} from 'react-vis';
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import scale from '../../util/colors';
import 'react-vis/dist/style.css';

class TreeMap extends React.Component {

    props: {keyWords: KeyWord[], selectKeyWord: Function, mode: string, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = this.props.containerHeight;

        const children = this.props.keyWords.map(kw => {
            return {title: kw.word, color: scale(kw.sentiment.avg).hex(), size: kw.mentions}
        });

      return (
          <Treemap
                title={'Visualise sentiment'}
                width={w}
                height={h}
                padding={1}
                colorType="literal"
                data={{children}}
                animation={true}
                onLeafClick={this.onLeafClick.bind(this)}
                mode={this.props.mode}
            />
      )
    }

    onLeafClick(node:*, domEl:*) {
        this.props.selectKeyWord(node.data.title);
    }
}

TreeMap.propTypes = {
    keyWords: PropTypes.array.isRequired,
    selectKeyWord: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
};

export default Dimensions()(TreeMap);
