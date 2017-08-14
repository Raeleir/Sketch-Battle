let defaultState={
    token:""
}

const mainReducer = (state=defaultState,action)=>{
    if(action.type==="SET_TOKEN"){
        return{
            ...state,
            token:action.token
        }
    } else {
        return{
            ...state
        }
    }
}


export default mainReducer;