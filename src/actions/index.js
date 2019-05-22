import axios from "axios";

export function loadData(){
    return(dispatch)=>{
        return axios.get("http://localhost:8001/launches").then((response)=>{
            dispatch(info(response.data));
        })
    }
}

export function info(data){
    return{
        type:"FETCH_LIST",
        list:data
    }
}