import React from "react";
import ProductCard from "./ProductCard";
import Filter from "../filter/Filter";
import {connect} from 'react-redux';
import {fetchProducts} from "../../actions";
import _ from 'lodash';

class ProductList extends React.Component {

    componentDidMount() {
        this.props.fetchProducts({query: this.props.filter.query});
    }

    renderProducts = products => _.map(products, (product, i) =>
        <div className="ProductList-item col-xs-12 col-sm-6 col-md-4" key={i}>
            <ProductCard {...product}/>
        </div>
    );

    render() {
        return <React.Fragment>
            <div className="App-shadow"/>
            <div className="ProductList-wrapper">

                <Filter/>
                <div className="container-fluid">
                    <div className="row">{this.renderProducts(this.props.products)}</div>
                </div>
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = ({products, filter}) => ({products, filter});

export default connect(mapStateToProps, {fetchProducts})(ProductList);