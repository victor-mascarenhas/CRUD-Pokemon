import { TYPE_LOADING, GET_TYPES, CREATE_TYPE, PATCH_TYPE, SET_TYPE, DELETE_TYPE } from './types.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    edit: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TYPES:
            state.all = action.data;
            state.loading = false
            return state
        case TYPE_LOADING:
            state.loading = action.status;
            return state;
        case CREATE_TYPE:
            state.loading = false;
            return state;
        case PATCH_TYPE:
            state.loading = false;
            return state;
        case SET_TYPE:
            state.edit = action.data;
            return state;
        case DELETE_TYPE:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer