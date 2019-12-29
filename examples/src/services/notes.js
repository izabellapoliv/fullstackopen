import axios from 'axios'
const baseUrl = '/api/notes'

const getRequestObject = request => request.then(response => response.data)

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => getRequestObject(axios.post(baseUrl, newObject))

const update = (id, newObject) => getRequestObject(axios.put(`${baseUrl}/${id}`, newObject))

export default { getAll, create, update }
