
import React from 'react'
import { ThumbNumber, ThumbImg, DetailThumb, ThumbContainer } from './Pokemon';

const PokemonThumb = ({id, image, name, type }) => {

    return (
        <ThumbContainer>
            <ThumbNumber>#0{id}</ThumbNumber>
            <ThumbImg src={image} alt={name} />
            <DetailThumb>
                <h3>{name}</h3>
                <p>Type: {type}</p>
            </DetailThumb>
        </ThumbContainer>
    )
}

export default PokemonThumb