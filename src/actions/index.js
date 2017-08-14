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

// export function upWins(username){
//     return(dispatch)=>{
//         return axios.get(`http://localhost:8080/auth/wins/${username}`).then((response)=>{
//         dispatch(loadUserInfo());
//         }).catch((error)=>{
//             throw error;
//         });
//     }
// }
// export function upLosses(username){
//     return(dispatch)=>{
//         return axios.get(`http://localhost:8080/auth/losses/${username}`).then((response)=>{
//         dispatch(loadUserInfo());
//         }).catch((error)=>{
//             throw error;
//         });
//     }
// }
    
//     export function loadUserInfo(username){
//     return(dispatch)=>{
//         return axios.get(`http://localhost:8080/user/${username}`).then((reponse)=>{
//             dispatch(setData(reponse.data.data))
//         }).catch((error)=>{
//             throw error;
//         });
//     }

// }

// export function setData(user){
//     return{
//         type:"SET_DATA",
//         user
//     }
// }