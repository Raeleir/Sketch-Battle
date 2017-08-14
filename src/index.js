import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";
import HomeContainer from "./containers/home-container";

import LoginContainer from "./containers/log-in-container";
import SignupContainer from "./containers/sign-up-container";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={HomeContainer}/>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route exact path="/signup" component={SignupContainer}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));