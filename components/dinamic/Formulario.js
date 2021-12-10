import React, {Fragment, useState} from 'react';
 
const Formulario = () =>{
    
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    
    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row"> 
                <input
                    placeholder="Nombre" 
                    type="text" 
                    name="nombre"
                    onChange={handleInputChange}
                ></input>

                <input
                    placeholder="Apellido" 
                    type="text" 
                    name="apellido"
                    onChange={handleInputChange}
                ></input>

                <button type="submit">Enviar</button>
            </form>
            <br />
            <h4>{datos.nombre}</h4>
            <h4>{datos.apellido}</h4>
        </Fragment>
    );
}   

export default Formulario;