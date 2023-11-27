import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(0);

    const value = {cart, setCart};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;