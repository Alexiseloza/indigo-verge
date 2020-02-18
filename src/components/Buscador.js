import React, { useState } from 'react';
import Error from './Error';


function Buscador ({guardarBusqueda})  {

  /*   You need to implement various paging methods like:

            */
    
    const [terminoBusqueda, guardarTerminoBusqueda ] = useState('');
    const [error, guardarError ] = useState(false);

    const buscarImagen = e => {
      e.preventDefault();

      //validar   validate
      if (terminoBusqueda === ''){
        guardarError(true);
        return;
      }

      // enviar el termino hacia el componente principal
      //send the term to the main component
      guardarError(false);
      guardarBusqueda(terminoBusqueda);

    }


     return (
            <form
            
            onSubmit={buscarImagen}
            >
              <div className="row">
                <div className="form-group col-md-8">
                  <input 
                   type="text"
                   className="form-control form-control-lg"
                   placeholder = "напишете тук името на вашето търсене"
                   onChange={ e => guardarTerminoBusqueda(e.target.value)}
                  />

                </div>

              
                <div className="form-group col-md-4">
                  <input 
                   type="submit"
                   className="btn btn-lg btn-danger btn-block"
                   value="търси -Search "
                  />
                </div>
                </div>
                { (error) ? <Error mensaje=" you must add a title to perform the search" /> : null}
            </form>
  )


}
export default Buscador;

