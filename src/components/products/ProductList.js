import React from "react";
import ProductCard from "./ProductCard";
import Filter from "../filter/Filter";
import Loading from "../shared/Loading";
import {connect} from 'react-redux';
import {fetchProducts, createProduct, setPageNumber} from "../../actions";
import _ from 'lodash';
import Users from "../../utils/Users";

class ProductList extends React.Component {

    static perPage = 5;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            deleteModalOpen: false
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
        const offset = 500;
        if (window.innerHeight + window.scrollY >= this.scrollHeight() - offset &&
            !this.state.isLoading && productsCount === this.props.page * ProductList.perPage) {
            this.onPaginatedSearch();
        }
    };

    scrollHeight = () => Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    renderProducts = products => _.map(products, (product, i) =>
        <div className="ProductList-item col-xs-12 col-sm-6 col-md-4" key={i}>
            <ProductCard {...product} editMode={this.props.editMode} history={this.props.history}/>
        </div>
    );

    toAddNewProduct = () => this.props.history.push('/products/new');

    render() {
        return <React.Fragment>
            <div className="App-shadow"/>
            <div className="ProductList-wrapper">
                <div className="ProductList-actions">
                    {this.props.editMode &&
                    <button className="DemoShop-button" onClick={this.toAddNewProduct}>Add Product</button>}
                    <Filter/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {this.renderProducts(this.props.products)}
                        {this.state.isLoading &&
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <Loading/>
                        </div>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = ({products, filter, page, role}) => ({products, filter, page, editMode: role === Users.ADMIN});

export default connect(mapStateToProps, {fetchProducts, createProduct, setPageNumber})(ProductList);