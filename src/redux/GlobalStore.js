
let initialState = {}

export default function globalStore(state = initialState, action) {
    let nextState
    switch(action.type){
        case 'INIT':
            nextState = {...state, ...action.value}
            return nextState || state
        default:
            return state
    }
}