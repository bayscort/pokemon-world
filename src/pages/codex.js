import React from 'react'
import { useState, useEffect } from 'react'
import PokemonThumb from '../components/container'


const Codex = () => {

  const [pokemons, setPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function pokemonObject(result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemons(currentList => [...currentList, data])
      })
    }
    pokemonObject(data.results)
   console.log(pokemons)
  }

  useEffect(() => {
    getPokemons()
   }, [])

    return (
      <div className="app-container" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '3rem 0.5rem'
      }}
      >
        <div className="pokemon-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
    <div className="all-container"
          style={{
            display: 'flex',
            flexWrap:'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '100px'
          }}
          >
      {pokemons.map( (pokemonStats, index) => 
        <PokemonThumb
          key={index + 1}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name}
          type={pokemonStats.types[0].type.name}
        />)}
      
    </div>
      <button className="load-more" onClick={() => getPokemons()}>Load more</button>
  </div>
</div>
    )
}

export default Codex
