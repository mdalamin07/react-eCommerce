import { useReducer, useContext, createContext, useEffect } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartData");
    // if (localCartData === []) {
    //     return [];
    // }else {
    //     return JSON.parse(localCartData)
    // }
    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return[];
    return parsedData;
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}
const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product }})
    };
    // increase the product
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id});
    }
    // decrease the product
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id});
    }
    // remove item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id})
    }
    // clear cart data
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"})
    }
    // add the data in localstorage
    useEffect(() => {
        // dispatch({ type: "CART_TOTAL_ITEM"});
        // dispatch({ type: "CART_TOTAL_PRICE"});
        dispatch({ type: "CART_ITEM_PRICE_TOTAL"});
        localStorage.setItem("cartData", JSON.stringify(state.cart))
    },[state.cart]);
    return (
        <CartContext.Provider 
            value={{
                ...state, 
                addToCart, 
                removeItem, 
                clearCart, 
                setIncrease, 
                setDecrease, 
            }}>
            {children}
        </CartContext.Provider>
    )
};

const useCartContext = () => {
    return useContext(CartContext);
}
export {CartProvider, useCartContext};