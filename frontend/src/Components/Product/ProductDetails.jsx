import React, { useEffect } from "react";
import "./ProductDetails.css";
import { getProductDetails } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const {loading, product} = useSelector((state) => state.productDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return <div>{product.name}</div>;
};

export default ProductDetails;
