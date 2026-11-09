import { useEffect, useState } from "react"

export default function FormularioProducto({productoEditar, guardar}){
const [Formulario, setFormulario]=useState(
    {
        "id": 0,
        "category": "",
        "name": "",
        "stock": 0,
        "imageUrl": ""
    }
)
function manejarCambio(e)
{
    const{name, value} = e.target;
    setFormulario({
        ...Formulario,
        [name]: [name]=="stock"? Number(value):value
    });
    
}  

function agregar(e){
    e.preventDefault();
    console.log(Formulario);
    guardar(Formulario);
}


useEffect(()=>{
    
        //if (productoEditar.id > 0)
        setFormulario(productoEditar);
    },[productoEditar])

    return(
        <>
        <form onSubmit={agregar}>

            <label htmlFor="category">Categoria</label>
            <input type="text" id="category" name="category" value={Formulario.category} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={Formulario.name} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="stock">Stock</label>
            <input type="number" id="stock" name="stock" value={Formulario.stock} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="imageUrl">Imagen</label>
            <input type="url" id="imageUrl" name="imageUrl" value={Formulario.imageUrl} onChange={manejarCambio}></input> 
            <br />
            <br />
            <button>{Formulario.id > 0? "Editar" :"Guardar"}</button>

        </form>
        
        </>
    )
}