import React  from 'react';


const Imagen = ({imagen}) => {
    
    const {downloads, largeImageURL, likes, previewURL, tags, views } = imagen; 

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">

            <img src={previewURL} alt={tags} className="card-img-top"/>
            </div>

            <div className="card-body">
               
                <p className="card-text">{likes} Likes</p>
                <p className="card-text">{views} Vistas</p>
                <p className="card-text">{downloads} изтегляния</p>

            </div>

            <div className="card-footer">
                <a href={largeImageURL} target="_blank" className="btn btn-block btn-primary" rel="noopener noreferrer"> Watch Now </a>
            </div>
        </div>
    )
}
export default Imagen;
