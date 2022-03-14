import {utilService} from './util.service.js'
import axios from 'axios'

const TOY_URL = '//localhost:3031/api/toy/';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

function query() {
    return axios.get(TOY_URL)
        .then(res => res.data)
}

function getById(id) {
    return axios.get(TOY_URL + id)
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(TOY_URL + id)
        .then(res => res.data)
}

function save(toy) {
    const toyToSave = JSON.parse(JSON.stringify(toy))
    const savedToy = (toyToSave._id) ? axios.put(TOY_URL + toyToSave._id, toyToSave) : axios.post(TOY_URL, toyToSave)
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

// function _createToys() {
//     return storageService.query(KEY)
//         .then(toys => {
//             if(!toys || toys.length === 0) {
//                 console.log('creating');
//                 const toys = [_createToy('Talking Doll'), _createToy('Robocop')]
//                 storageService.postMany(KEY, toys)
//                 return toys
//             } else return toys
//         })
//         .catch((err)=> {
//             console.log('An error had accured',err);
//             throw err
//         })
// }

// function _createToy(name) {
//     return  {
//         _id: utilService.makeId(),
//         name,
//         price: 123,
//         labels: ['Doll', 'Battery Powered', 'Baby'],
//         createdAt: Date.now(),
//         inStock: true,
//         reviews: [
//             {
//                 rate: 5,
//                 description: 'Amazing toy'
//             },
//             {
//                 rate: 3,
//                 description: 'Nice toy'
//             },
//             {
//                 rate: 2,
//                 description: 'A lot of money for this toy'
//             },
//         ]
//     }
// }
