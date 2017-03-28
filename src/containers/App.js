// @flow

import React, {PropTypes, Component} from 'react';
import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateSelection} from '../actions/selections';
import {getTopics} from '../actions/topics';
import type {Selection, Topic} from '../types/definitions';

import ItemsContainer from './ItemsContainer';
import DrawerMenu from '../components/settings/DrawerMenu';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import './App.css';

class App extends Component {
    state = {drawerActive: false, overviewChartType: 'cloud', snackBarActive: false};
    props: {selection: Selection, topics: Topic[], actions:*};

    componentDidMount(){
        this.props.actions.getTopics();
    }

    componentWillReceiveProps(nextProps: {selection: Selection, actions:*}){
        const currentTopic = this.props.selection.currentTopic;
        const nextTopic = nextProps.selection.currentTopic;
        if((nextTopic && !currentTopic) || (nextTopic && currentTopic !== nextTopic)) {
            this.setState({snackBarActive: true});
        }
    }

    toggleSnackBar(){
        this.setState({snackBarActive: !this.state.snackBarActive});
    }

    toggleDrawerActive = () => {
        this.setState({drawerActive: !this.state.drawerActive});
    };

    setOverviewChartType = (type: string) => {
        this.setState({overviewChartType: type});
    };

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive} onOverlayClick={ this.toggleDrawerActive }>
                    <DrawerMenu selection={this.props.selection} updateSelection={this.props.actions.updateSelection}/>
                </NavDrawer>
                <Panel>
                    {this.mainPanel()}
                </Panel>
            </Layout>
        );
    }

    mainPanel() {
        if (this.props.topics.length === 0) {
            return (<div style={{margin: '3em 3em 3em 3em'}}>
                <h3>Loading ...</h3>
                <ProgressBar mode='indeterminate' multicolor />
            </div>);
        } else {
            const toggleSnackBar = this.toggleSnackBar.bind(this);

            return (
                <div>
                    <AppBar leftIcon='settings' onLeftIconClick={ this.toggleDrawerActive }>
                        {this.navButton('cloud', 'cloud', 'Topic Cloud')}
                        {this.navButton('treemap', 'view_compact', 'Heatmap')}
                    </AppBar>

                    <div style={{ flex: 1, padding: '1.0rem' }}>
                        <ItemsContainer chartType={this.state.overviewChartType}/>
                    </div>
                    <Snackbar
                        action='Dismiss'
                        className={"SnackBar"}
                        label={<span>Topic: "<strong>{this.props.selection.currentTopic}</strong>"</span>}
                        onClick={toggleSnackBar}
                        ref='snackbar'
                        onTimeout={toggleSnackBar}
                        type='cancel'
                        active={this.state.snackBarActive}
                        timeout={60 * 1000}
                    />
                </div>
            );
        }
    }

    navButton(key: string, icon: string, label: string) {
        if (key === this.state.overviewChartType) {
            return <Button
                icon={icon}
                className="ChartNavButton"
                label={label}
                raised primary accent/>
        } else {
            return <Button icon={icon}
                           className="ChartNavButton"
                           label={label}
                           onClick={() => this.setOverviewChartType(key)}
                           inverse/>
        }
    }
}

App.propTypes = {
    selection: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    return {
        selection: state.selection,
        topics: state.topics
    };
}

function mapDispatchToProps(dispatch: *) {
    return {
        actions: bindActionCreators({updateSelection, getTopics}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
