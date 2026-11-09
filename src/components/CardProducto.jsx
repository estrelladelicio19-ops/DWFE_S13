export default function CardProducto({id,category,name, stock, imageUrl, eliminar} )
{
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
    <button onClick={()=>{eliminar(id)}}>Eliminar</button>
    </article>
    )

}