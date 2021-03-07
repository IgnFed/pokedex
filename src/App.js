import React, {useState, useEffect}from "react";
import { Tarjeta} from './Components/Card';
import {Spinn} from './Components/Spinn'

import { getPokemons, getPokemonData} from './Components/Services/Services'

// import {Searcher} from './Components/Searcher'

export const App = ()=>{

  const [pokemon, setPokemon] = useState([]);
  const [spin, setSpin] = useState(false);

  const fetchPokemons = async ()=>{

    try {

      const data = await getPokemons()
      const promises = data.results.map(async pokemons =>{

        return await getPokemonData(pokemons.url)        
      })

      const results = await Promise.all(promises)
      setPokemon([...results])
    } catch (error) {

      console.log(error)

    }

    setSpin(true);

  }

  useEffect(()=>{

    fetchPokemons();
  },[])

  return (

    <div className='container'>

      <section >

        <h1>POKEAPI</h1>

      </section>
   
      {
        /* 
          <section>
            <Searcher add={()=>{add()}} del = {()=>{del(0)}}/>
          </section>  
        */
      }
        
      <section>

      {
        spin ? 
        (
            pokemon.map((item, index) => (

              <div key={index + 1}>

                <Tarjeta
                  pokeId={index + 1}
                  pokeName={item.name}
                  url={item.url}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`}
                  type={item.types}
                  />

              </div>

            ))
        )

        :

        (
          <Spinn/>
        )
      }          

      </section>

    </div>


  )
}


