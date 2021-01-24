import { SET_TEAM, DELETE_TEAM , PATCH_TEAM, CREATE_TEAM, TEAM_LOADING, GET_TEAMS, GET_ONE_TEAM } from './teams.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    edit: {},
    team: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TEAMS:
            state.all = action.data;
            state.loading = false
            return state        
        case TEAM_LOADING:
            state.loading = action.status;
            return state;
        case CREATE_TEAM:
            state.loading = false;
            return state;
        case PATCH_TEAM:
            state.loading = false;
            return state;
        case SET_TEAM:
            state.edit = action.data;
            return state;
        case DELETE_TEAM:
            state.loading = false;
            return state;
        case GET_ONE_TEAM:
            state.team = action.data;
            state.loading = false;
            return state

        default:
            return state;
    }
}

export default reducer