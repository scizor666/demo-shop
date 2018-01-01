import React, {Component} from "react";
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import Modal from "../shared/Modal";
import ConfirmModal from "../shared/ConfirmModal";
import ProductEditModal from './ProductEditModal'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProduct} from "../../actions";

class ProductDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editModalOpen: false,
            makeUnavailableModalOpen: false,
            orderModalOpen: false
        }
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    renderNotAvailable = () => <b> (<span className="ProductDisplay-notAvailable">not available</span>)</b>;

    renderBuyButton = () => {
        return <div>
            <button className="DemoShop-button" onClick={this.toggleOrderModal}>Buy</button>
            {this.state.orderModalOpen ?
                <Modal
                    title="Thank you!"
                    className="ProductDisplay-buyModal">
                    <div className="ProductDisplay-BuyModalText">You successfully purchased this item.</div>
                    <div className="ProductDisplay-buyModalButtonWrapper">
                        <button className="DemoShop-button_big"
                                onClick={this.toggleOrderModal}>Continue shopping
                        </button>
                    </div>
                </Modal> : ''}
        </div>;
    };

    renderAmountLeft = amount => <span>{` (${amount} left)`}</span>;

    toggleModal = name => this.setState({[name]: !this.state[name]});

    toggleDeleteModal = () => this.toggleModal('makeUnavailableModalOpen');

    toggleEditModal = () => this.toggleModal('editModalOpen');

    toggleOrderModal = () => this.toggleModal('orderModalOpen');


    handleAddMore = () => alert("add 5 more");

    renderAdminActions = () => {
        return <div className="ProductDisplay-adminActions">
            You can <a className="DemoShop-link" href="javascript:void(0);" onClick={this.handleAddMore}>add 5 more</a>.
            You can also <a className="DemoShop-link" href="javascript:void(0);" onClick={this.toggleEditModal}>edit
            details</a> or <a className="DemoShop-link"
                              href="javascript:void(0);" onClick={this.toggleDeleteModal}>delete</a> them.

            {this.state.editModalOpen ?
                <ProductEditModal
                    cancelAction={this.toggleEditModal}
                    confirmAction={this.toggleEditModal}
                    {...this.props}/> : ''}

            {this.state.makeUnavailableModalOpen ?
                <ConfirmModal
                    title="Are you sure?"
                    cancelAction={this.toggleDeleteModal}
                    confirmAction={this.toggleDeleteModal}>
                    <div className="ProductDisplay-DeleteModalText">
                        <span>You are trying to delete this product.</span><br/>
                        <span>Are you sure you want this?</span>
                    </div>
                </ConfirmModal> : ''}
        </div>;
    };

    isAvailable = () => this.props.count > 0;

    render() {
        return <React.Fragment>
            <div className="App-shadow"/>
            <div className="ProductDisplay-wrapper">
                <div className="ProductDisplay-nav">
                    <Link to='/'>Back</Link>
                    <label>Category: <b>{this.props.category}</b></label>
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
                                    {this.props.editMode ? this.renderAdminActions() : ""}
                                </div>
                                <div className="ProductDisplay-buy">
                                    <div>
                                        <ProductPrice value={this.props.cost}/>
                                        {this.isAvailable() ? "" : this.renderNotAvailable()}
                                        {this.isAvailable() && this.props.editMode ? this.renderAmountLeft(this.props.count) : ""}
                                    </div>
                                    {this.isAvailable() ? this.renderBuyButton() : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

ProductDisplay.defaultProps = {
    category: "Man / Active Wear",
    editMode: false,
    categories: {
        activeWear: 'Active Wear',
        dresses: 'Dresses',
        jeans: 'Jeans',
        coats: 'Coats'
    },
    genders: {
        man: 'Man',
        woman: 'Woman',
        unisex: 'Unisex'
    }
};

const mapStateToProps = ({products}, ownProps) => ({...products[ownProps.match.params.id]});

export default connect(mapStateToProps, {fetchProduct})(ProductDisplay);
