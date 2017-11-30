import React, {Component} from "react";
import './ProductDisplay.css';
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import DataUtils from "../../utils/DataUtils";
import Modal from "../shared/Modal";
import ConfirmModal from "../shared/ConfirmModal";
import ProductEditModal from './ProductEditModal'

class ProductDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editModalOpen: false,
            makeUnavailableModalOpen: false,
            orderModalOpen: false
        }
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

    renderDaysLeft = amount => <span>{` (${amount} day${amount === 1 ? "" : "s"} left)`}</span>;

    toggleModal = name => this.setState({[name]: !this.state[name]});

    toggleDeleteModal = () => this.toggleModal('makeUnavailableModalOpen');

    toggleEditModal = () => this.toggleModal('editModalOpen');

    toggleOrderModal = () => this.toggleModal('orderModalOpen');


    handleAddMore = () => alert("add 5 more");

    renderAdminActions = () => {
        return <div className="ProductDisplay-adminActions">
            You can <a href="javascript:void(0);" onClick={this.handleAddMore}>add 5 more</a>.
            You can also <a href="javascript:void(0);" onClick={this.toggleEditModal}>edit details</a> or <a
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
                    <span>You are trying to delete this product.</span>
                    {' '}
                    <div>Are you sure you want this?</div>
                </div>
            </ConfirmModal> : ''}
        </div>;
    };

    isAvailable = () => this.props.daysLeft > 0;

    render() {
        return <div className="ProductDisplay-wrapper">
            <div className="ProductDisplay-nav">
                <a>Back</a>
                <label>Category: <b>{this.props.category}</b></label>
            </div>
            <div className="ProductDisplay-card">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="ProductDisplay-ratedImage">
                            <img className="ProductDisplay-image"
                                 src={this.props.imageUrl}
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
                                    <ProductPrice {...this.props.price}/>
                                    {this.isAvailable() ? "" : this.renderNotAvailable()}
                                    {this.isAvailable() && this.props.editMode ? this.renderDaysLeft(this.props.daysLeft) : ""}
                                </div>
                                {this.isAvailable() ? this.renderBuyButton() : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

ProductDisplay.defaultProps = {
    category: "Man / Active Wear",
    daysLeft: Math.floor(Math.random() * 2),
    imageUrl: DataUtils.randomImage(),
    rating: DataUtils.randomRating(),
    name: DataUtils.randomName(),
    description: DataUtils.randomDescription(),
    price: {},
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

export default ProductDisplay;
