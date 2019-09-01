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
                <Col sm={4}>
                    <ProductThumbnail key={product.id} product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default Items;
