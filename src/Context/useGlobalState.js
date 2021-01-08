import {useReducer} from 'react'

const reducer = (state, action) =>{
switch(action.type){
  case "toggle-dark-mode" : 
  return {}
  default: {
    return state
  }
}
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
  Mode: false

  })
  return{state , dispatch}
}

export default useGlobalState