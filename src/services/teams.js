import http from '../config/http'


const createNewTeam = async (data) => {
    return await http.post(`/team`, data)
}


const getAllTeams = () => {
    return http.get('/team')
}

const getOneTeam = (_id) => http.get(`/team/${_id}`)

const patchTeam = (_id, data) => http.patch(`/team/${_id}`, data)
const delTeam = (_id) => http.delete(`/team/${_id}`)



export { createNewTeam, delTeam, patchTeam, getOneTeam, getAllTeams }