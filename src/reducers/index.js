let defaultState = {
    token: "",
    user: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_TOKEN") {
        return {
            ...state,
            token: action.token
        }
    } else if (action.type === "SET_DATA") {
        return {
            ...state,
            user: action.user
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;