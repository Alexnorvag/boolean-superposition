import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Homepage from '../Homepage/Homepage';
import Superposition from '../Superposition/Superposition';
// import Moore from '../MachinePage/Moore'
// import Mealy from '../MachinePage/Mealy'
import './App.scss';

// Components
import { Root } from "./Root";

class App extends Component {
    render() {
        // const {footer} = this.props;

        return (
            <div className="app py-0">
                <Router>
                    <Root>
                        <main>
                            <Switch>
                                <Route path={'/home'} component={Homepage}/>
                                <Route path={'/superposition'} component={Superposition}/>
                                {/* <Route path={'/mealy'} component={Mealy}/> */}
                                <Route exact path={'/boolean-superposition'} component={() => <Redirect to={'/home'} />} />
                                <Route exact path={'/'} component={() => <Redirect to={'/home'} />} />
                            </Switch>
                        </main>
                    </Root>
                </Router>
            </div>
        );
    }
}

export default App;
