import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContext"

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
        
    const fetchProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products/')
        const data = await response.json()
        setProducts(data)
    }
    
    useEffect(()=>{
        fetchProducts()

    }, [])

  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
