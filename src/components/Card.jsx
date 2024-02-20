import { useState } from "react"
import "../styles/card.css"

export const Card = ({image, title, description, price, handleAdd, handleRemove, handleIncrease, handleDecrease}) => {
    const [added, setAdded] = useState(false)

    const clickAdd = () =>{
        handleAdd()
        setAdded(true)
    }
    const clickRemove = () =>{
        handleRemove()
        setAdded(false)
    }
  return (

    <div className="tarjeta">
        <img src={image} alt={title} className="tarjeta-imagen"/>
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{title && title.length > 20 ? title.substring(0, 20).toLowerCase() + "...": title.toLowerCase() }</h3>
            <p className="tarjeta-descripcion">{description}</p>
            <p className="tarjeta-precio">${price}</p>
        {added 
        ?   <button 
                type="button" 
                className="boton-quitar"
                onClick={clickRemove}
            >
            Remove from cart
            </button>
        :   <button 
                type="button" 
                className="boton-agregar"
                onClick={clickAdd}
            >
            Add to cart
            </button>
        }
        </div>

    </div>
  )
}
