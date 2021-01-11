import React from 'react'
import userGlobalState from './useGlobalState'
import Context from './Context'

const GlobalStateProvider = ({children}) => {
  return (
    <Context.Provider 
    value={userGlobalState()}>{children}
    </Context.Provider>
  )
}

export default GlobalStateProvider