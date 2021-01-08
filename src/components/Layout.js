import React, {useContext} from 'react'
import {Global, css} from '@emotion/core'
import {useTheme} from '@emotion/react'
import Context from '../Context/Context'

const Layout = ({children}) => {
  const {state} = useContext()

  const theme = useTheme

  return (
    <div>
      <Global 
      style={css`
      *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body{
        background-color: ${state.Mode ? theme.darkMode.background : theme.lightMode.background}
      }
      `} />
      {children}
    </div>
  )
}