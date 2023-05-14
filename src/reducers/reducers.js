
const initState = {
    combo:"",
    magic:""
}

 const reducer = (state = initState,action)=>{
    if(action.type=="combo_change"){
         return {
            combo: [...state.combo + action.payload]
            //  ...state,
            //  combo:action.payload
         }
    }
    if(action.type=="magic_change"){
        return {
        //    combo: [...state.combo + action.payload]
            ...state,
            magic:action.payload
        }
   }
   
    return state
}

export default reducer