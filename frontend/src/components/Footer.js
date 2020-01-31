// import package and project file
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
//  import widget

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-area pt-3 pb-3 black-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white">&copy; 2020 All Rights Servered</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;