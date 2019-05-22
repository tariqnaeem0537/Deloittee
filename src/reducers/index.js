let defaultState={
    list:[]
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="FETCH_LIST"){
        return{
            ...state,
            list:action.list
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;