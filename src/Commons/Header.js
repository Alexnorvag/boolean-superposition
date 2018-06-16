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
            <div className="header rounded-3">
                <nav className="navbar navbar-light bg-light rounded">
                    <div className="col-4">
                        <Link to={'/home'}>
                            <p className="navbar-brand text-uppercase">Home</p>
                        </Link>
                    </div>
                    <div className="col-4 d-inline text-center">
                        <p className="date">{date}</p>
                        <p className="time">{time}</p>
                    </div>

                    <div className="col-4 d-flex justify-content-end">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-info"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">Enter your name</button>
                            <button
                                type="button"
                                className="btn btn-info dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <form className="px-1 py-0">
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword1">Name</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleDropdownFormPassword1"
                                            placeholder="Jhon"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormEmail1">Surname</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleDropdownFormEmail1"
                                            placeholder="Doe"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <a className="dropdown-item" href="/settings">Settings</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/logout">Log out</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;