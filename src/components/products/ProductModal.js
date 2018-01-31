import React from 'react';
import Modal from "../shared/Modal";
import ProductForm from "./ProductForm";
import {fetchCategories, updateProduct} from "../../actions";
import {connect} from "react-redux";

class ProductModal extends React.Component {

    constructor(props) {
        super(props);
        const {name, image, rating, gender, description, categoryId, cost, count, soldCount} = props;
        this.state = {name, image, rating, gender, description, categoryId, cost, count, soldCount};
    }

    componentDidMount = () => this.props.fetchCategories();

    handleInputChange = e =>
        this.setState({[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        const errorCallback = e => console.log("render error message to the form instead", e);
        this.props.updateProduct(this.props.id, this.state, this.props.cancelAction, errorCallback);
    };


    render() {
        return <Modal className="ProductModal-wrapper"
                      title={`Edit "${this.props.name}"`}
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

const mapStateToProps = ({categories}) => ({categories: {...categories, '-1': {id: -1, name: 'None'}}});

export default connect(mapStateToProps, {fetchCategories, changeProduct: updateProduct})(ProductModal);