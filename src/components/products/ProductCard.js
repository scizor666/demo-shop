import React from "react";
import Rating from "./Rating";
import ProductPrice from "./ProductPrice";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import {Link} from 'react-router-dom';
import {deleteProduct} from '../../actions';
import {connect} from 'react-redux';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {deleteModalOpen: false};
    }

    toggleDeleteModal = () => this.setState({deleteModalOpen: !this.state.deleteModalOpen});

    confirmDelete = e => {
        e.preventDefault();
        this.props.deleteProduct(this.props.id, () => {}, () => this.props.history.push('/500'));
    };

    render = () => <div className="ProductCard-wrapper">
        <div className={"ProductCard-imageContainer"}>
            <img className="ProductCard-image"
                 src={this.props.image}
                 alt="No Picture found"/>
            <Rating value={this.props.rating}/>
        </div>
        <div className="ProductCard-data">
            <div className="ProductCard-title">{this.props.name}</div>
            <div className="ProductCard-description">{this.props.description}</div>
            <div className='ProductCard-price'>
                <ProductPrice value={this.props.cost}/>
            </div>
            <div className="ProductCard-buttons">
                {this.props.editMode &&
                <button className="DemoShop-button" onClick={this.toggleDeleteModal}>Delete</button>}
                {this.state.deleteModalOpen &&
                <ConfirmDeleteModal cancelAction={this.toggleDeleteModal}
                                    confirmAction={this.confirmDelete}/>}
                <Link to={`/products/${this.props.id}`}>
                    <button className="DemoShop-button">Details</button>
                </Link>
            </div>
        </div>
    </div>;
}

export default connect(null, {deleteProduct})(ProductCard);