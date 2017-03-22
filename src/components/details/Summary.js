// @flow

import React, {PropTypes} from 'react';
import {KeyWord} from '../../types/definitions';
import "./Summary.css";

class Summary extends React.Component {
    props: {keyWord: KeyWord, containerWidth: number, containerHeight: number};

    render() {
        const {keyWord} = this.props;

        return (
            <table className="myTable">
                <tbody>
                <tr>
                    <th>Mentions:</th>
                    <td>{keyWord.mentions}</td>
                </tr>
                <tr>
                    <th>Sentiment:</th>
                    <td>{keyWord.sentiment.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Sadness:</th>
                    <td>{keyWord.sadness.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Joy:</th>
                    <td>{keyWord.joy.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Fear:</th>
                    <td>{keyWord.fear.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Disgust:</th>
                    <td>{keyWord.disgust.avg.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Anger:</th>
                    <td>{keyWord.anger.avg.toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

Summary.propTypes = {
    keyWord: PropTypes.object.isRequired
};

export default Summary;
