// import package and project file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// css link
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/style.css';

// component import
import Header from './components/Navbar';
import NotFound from "./components/Page404";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import CreateUser from './components//pages/users/CreateUser';
import UpdateUser from './components//pages/users/UpdateUser';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
                <Route path={`${process.env.PUBLIC_URL}/create-user`} component={CreateUser} />
                <Route path={`${process.env.PUBLIC_URL}/update-user/:id`} component={UpdateUser} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
        </React.Fragment>
    </BrowserRouter>

    , document.getElementById('root'));
