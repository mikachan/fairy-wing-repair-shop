import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import ProductsProvider from "./ProductsProvider";
import CartProvider from "./CartProvider";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./layout.scss";

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
                        <Container>
                            <Row>
                                <Col>
                                    <Header
                                        siteTitle={data.site.siteMetadata.title}
                                    />
                                    <div
                                        style={{
                                            margin: `0 auto`,
                                            maxWidth: 960,
                                            padding: `0px 1.0875rem 1.45rem`,
                                            paddingTop: 0
                                        }}
                                    >
                                        <main>{children}</main>
                                        <footer>
                                            © {new Date().getFullYear()}, Built
                                            with
                                            {` `}
                                            <a href="https://www.gatsbyjs.org">
                                                Gatsby
                                            </a>
                                        </footer>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
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
