import { getTypes, createType, patchType, delType } from "../../services/types";
import { toastr } from 'react-redux-toastr'

export const TYPE_LOADING = "TYPE_LOADING";
export const GET_TYPES = "GET_TYPES";
export const CREATE_TYPE = "CREATE_TYPE";
export const PATCH_TYPE = "PATCH_TYPE";
export const SET_TYPE = "SET_TYPE";
export const DELETE_TYPE = "DELETE_TYPE";

export const getAllTypes = () => {
    return async (dispatch) => {
        dispatch({ type: TYPE_LOADING, status: true })
        const types = await getTypes()
        dispatch({ type: GET_TYPES, data: types.data })
    }
};

export const createNewType = (form) => {
    return async (dispatch) => {

        dispatch({ type: TYPE_LOADING, status: true })
        try{
            const res = await createType(form)
            if(res.data){
            dispatch({ type: CREATE_TYPE, data: res.data})
            toastr.success('SUCESSO!', 'Tipo Pokemon cadastrado com sucesso!')
            getAllTypes()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao criar tipo pokemon!')                   
        }
    }
} 

export const updateType = (id, form) => {
    return async (dispatch) => {
        dispatch({ type: TYPE_LOADING, status: true })
        try{
            const res = await patchType(id, form)
            if(res.data){
            dispatch({ type: PATCH_TYPE, data: res.data})
            toastr.success('SUCESSO!', 'Tipo Pokemon atualizado com sucesso!')
            getAllTypes()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao atualizar tipo pokemon!')                   
        }
    }
} 

export const setType = (props) => {
    return async (dispatch) => {
        dispatch({ type: SET_TYPE, data: props })
    }
};

export const deleteType = (props) => {
    return async (dispatch) => {
        dispatch({ type: TYPE_LOADING, status: true })
        try{
            const res = await delType(props)
            if(res.data){
            dispatch({ type: DELETE_TYPE, data: res.data})
            toastr.success('SUCESSO!', 'Tipo Pokemon excluído com sucesso!')
            getAllTypes()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao excluir tipo Pokemon!')                   
        }
    }
} 
