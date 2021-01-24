import http from '../config/http'

const getTypes = () => {
    return http.get('/type')
}
const createType = async (data) => {
    return await http.post(`/type`, data)
}
const patchType = (_id, data) => http.patch(`/type/${_id}`, data)
const delType = (_id) => http.delete(`/type/${_id}`)

export { getTypes, createType, patchType, delType }