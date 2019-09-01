import "./header.scss";

import Cart from "./Cart";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const logo = require("../images/logo.png");

const Header = ({ siteTitle }) => (
    <header>
        <div className="d-flex justify-content-between p-3 mb-5">
            <h1 className="mb-0">
                <img src={logo} className="pr-2" height="60" />
                <Link to="/">{siteTitle}</Link>
            </h1>
            <Cart />
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
