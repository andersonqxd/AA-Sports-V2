import { createContext, useState } from "react";

export const CartContext = createContext();

export function cartProvider({children}) {
    const [cart, setCart] = useState([]);

    function addCard(product) {
        setCart((prev) =>{
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map( (item) => 
                    item.id === product.id ? {...item, quatity:item.quatity + 1}:item )
            }
            return[...prev, {...product, quntity:1}]
        })
    }

    function removeFromCart(id) {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    function updateQuantity(id, amount) {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, quntity: Math.max(1, item.quatity + amount) } : item
            )
        );
    }

    return (
        <CartContext.Provider value={{cart, addCard, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
