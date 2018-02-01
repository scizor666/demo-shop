import React from 'react';
import Modal from "../shared/Modal";
import ProductForm from "./ProductForm";
import {fetchCategories, updateProduct} from "../../actions";
import {connect} from "react-redux";

class ProductModal extends React.Component {

    constructor(props) {
        super(props);
        const {id, name, image, rating, gender, description, categoryId, cost, count, soldCount} = props;
        this.state = {id, name, image, rating, gender, description, categoryId, cost, count, soldCount};
    }

    componentDidMount = () => this.props.fetchCategories();

    handleInputChange = e =>
        this.setState({[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        this.props.submitAction(this.state)
    };


    render() {
        return <Modal className="ProductModal-wrapper"
                      title={this.props.name ? `Edit "${this.props.name}"` : this.props.addNewTitle}
                      {...this.props}>
            <ProductForm
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                cancelAction={this.props.cancelAction}
                categories={this.props.categories}
                genders={this.props.genders}
                {...this.state}/>
        </Modal>;
    }
}

ProductModal.defaultProps = {
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
    },
    addNewTitle: 'Add Product',
    id: null,
    name: '',
    image: '',
    rating: 1,
    gender: 'Unisex',
    description: '',
    categoryId: 1,
    cost: 1.00,
    count: 1,
    soldCount: 0
};

const mapStateToProps = ({categories}) => ({categories});

export default connect(mapStateToProps, {fetchCategories, changeProduct: updateProduct})(ProductModal);