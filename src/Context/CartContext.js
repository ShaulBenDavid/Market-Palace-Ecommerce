import { useState, createContext } from "react";

const addNewItemToCart = (cartItems, itemToAdd) => {
    // check if these item all ready exist in cart
    const existingItems = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

    // if the item exist
    if (existingItems) {
        return cartItems.map((cartItem) => (
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ))
    }


// default
    return [...cartItems, {...itemToAdd, quantity: 1 }];

}

const deleteCartItem = (cartItems, itemToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
}

// Context
export const CartContext = createContext({
    cartItems: [],
    cartIsOpen: false,
    setCartIsOpen: () => false,
    addItemToCart: () => [],
    deleteItemToCart: () => [],
});

// Provider
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => []);
    const [cartIsOpen, setCartIsOpen] = useState(() => false);
    
    
    // Adding new item or existing one
    const addItemToCart = (itemToAdd) => {
        setCartItems(addNewItemToCart(cartItems, itemToAdd));
    };

    // Delete Item from cart
    const deleteItemToCart = (itemToDelete) => {
        setCartItems(deleteCartItem(cartItems, itemToDelete));
    };

    const value = {
        cartItems,
        addItemToCart,
        cartIsOpen,
        setCartIsOpen,
        deleteItemToCart,
    };

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>;
};

