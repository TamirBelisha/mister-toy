import { toyService } from '../services/toy-service.js'

export const toyStore = {
    state: {
        toys: [],
        currToy: {},
        labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery powered"]
    },
    getters: {
        getToys(state) {
            return JSON.parse(JSON.stringify(state.toys))
        },
        getCurrToy(state) {
            return JSON.parse(JSON.stringify(state.currToy))
        },
        getLabels(state) {
            return state.labels
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        setCurrToy(state, { toy }) {
            state.currToy = toy
        },
        updateToy(state, { toy }) {
            const toys = state.toys
            const idx = toys.findIndex(currToy => currToy._id === toy._id)
            toys.splice(idx, 1, toy)
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy)
        },
        removeToy(state, { toyId }) {
            const toys = state.toys
            const idx = toys.findIndex(currToy => currToy._id === toyId)
            toys.splice(idx, 1)
        }
    },
    actions: {
        loadToys({commit}, { filterBy }) {
            return toyService.query(filterBy)
                .then(toys => {
                    commit({type: 'setToys', toys})
                })
                .catch(err => {
                    console.log('err',err);
                    throw err
                })
        },
        setCurrToy({ commit }, { toyId }) {
            if(toyId) {
                return toyService.getById(toyId)
                    .then(toy => {
                        commit({type: 'setCurrToy', toy})
                        return toy
                    })
                    .catch(err => {
                        console.log('err',err);
                        throw err
                    })
            } else {
                return toyService.getEmptyToy()
                    .then(toy => {
                        commit({type: 'setCurrToy', toy})
                    })
                    .catch(err => {
                        console.log('err',err);
                        throw err
                    })
            }
        },
        addToy({ commit }, { toy }) {
            if(toy._id) {
                return toyService.save(toy)
                    .then(toy => {
                        commit({type: 'updateToy', toy})
                        return toy
                    })
                    .catch(err => {
                        console.log('err',err);
                        throw err
                    })
            } else return toyService.save(toy)
                .then(toy => {
                    commit({type: 'addToy', toy})
                    return toy
                })
                .catch(err => {
                    console.log('err',err);
                    throw err
                })
        },
        removeToy({commit}, {toyId}) {
            return toyService.remove(toyId)
                .then(toy => {
                    commit({type: 'removeToy', toyId})
                })
                .catch(err => {
                    console.log('err',err);
                    throw err
                })
        }
    }
}