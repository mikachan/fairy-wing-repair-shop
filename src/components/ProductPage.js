import "./product-page.scss";

import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { CartContext } from "./CartProvider";
import Img from "gatsby-image";
import { ProductsContext } from "./ProductsProvider";
import PropTypes from "prop-types";

const ProductPage = ({ productId }) => {
    const { products } = useContext(ProductsContext);
    const { add, toggle } = useContext(CartContext);

    const product = products[productId];

    return (
        <Container className="product-page rounded p-5">
            <Row>
                <Col sm={6}>
                    {product.localFiles && (
                        <Img
                            fluid={product.localFiles[0].childImageSharp.fluid}
                        />
                    )}
                </Col>
                <Col sm={6}>
                    <h2>{product.name}</h2>
                    <div>{product.caption}</div>
                    <div>{product.description}</div>
                    <Button
                        className="my-3"
                        onClick={() => {
                            add(product.skus[0].id);
                            toggle(true);
                        }}
                    >
                        Add To Bag
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

ProductPage.propTypes = {
    productId: PropTypes.string.isRequired
};

export default ProductPage;
