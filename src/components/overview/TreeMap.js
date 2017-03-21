// @flow

import React, {PropTypes} from 'react';
import type {Item} from '../../types/definitions.js';
import {RadialChart, Treemap} from 'react-vis';
import chroma from 'chroma-js';
import Dimensions from 'react-dimensions';
import 'react-vis/dist/style.css';

class TreeMap extends React.Component {

    render() {
        let scale = chroma.scale(['red', 'green']);
        const w: number = this.props.containerWidth //|| 0.75 * window.innerWidth;
        const h: number = this.props.containerHeight //|| window.innerHeight + 100;
        // let sz = Math.min(this.props.containerWidth, h);

        const myData = {
            color: 0,
           children: [
            {title: "Insurance A", color: scale(0.9).hex(), size: 3938},
            {title: "Branch Sidney", color: "red", size: 3812},
            {title: "Banky", color: "red", size: 714},
            {title: "Retail", color: "red", size: 6714},
            {title: "Product X", color: "red", size: 6714},
            {title: "Product Y", color: "red", size: 6714},
            {title: "Product Z", color: "red", size: 674},
            {title: "Product A", color: "red", size: 614},
         ]
        };

      return (
          <Treemap
                title={'Visualise sentiment'}
                width={w}
                height={h}
                padding={1}
                colorType="literal"
                data={myData}
                animation={true}
                onLeafClick={this.onLeafClick.bind(this)}
                mode={this.props.mode}
            />
      )
    }

    onLeafClick(node:*, domEl:*) {
        debugger;
        // TODO
    }
}

export default Dimensions()(TreeMap);
