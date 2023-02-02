import React from "react"

const Card = ({titulo, imagen, descripcion, orden}) => {
    return(
        <div className="Cards">
            <img className="img-galeria" src={imagen} alt="{titulo}" />
            <div className="TextosGaleria">{orden}
            <h3 className="tittle-galeria">{titulo}</h3>
            <p className="texto-galeria">{descripcion}</p>
            </div>
        </div>
    )
}

export default Card
