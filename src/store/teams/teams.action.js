import { createNewTeam, delTeam, patchTeam, getOneTeam, getAllTeams } from "../../services/teams";
import { toastr } from 'react-redux-toastr'

export const DELETE_TEAM = "DELETE_TEAM";
export const SET_TEAM = "SET_TEAM";
export const PATCH_TEAM = "PATCH_TEAM";
export const CREATE_TEAM = "CREATE_TEAM";
export const TEAM_LOADING = "TEAM_LOADING";
export const GET_TEAMS = "GET_TEAMS";
export const GET_ONE_TEAM = "GET_ONE_TEAM";


export const getTeams = () => {
    return async (dispatch) => {
        dispatch({ type: TEAM_LOADING, status: true })
        const teams = await getAllTeams()
        dispatch({ type: GET_TEAMS, data: teams.data })
    }
};

export const NewTeam = (form) => {
    return async (dispatch) => {        

        dispatch({ type: TEAM_LOADING, status: true })
        try{
            const res = await createNewTeam(form)
            if(res.data){
            dispatch({ type: CREATE_TEAM, data: res.data})
            toastr.success('SUCESSO!', 'Time criado com sucesso!')
            getTeams()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao criar!')                   
        }
    }
} 

export const updateTeam = (id, form) => {
    return async (dispatch) => {
        dispatch({ type: TEAM_LOADING, status: true })
        try{
            const res = await patchTeam(id, form)
            if(res.data){
            dispatch({ type: PATCH_TEAM, data: res.data})
            toastr.success('SUCESSO!', 'Time atualizado com sucesso!')
            getTeams()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao atualizar Time!')                   
        }
    }
} 

export const setTeam = (props) => {
    return async (dispatch) => {
        dispatch({ type: SET_TEAM, data: props })
    }
};

export const deleteTeam = (props) => {
    return async (dispatch) => {
        dispatch({ type: TEAM_LOADING, status: true })
        try{
            const res = await delTeam(props)
            if(res.data){
            dispatch({ type: DELETE_TEAM, data: res.data})
            toastr.success('SUCESSO!', 'Time excluído com sucesso!')
            getTeams()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao excluir time!')                   
        }
    }
} 

export const getOne = (id) => {
    return async (dispatch) => {
        dispatch({ type: TEAM_LOADING, status: true })
        const team = await getOneTeam(id)
        if(team.data){
        dispatch({ type: GET_ONE_TEAM, data: team.data})
    } }}






