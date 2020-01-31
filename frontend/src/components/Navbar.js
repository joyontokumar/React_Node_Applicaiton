// import package and project file
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from "jquery";
import 'font-awesome/css/font-awesome.min.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
    }
    componentDidMount() {
        if ($(window).width() <= 991) {
            $("#mainMenu .nav-link").click(function () {
                $(".navbar-collapse").slideToggle("slow");
            });
            $("#mainMenu .navbar-toggler").click(function () {

                $(".navbar-collapse").slideToggle("slow");
            });

            $("ul#main-menu li a").click(function () {
                $(".navbar-collapse").slideToggle("slow");
            });

            $("ul.menu-button li a").click(function () {
                $(".navbar-collapse").slideToggle("slow");
            });
        }
        // sticky header
        var header = $('.header-area'),
            win = $(window);
        win.on('scroll', function () {
            var scroll = win.scrollTop();
            if (scroll < 120) {
                header.removeClass("sticky");
            } else {
                header.addClass("sticky");
            }
        });
    }
    render() {
        return (
            <nav id="mainMenu" className="navbar bg-dark  navbar-expand-lg navbar-light header-area">
                <div className="container">
                    <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand site-logo-header text-white">logo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                        aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navtogglerItemItem">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main-menu">
                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/`}>Users</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link-item" to={`${process.env.PUBLIC_URL}/create-user`}>Add User</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
