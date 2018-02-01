import React from "react";
import ProductCard from "./ProductCard";
import Filter from "../filter/Filter";
import ProductModal from './ProductModal';
import {connect} from 'react-redux';
import {fetchProducts, createProduct, setPageNumber} from "../../actions";
import _ from 'lodash';
import Users from "../../utils/Users";

class ProductList extends React.Component {

    static perPage = 6;

    constructor(props) {
        super(props);
        this.state = {
            productModalOpen: false,
            isLoading: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.onPaginatedSearch();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onPaginatedSearch = () => {
        const page = this.props.page + 1;
        this.setState({isLoading: true});
        const successCallback = () => {
            this.setState({isLoading: false});
            this.props.setPageNumber(page);
        };
        this.props.fetchProducts({...this.props.filter, page}, successCallback);

    };

    onScroll = () => {
        const productsCount = Object.keys(this.props.products).length;
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight + 400 && // @TODO this logic is buggy!
            !this.state.isLoading && productsCount === this.props.page * ProductList.perPage) {
            this.onPaginatedSearch();
        }
    };

    renderProducts = products => _.map(products, (product, i) =>
        <div className="ProductList-item col-xs-12 col-sm-6 col-md-4" key={i}>
            <ProductCard {...product} editMode={this.props.editMode}/>
        </div>
    );

    handleAddProduct = product => this.props.createProduct(product,
        id => this.props.history.push(`/products/${id}`), () => this.props.history.push('/500'));

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

const mapStateToProps = ({products, filter, page, role}) => ({products, filter, page, editMode: role === Users.ADMIN});

export default connect(mapStateToProps, {fetchProducts, createProduct, setPageNumber})(ProductList);