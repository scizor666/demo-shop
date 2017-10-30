import React, {Component} from "react";
import './ProductDisplay.css';
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import DataUtils from "../../utils/DataUtils";
import {Col, Grid, Row} from "react-flexbox-grid";
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

    renderOrderButton = () => {
        return <div>
            <button className="DemoShop-button" onClick={this.toggleOrderModal}>Order</button>
            <Modal
                title="Thank you!"
                show={this.state.orderModalOpen}>
                <div className="ProductDisplay-modalContent">
                    <span>The item was added to your order.</span>
                    <button className="DemoShop-button ProductDisplay-orderModalButton"
                            onClick={this.toggleOrderModal}>Continue order
                    </button>
                </div>
            </Modal>
        </div>;
    };

    renderDaysLeft = amount => <span>{` (${amount} day${amount === 1 ? "" : "s"} left)`}</span>;

    toggleModal = name => this.setState({[name]: !this.state[name]});

    toggleMakeUnavailableModal = () => this.toggleModal('makeUnavailableModalOpen');

    toggleEditModal = () => this.toggleModal('editModalOpen');

    toggleOrderModal = () => this.toggleModal('orderModalOpen');


    handleAddMoreDays = () => alert("5 More days added");

    renderAdminActions = () => {
        return <div className="ProductDisplay-adminActions">
            You can make it available for <a href="javascript:void(0);" onClick={this.handleAddMoreDays}>5 more days</a>.
            You can also <a href="javascript:void(0);" onClick={this.toggleEditModal}>edit</a> details or <a
            href="javascript:void(0);" onClick={this.toggleMakeUnavailableModal}>make unavailable</a>.

            <ProductEditModal
                cancelAction={this.toggleEditModal}
                confirmAction={this.toggleEditModal}
                show={this.state.editModalOpen}
                {...this.props}/>

            <ConfirmModal
                title="Thank you!"
                cancelAction={this.toggleMakeUnavailableModal}
                confirmAction={this.toggleMakeUnavailableModal}
                show={this.state.makeUnavailableModalOpen}>
                <div className="ProductDisplay-modalContent">
                    <span>You're trying to make the current item unavailable for order.</span>
                    {' '}
                    <div>Are you sure you want this?</div>
                </div>
            </ConfirmModal>
        </div>;
    };

    isAvailable = () => this.props.daysLeft > 0;

    render() {
        return <div className="ProductDisplay-wrapper">
            <div className="ProductDisplay-nav">
                <label>Back</label>
                <label>Category: {this.props.category}</label>
            </div>
            <Grid className="ProductDisplay-card">
                <Row>
                    <Col sm={6} className="ProductDisplay-ratedImage">
                        <img className="ProductDisplay-image"
                             src={this.props.imageUrl}
                             alt="No Picture found"/>
                        <Rating value={this.props.rating}/>
                    </Col>
                    <Col sm={6}>
                        <h2 className="ProductDisplay-name">{this.props.name}</h2>
                        <div className="ProductDisplay-details">
                            <div className="ProductDisplay-description">
                                {this.props.description}
                                {this.props.editMode ? this.renderAdminActions() : ""}
                            </div>
                            <div className="ProductDisplay-order">
                                <div>
                                    <ProductPrice {...this.props.price}/>
                                    {this.isAvailable() ? "" : this.renderNotAvailable()}
                                    {this.isAvailable() && this.props.editMode ? this.renderDaysLeft(this.props.daysLeft) : ""}
                                </div>
                                {this.isAvailable() ? this.renderOrderButton() : ""}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}

ProductDisplay.defaultProps = {
    category: "Thin Crust/Less Calories",
    daysLeft: Math.floor(Math.random() * 2),
    imageUrl: DataUtils.randomImage(),
    rating: DataUtils.randomRating(),
    name: DataUtils.randomName(),
    description: DataUtils.randomDescription(),
    price: {},
    editMode: false,
    categories: {
        pan: 'Pan',
        thickCrust: 'Thick Crust',
        thinCrust: 'Thin Crust',
        vegan: 'Vegan',
        glutenFree: 'Gluten Free'
    },
    sizes: {
        classic: 'Classic',
        large: 'Large',
        xLarge: 'X-Large'
    }
};

export default ProductDisplay;
