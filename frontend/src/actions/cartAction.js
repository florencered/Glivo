import axios from "axios";
import { ADD_TO_CART } from "../constants/cartConstant";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:4000/api/v1/lawyer/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.lawyer._id,
      name: data.lawyer.name,
      price: data.lawyer.price,
      image: data.lawyer.images.url,
      stock: data.lawyer.supply,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
