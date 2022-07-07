import { useState, createContext, useEffect } from "react";

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

// Remove item or decrease quantity
const removeCartItem = (cartItems, itemToRemove) => {
    const existingItems = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

    if (existingItems.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) => (
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    ));
}

const deleteCartItem = (cartItems, itemToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
}

// Context
export const CartContext = createContext({
    cartItems: [],
    cartIsOpen: false,
    cartQuantity: 0,
    setCartIsOpen: () => false,
    addItemToCart: () => [],
    deleteItemToCart: () => [],
    removeItemToCart: () => [],
});

// Provider
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => []);
    const [cartIsOpen, setCartIsOpen] = useState(() => false);
    const [cartQuantity, setCartQuantity] = useState(0);
    
    useEffect(() => {
        const totalItemsQ = cartItems.reduce((sum, currentItem) => sum + currentItem.quantity, 0);
        setCartQuantity(totalItemsQ);
    }, [cartItems])
    
    // Adding new item or existing one
    const addItemToCart = (itemToAdd) => {
        setCartItems(addNewItemToCart(cartItems, itemToAdd));
    };

    // Remove item or decrease quantity
    const removeItemToCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    }

    // Delete Item from cart
    const deleteItemToCart = (itemToDelete) => {
        setCartItems(deleteCartItem(cartItems, itemToDelete));
    };

    const value = {
        cartItems,
        cartQuantity,
        addItemToCart,
        cartIsOpen,
        setCartIsOpen,
        deleteItemToCart,
        removeItemToCart,
    };

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>;
};

