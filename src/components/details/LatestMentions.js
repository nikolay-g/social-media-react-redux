// @flow

import React, {PropTypes} from 'react';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

import './LatestMentions.css';

import type {Topic, Content} from '../../types/definitions';

class SampleData extends React.Component {
    props: {topic: Topic};

    render() {
        const { topic } = this.props;
        return (<List className={'SampleList'}>
                {
                    topic.contents.map(c => this.contentItem(c))
                }
                </List>);
    }

    contentItem(c: Content){
        return (
            <ListItem className={'SampleListItem'}
                      caption={<p>{c.text}</p>}
                      rightIcon={this.icon(c)}
                      avatar={c.avatar}
            />
        );
    }

    icon(c: Content){
        if (c.sentiment <= -0.5){
            return 'sentiment_very_dissatisfied';
        } else if(c.sentiment > -0.5 && c.sentiment <= -0.1) {
            return 'sentiment_dissatisfied';
        } else if(c.sentiment > -0.1 && c.sentiment <= 0.1) {
            return 'sentiment_neutral';
        } else if(c.sentiment > 0.2 && c.sentiment <= 0.5) {
            return 'sentiment_satisfied';
        } else {
            return 'sentiment_very_satisfied';
        }
    }
};

SampleData.propTypes = {
    topic: PropTypes.object.isRequired
};

export default SampleData;
