import React, {Component} from 'react';
import logo from '../res/logo/logo.svg';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';// eslint-disable-line no-unused-vars
import './Footer.scss';

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            
        };
    }

    render() {

        return (
            <footer>
                <div className="row mx-0 my-1">
                    <div className="logo col-4 my-auto">
                        <div className="py-0">
                            <Link to={'/home'}>
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="copyright col-4 my-auto">
                        <p className=" text-center">Copyright © NRVG 2018. All rights reserved.</p>
                    </div>
                    <div className="social col-4 my-auto d-flex justify-content-end">
                        <p className="footer-links text-uppercase mr-3 my-auto">Contact Me</p>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href="https://github.com/Alexnorvag">
                            <i className="fab fa-github"></i>
                        </a>
                        <a rel="noreferrer noopener" target="_blank" href="https://vk.com/lexa_norvag">
                            <i className="fab fa-vk"></i>
                        </a>
                        <a rel="noreferrer noopener" target="_blank" href="https://t.me/Alexnorvag">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;