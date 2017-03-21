// @flow

import React, {PropTypes} from 'react';
import { TagCloud } from "react-tagcloud";
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import './WordCloud.css';

class WordCloud extends React.Component {

    render() {

        const w: number = Math.min(400, this.props.containerWidth) //|| 0.75 * window.innerWidth;
        const h: number = this.props.containerHeight //|| window.innerHeight + 100;

        let scale = chroma.scale(['red', 'green']);
        const data = [
          { value: "Product A", count: 25, color: scale(0.1).hex() },
          { value: "Product B", count: 18 },
          { value: "Service X", count: 380 },
          { value: "Service Y", count: 28 },
          { value: "Branch Melb", count: 250 },
          { value: "Insurance XX", count: 33 },
          { value: "Insurance YY", count: 20 },
          { value: "CEO talk", count: 220 },
          { value: "Babel.js", count: 7 },
          { value: "ECMAScript", count: 25 },
          { value: "Jest", count: 15 },
          { value: "Mocha", count: 170 },
          { value: "React Native", count: 27 },
          { value: "React.js", count: 300, color: scale(0.9).hex() },
          { value: "TypeScript", count: 15 },
          { value: "Flow", count: 30 },
          { value: "NPM", count: 11 },
        ];

      return (
          <TagCloud style={{width: `${w}px`, height: `${h}px`, margin: 'auto'}}
                    minSize={0.5}
                    maxSize={3}
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
                  margin: `${Math.round(Math.log2(size) + 2)}px`,
                  padding: `${Math.round(Math.log2(size) + 2)}px`,
                  display: 'inline-block',
                  cursor: 'pointer'
            }}>{tag.value}</span>
    };

    onLeafClick(tag: string) {
        alert(`'${tag.value}' was selected!`)
        debugger;
        // TODO
    }
}

export default Dimensions()(WordCloud);
