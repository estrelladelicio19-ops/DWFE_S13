const URL_API = "http://localhost:3000/api/products";

export async function obtenerProductos()
{
    const response = await fetch(URL_API);  
    if (!response.ok)
        {
            throw new Error("Error al cargar la data");            
        }
    
    return await response.json();   
}

export async function guardarProducto(producto) {    
    const respuesta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        throw new Error("Error al registrar producto");
    }

    return await respuesta.json();
}