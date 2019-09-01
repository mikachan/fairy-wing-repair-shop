import "./header.scss";

import Cart from "./Cart";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
    <header>
        <div className="d-flex justify-content-center p-3 mb-4">
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: "#555",
                        textDecoration: `none`,
                        fontWeight: 300
                    }}
                >
                    {siteTitle}
                </Link>
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
