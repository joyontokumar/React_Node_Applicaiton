import React, { Component } from 'react';
import ShowUserData from './users/index';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <ShowUserData />
            </React.Fragment>
        )
    }
}
export default Home