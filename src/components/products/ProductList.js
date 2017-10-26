import React from "react";
import './ProductList.css';
import ProductCard from "./ProductCard";
import {Grid, Row, Col} from 'react-flexbox-grid';
import ArrayUtils from "../../utils/ArrayUtils";
import Filter from "../filter/Filter";
import DataUtils from "../../utils/DataUtils";

const ProductList = props => {

    const renderProducts = products => products.map((product, i) =>
        <Col key={i} sm={6} md={4}><ProductCard {...product}/></Col>
    );

    return <div className="ProductList-wrapper">
        <Filter/>
        <Grid fluid>
            <Row>{renderProducts(props.products)}</Row>
        </Grid>
    </div>
};

ProductList.defaultProps = {
    products: ArrayUtils.times(Math.floor((Math.random() * 50) + 10), () => {
            return {
                name: DataUtils.randomName(),
                imageUrl: DataUtils.randomImage(),
                description: DataUtils.randomDescription(),
                rating: DataUtils.randomRating(),
                price: {value: DataUtils.randomPrice()}
            }
        }
    )
};

export default ProductList;