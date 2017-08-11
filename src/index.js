import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./index.css";
import HomeContainer from "./containers/home-container";
import Navbar from "./components/navbar";
import LoginContainer from "./containers/log-in-container";
import SignupContainer from "./containers/sign-up-container";



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route exact path="/login" component={LoginContainer}/>
                            <Route exact path="/signup" component={SignupContainer}/>
                        </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));