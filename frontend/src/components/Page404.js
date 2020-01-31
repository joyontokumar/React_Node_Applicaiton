// import package and project file
import React, { Component } from "react";
import { Link } from "react-router-dom";
class NotFound extends Component {
    render() {
        return (
            <div className="error-page-content section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="error-wrapper text-center">
                                <h1>404 Page Not Found</h1>
                                <Link to={`${process.env.PUBLIC_URL}/`} className="error-btn">
                                    Back To Site
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NotFound;
