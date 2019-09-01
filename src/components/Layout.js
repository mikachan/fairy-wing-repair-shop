import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./layout.scss";

import { Col, Container, Row } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";

import CartProvider from "./CartProvider";
import Header from "./Header";
import ProductsProvider from "./ProductsProvider";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <ProductsProvider>
                    <CartProvider>
                        <Header siteTitle={data.site.siteMetadata.title} />
                        <Container>
                            <Row>
                                <Col>
                                    <main>{children}</main>
                                </Col>
                            </Row>
                        </Container>
                        <footer className="text-center">
                            © {new Date().getFullYear()}{" "}
                            {data.site.siteMetadata.title}
                        </footer>
                    </CartProvider>
                </ProductsProvider>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
