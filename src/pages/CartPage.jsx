import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartPage = () => {
  const {shoppingList, increaseQuantity, decreaseQuantity, deletePurchase } = useContext(CartContext)
  const calculateTotal = () =>{
    return shoppingList.reduce((total, item)=>total + item.price * item.amount, 0).toFixed(2)
  }
  const handleImpresion =()=>{
    print()
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingList.map(item=>(
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{((item.price)*item.amount).toFixed(2)}</td>
                <td>
                  <button className="btn btn-outline-primary" onClick={()=>decreaseQuantity(item.id)}>-</button>
                  <button className="btn btn-primary">{item.amount}</button>
                  <button className="btn btn-outline-primary" onClick={()=>increaseQuantity(item.id)}>+</button>
                </td>
                <td>
                  <button 
                    onClick={()=>deletePurchase(item.id)} 
                    type="button"
                    className="btn btn-danger"
                  >Eliminar
                  </button>
                </td>
              </tr>
            ))
          }

          <th><b>TOTAL: </b></th>
          <td></td>
          <td>${calculateTotal()}</td>
          <td></td>

        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button disabled={shoppingList < 1} className="btn btn-primary" onClick={handleImpresion}>Buy</button>
      </div>
    </>
  );
};
