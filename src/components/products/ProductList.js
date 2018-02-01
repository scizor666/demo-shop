import React from "react";
import ProductCard from "./ProductCard";
import Filter from "../filter/Filter";
import ProductModal from './ProductModal';
import {connect} from 'react-redux';
import {fetchProducts, createProduct} from "../../actions";
import _ from 'lodash';
import Users from "../../utils/Users";

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productModalOpen: false}
    }

    componentDidMount() {
        this.props.fetchProducts({query: this.props.filter.query});
    }

    renderProducts = products => _.map(products, (product, i) =>
        <div className="ProductList-item col-xs-12 col-sm-6 col-md-4" key={i}>
            <ProductCard {...product} editMode={this.props.editMode}/>
        </div>
    );

    handleAddProduct = product => this.props.createProduct(product,
        id => this.props.history.push(`/products/${id}`), error => console.log(error));

    toggleProductModal = () => this.setState({productModalOpen: !this.state.productModalOpen});

    render() {
        return <React.Fragment>
            <div className="App-shadow"/>
            <div className="ProductList-wrapper">
                <div className="ProductList-actions">
                    {this.props.editMode &&
                    <button className="DemoShop-button" onClick={this.toggleProductModal}>Add Product</button>}
                    <Filter/>
                </div>
                <div className="container-fluid">
                    <div className="row">{this.renderProducts(this.props.products)}</div>
                </div>
            </div>
            {this.state.productModalOpen &&
            <ProductModal cancelAction={this.toggleProductModal} submitAction={this.handleAddProduct} {...this.props}/>}
        </React.Fragment>
    }
}

const mapStateToProps = ({products, filter, role}) => ({products, filter, editMode: role === Users.ADMIN});

export default connect(mapStateToProps, {fetchProducts, createProduct})(ProductList);