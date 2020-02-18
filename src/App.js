import React, {useState, useEffect} from 'react';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';
import Footer from './components/Footer';



function App() {

  const [busqueda, guardarBusqueda ] = useState('');
  const [imagenes, guardarImagenes ] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);


  useEffect(() => {

     const consultarAPI = async () => {

      if(busqueda === '') return null;
        // number of images per page 
       const imagenesPorPagina = 25;
       const key = '12855621-8a1658f8076cc83dc1befb7a1';
      
       const orden = 'order';
        // call URL
       const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&order=${orden}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

       const respuesta = await fetch(url);
       const resultado = await respuesta.json();
       guardarImagenes(resultado.hits);

       // calcular paginas - calculate pages
       const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        guardarTotalPaginas(calcularTotalPaginas);
      
        // return user  top page -  volver arriba luego de la paginacion

        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior : 'smooth', block :  'start'});

     }
     // API function 
     consultarAPI();
  }, [busqueda, paginaActual]);

    //   pager.nextPage(); prevPage();  
  const paginaAnterior= () => {
     let nuevaPaginaActual = paginaActual -1;

     //colocarlo en el State
     // insert in State
     
     guardarPaginaActual(nuevaPaginaActual);
  }

    // pagination NEXT
  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual +1;

    // colocarlo en el State
    // current  page 

    guardarPaginaActual(nuevaPaginaActual);
  }



  return (
    <div className="app container">
      <div className="jumbotron">
        <img src="../public/indiro-logo-web-retina.svg" alt="Indigo-Verge"/>
        <p className="lead text-center">Search Pictures</p>
            <Buscador 
            guardarBusqueda={guardarBusqueda}
            />
      </div>

        <div className="row justify-content-center">
            <ListadoImagenes 
                imagenes={imagenes}
             /> 

        { ( paginaActual === 1 ) ? null :
          ( <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1"> &laquo; Prev </button> )}
         
          { ( paginaActual === totalPaginas ) ? null : (
              <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Next &raquo;</button>
          )}
         
      </div>
      <Footer />
    </div>
  );
}

export default App;
