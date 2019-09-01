import "./product-thumbnail.scss";

import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const noImageFound = require("../images/no-image-found.jpg");

const ProductThumbnail = ({ product }) => {
    console.log(product);
    return (
        <div key={product.id} className="product-box p-4 rounded">
            <Link
                to={`/product/${product.slug}`}
                style={{ textDecoration: "none" }}
            >
                <div>
                    <div className="text-center">
                        {product.localFiles && (
                            <Img
                                fluid={
                                    product.localFiles[0].childImageSharp.fluid
                                }
                                alt={product.name}
                            />
                        )}
                        {!product.localFiles && <img src={noImageFound} />}
                    </div>
                    <div className="mt-3 d-flex justify-content-between">
                        <div className="font-weight-bold">{product.name}</div>
                        <div>£{product.skus[0].price / 100}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

ProductThumbnail.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductThumbnail;
