

export const cartReducer = ( state, action ) => {
    switch (action.type){
        case 'add':
            return action.payload
        case 'update':
            let id = action.payload.id
            let prod = {
                ...state[id],
                quantity: action.payload.value
            }
            return {
                ...state,
                [id]: prod
            }
        case 'delete':
            let id2 = action.payload.id
            let temProds = {...state}
            delete temProds[id2]
            return temProds
        default:
            return state
    }
}