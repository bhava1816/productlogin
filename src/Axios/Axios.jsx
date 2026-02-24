import axios from 'axios';


let api=axios.create({
    baseURL:"http://localhost:3333",
    withCredentials:true
})
api.interceptors.request.use(
    (config)=>{
     let token=localStorage.getItem("token")
     if(token){
      config.headers.Authorization=`Barear ${token}`
     }
     return config
    }
)
api.interceptors.response.use(
    (response)=>response,
    async(error)=>{
     if(error.response.status==401){
        localStorage.removeItem("token");
        window.location.href='/login';
     }
      return Promise.reject(error);
    }
)
export default api;