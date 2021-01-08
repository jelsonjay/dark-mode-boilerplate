import React from 'react'
import userGlobalState from './useGlobalState'
import Context from './Context'


const GlobalStateProvider = () => {
  return (
    <Context.Provider value={userGlobalState()}></Context.Provider>
  )
}

export default GlobalStateProvider