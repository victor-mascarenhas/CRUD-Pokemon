import { getAllPokemons, createNewPokemon, patchPokemon, delPokemon } from "../../services/pokemons";
import { toastr } from 'react-redux-toastr'

export const DELETE_POKEMON = "DELETE_POKEMON";
export const SET_POKEMON = "SET_POKEMON";
export const PATCH_POKEMON = "PATCH_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const POKEMON_LOADING = "POKEMON_LOADING";
export const GET_POKEMONS = "GET_POKEMONS";


export const getAllPokes = () => {
    return async (dispatch) => {
        dispatch({ type: POKEMON_LOADING, status: true })
        const pokemons = await getAllPokemons()
        dispatch({ type: GET_POKEMONS, data: pokemons.data })
    }
};

export const createNewPoke = (form) => {
    return async (dispatch) => {        

        dispatch({ type: POKEMON_LOADING, status: true })
        try{
            const res = await createNewPokemon(form)
            if(res.data){
            dispatch({ type: CREATE_POKEMON, data: res.data})
            toastr.success('SUCESSO!', 'Pokemon cadastrado com sucesso!')
            getAllPokes()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao cadastrar Pokemon!')                   
        }
    }
} 

export const updatePokemon = (id, form) => {
    return async (dispatch) => {
        dispatch({ type: POKEMON_LOADING, status: true })
        try{
            const res = await patchPokemon(id, form)
            if(res.data){
            dispatch({ type: PATCH_POKEMON, data: res.data})
            toastr.success('SUCESSO!', 'Pokemon atualizado com sucesso!')
            getAllPokes()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao atualizar Pokemon!')                   
        }
    }
} 

export const setPokemon = (props) => {
    return async (dispatch) => {
        dispatch({ type: SET_POKEMON, data: props })
    }
};

export const deletePokemon = (props) => {
    return async (dispatch) => {
        dispatch({ type: POKEMON_LOADING, status: true })
        try{
            const res = await delPokemon(props)
            if(res.data){
            dispatch({ type: DELETE_POKEMON, data: res.data})
            toastr.success('SUCESSO!', 'Pokemon excluído com sucesso!')
            getAllPokes()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao excluir Pokemon!')                   
        }
    }
} 




