import React, {Component} from "react";
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import Modal from "../shared/Modal";
import ProductModal from './ProductModal'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProduct, deleteProduct, updateProduct, createProduct} from "../../actions";
import Users from '../../utils/Users';
import ConfirmDeleteModal from "./ConfirmDeleteModal";

class ProductDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deleteModalOpen: false,
            buyModalOpen: false,
            productModalOpen: this.props.newMode
        };
    }

    componentDidMount = () => !this.props.newMode && this.props.fetchProduct(this.props.match.params.id);

    renderNotAvailable = () => <b> (<span className="ProductDisplay-notAvailable">not available</span>)</b>;

    renderBuyButton = () => <React.Fragment>
        <button className="DemoShop-button" onClick={this.toggleBuyModal}>Buy</button>
        {this.state.buyModalOpen &&
        <Modal
            title="Thank you!"
            className="ProductDisplay-buyModal">
            <div className="ProductDisplay-BuyModalText">You successfully purchased this item.</div>
            <div className="ProductDisplay-buyModalButtonWrapper">
                <button className="DemoShop-button_big"
                        onClick={this.toggleBuyModal}>Continue shopping
                </button>
            </div>
        </Modal>}
    </React.Fragment>;

    renderAmountLeft = amount => <span>{` (${amount} left)`}</span>;

    toggleModal = name => this.setState({[name]: !this.state[name]});

    toggleDeleteModal = () => this.toggleModal('deleteModalOpen');

    toggleProductModal = () => this.toggleModal('productModalOpen');

    toggleBuyModal = () => this.toggleModal('buyModalOpen');

    handleAddMore = () => {
        const {name, image, rating, gender, description, categoryId, cost, count, soldCount} = this.props;
        this.props.updateProduct(this.props.id, {
            name,
            image,
            rating,
            gender,
            description,
            categoryId,
            cost,
            soldCount,
            count: count + 5
        }, null, this.toErrorPage);
    };

    confirmDelete = e => {
        e.preventDefault();
        this.props.deleteProduct(this.props.id, () => this.props.history.push('/'), this.toErrorPage)
    };

    handleEditProduct = product => this.props.updateProduct(product.id, product, this.toggleProductModal, this.toErrorPage);

    handleCancelNew = () => this.props.history.push("/");

    productCreatedCallback = id => {
        this.props.history.push(`/products/${id}`);
        this.toggleProductModal();
    };

    handleAddProduct = product => this.props.createProduct(product, this.productCreatedCallback, this.toErrorPage);

    toErrorPage = () => this.props.history.push('/500');

    isAvailable = () => this.props.count > 0;

    renderAdminActions = () => <div className="ProductDisplay-adminActions">
        You can <a className="DemoShop-link" href="javascript:void(0);" onClick={this.handleAddMore}>add 5 more</a>.
        You can also <a className="DemoShop-link" href="javascript:void(0);" onClick={this.toggleProductModal}>edit
        details</a> or <a className="DemoShop-link"
                          href="javascript:void(0);" onClick={this.toggleDeleteModal}>delete</a> them.
    </div>;

    renderProduct = () => <React.Fragment>
        <div className="App-shadow"/>
        <div className="ProductDisplay-wrapper">
            <div className="ProductDisplay-nav">
                <Link to='/'>Back</Link>
                <label>Category: <b>{this.props.category || 'Loading...'}</b></label>
            </div>
            <div className="ProductDisplay-card">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="ProductDisplay-ratedImage">
                            <img className="ProductDisplay-image"
                                 src={this.props.image}
                                 alt="No Picture found"/>
                            <Rating value={this.props.rating}/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <h2 className="ProductDisplay-name">{this.props.name}</h2>
                        <div className="ProductDisplay-details">
                            <div className="ProductDisplay-description">
                                {this.props.description}
                                {this.props.editMode && this.renderAdminActions()}
                            </div>
                            <div className="ProductDisplay-buy">
                                <div>
                                    <ProductPrice value={this.props.cost}/>
                                    {!this.isAvailable() && this.renderNotAvailable()}
                                    {this.isAvailable() && this.props.editMode && this.renderAmountLeft(this.props.count)}
                                </div>
                                {this.isAvailable() && this.renderBuyButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;

    render = () => <React.Fragment>
        {!this.props.id && !this.props.newMode && this.props.history.push('/403')}

        {!this.props.newMode && this.renderProduct()}

        {this.state.productModalOpen && !this.props.newMode &&
        <ProductModal cancelAction={this.toggleProductModal} submitAction={this.handleEditProduct} {...this.props}/>}

        {this.state.productModalOpen && this.props.newMode &&
        <ProductModal cancelAction={this.handleCancelNew} submitAction={this.handleAddProduct} {...this.props}/>}

        {this.state.deleteModalOpen &&
        <ConfirmDeleteModal cancelAction={this.toggleDeleteModal} confirmAction={this.confirmDelete}/>}
    </React.Fragment>;
}

ProductDisplay.defaultProps = {
    editMode: false
};

const mapStateToProps = ({products, categories, role}, ownProps) => {
    const product = products[ownProps.match.params.id];
    const editMode = role === Users.ADMIN;
    const newMode = editMode && ownProps.match.params.id === 'new';
    const props = {...product, editMode, newMode};
    if (product && categories[product.categoryId]) {
        props['category'] = product.gender + '/' + categories[product.categoryId].name;
    }
    return props;
};

const mapDispatchToProps = {fetchProduct, deleteProduct, updateProduct, createProduct};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);
