import { useReducer } from "react"
import { CartContext } from "./CartContext"
const initialState = []

export const CartProvider = ({children}) => {
    const shoppingReducer = (state = initialState, action={}) =>{
        switch (action.type){
            case "[CART] Add Purchase":
                return[...state, action.payload];
            case "[CART] Increase Quantity": 
                return state.map(item=>{
                    const amou = item.amount + 1;
                    if(item.id === action.payload) return{...item, amount: amou}
                    return item
                });
            case "[CART] Decrease Quantity": //to do
                return state.map(item=>{
                    const amou = item.amount - 1;
                    if(item.id === action.payload && item.amount > 1) return{...item, amount: amou}
                    return item
                });
            case "[CART] Delete Purchase":
                return state.filter(purchase => purchase.id !== action.payload);
            default: 
                return state;
        }
    }
    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)
    
    const addPurchase = (purchase)=>{
        purchase.amount = 1
        const action = {
            type: "[CART] Add Purchase",
            payload: purchase
        }
        dispatch(action)
    }
    const increaseQuantity = (id)=>{
        const action = {
            type: "[CART] Increase Quantity",
            payload: id
        }
        dispatch(action)
    }
    const decreaseQuantity = (id)=>{
        const action = {
            type: "[CART] Decrease Quantity",
            payload: id
        }
        dispatch(action)
    }
    const deletePurchase = (id)=>{
        const action = {
            type: "[CART] Delete Purchase",
            payload: id
        }
        dispatch(action)
    }


    return(


        <CartContext.Provider value={{shoppingList, addPurchase, increaseQuantity, decreaseQuantity, deletePurchase}}>
            {children}
        </CartContext.Provider>
    )
}
