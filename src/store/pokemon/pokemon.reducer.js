import { GET_POKEMONS, POKEMON_LOADING, CREATE_POKEMON, PATCH_POKEMON, SET_POKEMON, DELETE_POKEMON } from './pokemon.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    edit: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            state.all = action.data;
            state.loading = false
            return state        
        case POKEMON_LOADING:
            state.loading = action.status;
            return state;
        case CREATE_POKEMON:
            state.loading = false;
            return state;
        case PATCH_POKEMON:
            state.loading = false;
            return state;
        case SET_POKEMON:
            state.edit = action.data;
            return state;
        case DELETE_POKEMON:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer