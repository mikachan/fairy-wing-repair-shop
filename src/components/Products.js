import { Col, Row } from "react-bootstrap";
import React, { useContext } from "react";

import ProductThumbnail from "./ProductThumbnail";
import { ProductsContext } from "./ProductsProvider";

const Items = () => {
    const { listProducts } = useContext(ProductsContext);
    const products = listProducts();
    return (
        <Row>
            {products.map(product => (
                <Col key={product.id} sm={4}>
                    <ProductThumbnail product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default Items;
