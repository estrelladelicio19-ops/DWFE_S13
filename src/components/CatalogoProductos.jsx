import { useEffect, useState } from "react"
import { guardarProducto, obtenerProductos, borrarProducto, actualizarProducto } from "../services/ProductoServices"
import CardProducto from "./CardProducto";
import FormularioProducto from "./FormularioProducto";

export default function CatalogoProductos() {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState({
        id: 0

    });
    const [mensaje, setMensaje] = useState('')

    async function listar() {
        const resultado = await obtenerProductos();
        setProductos(resultado.data);
    }


    async function agregarProducto(producto) {
        if (producto.id > 0) {
            await actualizarProducto(producto.id, producto)
        }
        else {
            await guardarProducto(producto);
        }


        setProductoEditar(
            {
            id: 0,
            category: "",
            name: "",
            stock: 0,
            imageUrl: ""
        }
        );
        listar();
    }

    async function eliminarProducto(id) {
        setMensaje('Eliminando Producto...Por Favor Espere')
        await borrarProducto(id);
        listar();
        setMensaje('')
    }
    function editarProducto(productoeditar) {
        setProductoEditar(productoeditar);
    }

    useEffect(
        () => {

            listar();
        }
        , []
    )
    return (

        <>
            <FormularioProducto productoEditar={productoEditar} guardar={agregarProducto}></FormularioProducto>
            <span>{mensaje}</span>
            <section className="products-container">
                {productos.map(e => <CardProducto
                    id={e.id}
                    name={e.name}
                    category={e.category}
                    stock={e.stock}
                    imageUrl={e.imageUrl}
                    eliminar={eliminarProducto}
                    editar={editarProducto}
                />)}
            </section>
        </>
    )

}