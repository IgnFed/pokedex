export const getPokemons = async ()=>{

   const recive = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')  

   const data = await recive.json()

   return data
}

export const getPokemonData = async (url)=>{

   const recive = await fetch(url)

   const data = await recive.json()

   return data
}