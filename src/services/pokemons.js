import http from '../config/http'


const createNewPokemon = async (data) => {
    return await http.post(`/pokemon`, data)
}


const getAllPokemons = () => {
    return http.get('/pokemon')
}

const getOnePokemon = (_id) => http.get(`/pokemon/${_id}`)

const patchPokemon = (_id, data) => http.patch(`/pokemon/${_id}`, data)
const delPokemon = (_id) => http.delete(`/pokemon/${_id}`)



export { createNewPokemon, delPokemon, patchPokemon, getOnePokemon, getAllPokemons }