import { useEffect, useState } from "react"
import { guardarProducto, obtenerProductos } from "../services/ProductoServices"
import CardProducto from "./CardProducto";
import FormularioProducto from "./FormularioProducto";

export default function CatalogoProductos()
{    
const [productos, setProductos] = useState([]);

 async function listar(){
           const resultado = await obtenerProductos();
           setProductos(resultado.data);
        }


 async function agregarProducto(producto){
          await guardarProducto(producto);
          listar();
        }


useEffect(
    () =>
    {
       
        listar();
    }     
, []
)
    return(

        <>
        <FormularioProducto guardar={agregarProducto}></FormularioProducto>
        <section className="products-container">
             {productos.map(e => <CardProducto 
             id = {e.id}
             name= {e.name}
             category= {e.category}
             stock= {e.stock}
             imageUrl= {e.imageUrl}
             />  ) }
        </section>
        </>
    )

}