import { useEffect, useState } from "react"

export default function CardProducto({id,category,name, stock, imageUrl, eliminar, editar} )
{
const [mensaje,setMensaje]= useState("");

 function editarProducto(){
    editar({
        id : id,
        category:category,
        name: name,
        stock:stock,
        imageUrl : imageUrl
    });
}
    return(
        <article className="product-card">
    <div className="product-image">
        <img src={imageUrl} alt={name} />
    </div>

    <div className="product-info">
        <span className="product-category">{category}</span>

        <h3>{name}</h3> 

        <div className="product-stock">
            <span>Stock</span>
            <strong>{stock}</strong>
        </div>
    </div>
    {mensaje}
    <button onClick={()=>{ setMensaje("Eliminando Porfavor Espere"); eliminar(id)}}>Eliminar</button>
    <button onClick={editarProducto}>Editar</button>
    </article>
    )

}