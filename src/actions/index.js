import axios from "axios";

export function login(username, password){
    return(dispatch)=>{
        return axios.post("http://localhost:8080/auth/login", {username,password}).then((response)=>{
            dispatch(setToken(response.data.token));
            dispatch(loadUserInfo(response.data.username));
  
            alert("loggedin")
        }).catch((err)=>{
            alert("Username or password was incorrect");
            throw err;
        })
    }
}

export function setToken(token){
    return {type:"SET_TOKEN", token}
}

export function signup(username, password){
    return (dispatch)=>{
        return axios.post("http://localhost:8080/auth/signup", {username, password})
            .then((response) => {
                alert("username created please login");
              window.location.href="/"
            })
            .catch((err) => {
                alert("Username was taken");
                throw err;
            });
    }
}

export function upWins(username){
    return(dispatch)=>{
        return axios.put(`http://localhost:8080/auth/wins/${username}`).then((response)=>{
        dispatch(loadUserInfo(username));
        }).catch((error)=>{
            throw error;
        });
    }
}
export function upLosses(username){
    return(dispatch)=>{
        return axios.put(`http://localhost:8080/auth/losses/${username}`).then((response)=>{
        dispatch(loadUserInfo(username));
        }).catch((error)=>{
            throw error;
        });
    }
}
    
    export function loadUserInfo(username){
        console.log("Here");
        return(dispatch)=>{
        return axios.get(`http://localhost:8080/auth/user/${username}`).then((response)=>{
            dispatch(setData(response.data.data));
        }).catch((error)=>{
            throw error;
        });
    }

}

export function setData(user){
    return{
        type:"SET_DATA",
        user
    }
}