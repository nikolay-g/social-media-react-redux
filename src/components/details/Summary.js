// @flow

import React, {PropTypes} from 'react';
import {Topic} from '../../types/definitions';
import "./Summary.css";

class Summary extends React.Component {
    props: {topic: Topic, containerWidth: number, containerHeight: number};

    render() {
        const {topic} = this.props;

        return (
            <table className="myTable">
                <tbody>
                <tr>
                    <th>Mentions:</th>
                    <td>{topic.mentions}</td>
                </tr>
                <tr>
                    <th>Sentiment:</th>
                    <td>{topic.sentiment.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Sadness:</th>
                    <td>{topic.sadness.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Joy:</th>
                    <td>{topic.joy.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Fear:</th>
                    <td>{topic.fear.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Disgust:</th>
                    <td>{topic.disgust.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Anger:</th>
                    <td>{topic.anger.avg.toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

Summary.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Summary;
