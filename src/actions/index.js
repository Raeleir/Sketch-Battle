import axios from "axios";

export function login(username, password){
    return(dispatch)=>{
        return axios.post("http://localhost:8080/auth/login", {username,password}).then((response)=>{
            dispatch(setToken(response.data.token))
            alert("loggedin")
        }).catch((err)=>{
            alert("Username or password was incorrect")
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
                alert("username created please login")
              window.location.href="/"
            })
            .catch((err) => {
                alert("Username was taken")
                throw err;
            });
    }
}
    