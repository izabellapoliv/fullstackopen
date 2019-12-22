import Axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => Axios
    .get(baseUrl)
    .then(response => response.data)

const create = personObject => Axios
    .post(baseUrl, personObject)
    .then(response => response.data)

const update = (id, personObject) => Axios
    .put(`${baseUrl}/${id}`, personObject)
    .then(response => response.data)

const deletePerson = id => Axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)

export default { getAll, create, update, deletePerson }