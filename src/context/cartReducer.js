

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
        default:
            return state
    }
}