// @flow

import React, {PropTypes} from 'react';
import "./Summary.css";

class Summary extends React.Component {

    render() {
        return (
            <table className="myTable">
              <tr>
                <th>Mentions:</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Sentiment:</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Sadness:</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Joy:</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Fear:</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Disgust:</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Anger:</th>
                <td>1</td>
              </tr>
            </table>
        );
    }
}

export default Summary;
