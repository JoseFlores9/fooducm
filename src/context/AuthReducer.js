export const AuthReducer = (state, action) => {
    switch (action.type){
        case 'login':
            return action.payload
        default:
            return state
    }
}
