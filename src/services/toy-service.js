import {utilService} from './util.service.js'
import axios from 'axios'


export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

function query(filterBy) {
    return axios.get(_getUrl(), { params: filterBy })
        .then(res => res.data)
}

function getById(id) {
    return axios.get(_getUrl(id))
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(_getUrl(id))
        .then(res => res.data)
}

function save(toy) {
    const toyToSave = JSON.parse(JSON.stringify(toy))
    const savedToy = (toyToSave._id) ? axios.put(_getUrl(toyToSave._id), toyToSave) : axios.post(_getUrl(), toyToSave)
    return savedToy;
}

function getEmptyToy() {
    return Promise.resolve({
        _id: '',
        name: '',
        price: 123,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
        reviews: []
        })
}

function _getUrl(id = '') {
    const BASE_URL =
    process.env.NODE_ENV !== 'development'
    ? '/api/toy'
    : '//localhost:3030/api/toy'
    return `${BASE_URL}/${id}`
}
