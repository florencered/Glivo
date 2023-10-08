import React, { useEffect } from "react";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, product, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {/* <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
      </div> */}

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container">
        {product &&
          product.map((item) => <ProductCard key={item._id} product={item} />)}
      </div>
    </>
  );
};

export default Home;
