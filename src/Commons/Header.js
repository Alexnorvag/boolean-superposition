import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'; // eslint-disable-line no-unused-vars
import './Header.scss';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            date: '',
            time: ''
        };
    }

    componentDidMount() {
        setInterval(() => {
            const week = [
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT'
            ];
            let currentDate = new Date();

            this.setState({
                date: this.clearPadding(currentDate.getFullYear(), 4) + '-' + this.clearPadding(currentDate.getMonth() + 1, 2) + '-' + this.clearPadding(currentDate.getDate(), 2) + ' ' + week[currentDate.getDay()],
                time: this.clearPadding(currentDate.getHours(), 2) + ':' + this.clearPadding(currentDate.getMinutes(), 2) + ':' + this.clearPadding(currentDate.getSeconds(), 2)
            })
        }, 1000)
    }

    clearPadding(num, digit) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }

    render() {
        const {date, time} = this.state;

        return (
            <div className="header">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="col-4">
                        <Link to={'/home'}>
                            <p className="navbar-brand text-uppercase">Home</p>
                        </Link>
                    </div>
                    <div className="col-4 d-inline text-center text-light">
                        <p className="date">{date}</p>
                        <p className="time">{time}</p>
                    </div>

                    <div className="col-4 d-flex justify-content-end">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">What is your name?</button>
                            <button
                                type="button"
                                className="btn btn-light dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <form className="px-1 py-0">
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="groupName">Name</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby="groupName"
                                            placeholder="Jhon"/>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="groupSurname">Surname</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby="groupSurname"
                                            placeholder="Doe"/>
                                    </div>

                                    <button type="button" className="btn btn-info btn-sm btn-block">Change user</button>
                                </form>
                                <div className="dropdown-divider"></div>
                                <div className="px-1">
                                    <Link to={'/settings'} className="dropdown-item text-center btn-sm btn-outline-info rounded">
                                        Settings
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;