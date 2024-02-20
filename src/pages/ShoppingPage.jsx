import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"
import images from "../assets/img/images"
import "../styles/main.css"
export const ShoppingPage = () => {

    const { products } = useContext(ProductContext)
    const { addPurchase, deletePurchase } = useContext(CartContext)

    const handleAdd =(purchase)=>{
        addPurchase(purchase)
    }
    const handleRemove =(id)=>{
        deletePurchase(id)
    }

  return (
    <>
    <h1>Shopping: </h1>
    <hr />
    <img src={images.banner} alt="" className="banner"/>
    <div className="card-container">
        {products.map((product)=>(
           <Card 
                key={product.id} 
                image={product.image} 
                title={product.title} 
                description={product.description} 
                price={product.price}
                handleAdd={() => handleAdd(product)}
                handleRemove={() => handleRemove(product.id)}
           />
        ))}
    </div>
    </>
  )
}

