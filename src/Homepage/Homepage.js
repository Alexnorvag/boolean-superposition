import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'; // eslint-disable-line no-unused-vars
import './Homepage.scss';

class Homepage extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {

        return (
            <div className="homepage content">
                <Link to={'/superposition'}>
                    Go to algorithm
                </Link>
            </div>
        );
    }
}

export default Homepage;