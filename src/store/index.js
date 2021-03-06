import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducer as toastrReducer} from 'react-redux-toastr'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import SignReducer from './sign/reducer.sign'
import PokemonReducer from './pokemon/pokemon.reducer'
import TypesReducer from './types/types.reducer'
import TeamsReducer from './teams/teams.reducer'

const reducers = combineReducers({
    auth: SignReducer,
    toastr: toastrReducer,
    pokemon: PokemonReducer,
    types: TypesReducer,
    teams: TeamsReducer
});

const middleware = [thunk, multi];

const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, compose);

export default store;