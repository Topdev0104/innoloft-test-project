import React, { useEffect } from "react";
import ProductInfoView from './ProductInfoView'

import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getProducts } from "../../redux/actions/product";

const ProductView = ({
  product,
  getProducts
}) => {
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <ProductInfoView product={product}></ProductInfoView>
  )
}



ProductView.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  product: state.products.product
})

export default connect(mapStateToProps, { getProducts })(ProductView);