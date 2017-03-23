// @flow

import React, {PropTypes} from 'react';
import type {Topic} from '../../types/definitions.js';
import {RadialChart, Treemap} from 'react-vis';
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import scale from '../../util/colors';
import 'react-vis/dist/style.css';
import './TreeMap.css';

class TreeMap extends React.Component {

    props: {topics: Topic[], selectTopic: Function, mode: string, containerWidth: number, containerHeight: number};

    render() {
        const w: number = this.props.containerWidth;
        const h: number = this.props.containerHeight;

        const children = this.props.topics.map(t => {
            return {title: t.word, color: scale(t.sentiment.avg).hex(), size: t.mentions}
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
        this.props.selectTopic(node.data.title);
    }
}

TreeMap.propTypes = {
    topics: PropTypes.array.isRequired,
    selectKeyWord: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
};

export default Dimensions()(TreeMap);
