

export const cartReducer = ( state, action ) => {
    switch (action.type){
        case 'add':
            return action.payload
        default:
            return state
    }
}