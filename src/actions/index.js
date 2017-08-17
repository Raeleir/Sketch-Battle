import axios from "axios";


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    
    return response;
  }, function (error) {
    // Do something with response error
     if (401 === error.response.status) {
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         window.location.href="/"
     }
    return null;
  });
export function login(username, password){
    return(dispatch)=>{
        return axios.post("http://localhost:8080/auth/login", {username,password}).then((response)=>{
            dispatch(setToken(response.data.token));
            dispatch(loadUserInfo(response.data.username));
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("user", response.data.username);
           
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
                alert("username created, please login");
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
            console.log("DATA", response.data.data);
            dispatch(setData(response.data.data));
        }).catch((error)=>{
            throw error;
        });
    }

}

export function setData(user){
    console.log(user);
    return{
        type:"SET_DATA",
        user
    }
}