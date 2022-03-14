import {storageService} from './async-storage-service.js'
import {utilService} from './util.service.js'

const KEY = 'toysDB';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

_createToys()
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

function query() {
    // return JSON.parse(JSON.stringify( gTodos))
    return storageService.query(KEY)
}

function getById(id) {
    // return gTodos.find(todo => todo._id === id)
    return storageService.get(KEY, id)
}

function remove(id) {
    // const idx = gTodos.findIndex(todo => todo._id === id)
    // gTodos.splice(idx, 1)
    // storageService.store(KEY, gTodos)
    return storageService.remove(KEY, id)
}

function save(toy) {
    const toyToSave = JSON.parse(JSON.stringify(toy))
    const savedToy = (toyToSave._id) ? storageService.put(KEY, toyToSave) : storageService.post(KEY, toyToSave)
    return savedToy;
}

function getEmptyToy() {
    return Promise.resolve({
        _id: '',
        name: '',
        price: 123,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true
        })
}

function _createToys() {
    return storageService.query(KEY)
        .then(toys => {
            if(!toys || toys.length === 0) {
                console.log('creating');
                const toys = [_createToy('Talking Doll'), _createToy('Robocop')]
                storageService.postMany(KEY, toys)
                return toys
            } else return toys
        })
        .catch((err)=> {
            console.log('An error had accured',err);
            throw err
        })
}

function _createToy(name) {
    return  {
        _id: utilService.makeId(),
        name,
        price: 123,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
        reviews: [
            {
                rate: 5,
                description: 'Amazing toy'
            },
            {
                rate: 3,
                description: 'Nice toy'
            },
            {
                rate: 2,
                description: 'A lot of money for this toy'
            },
        ]
    }
}


// function _add(todo) {
//     todo._id = utilService.makeId()    
//     gTodos.unshift(todo)
//     return todo
// }

// function _update(todo) {
//     const idx = gTodos.findIndex(currTodo => currTodo._id === todo._id)    
//     gTodos.splice(idx, 1, todo)
//     return todo
// }

