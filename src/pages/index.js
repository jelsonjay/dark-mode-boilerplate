import React, {useContext} from "react"
import {css} from '@emotion/react'
import {useTheme} from '@emotion/react'
import Context from '../Context/Context'
import Layout from '../components/Layout'

const IndexPage = () => {

const {state, dispatch} = useContext(Context)

  const theme = useTheme()
  return (
  <Layout>
   <div css={css`
   h1, h2 {
    color: ${state.isDark ? theme.dark.font : theme.light.font}
   }
   `}>
     
   <h1>Hello World! This is dark mode example</h1>

   <button onClick={() => dispatch({type: "Toggle_Dark"})}>
     Click Dark Mode
  </button>
    <h2>Dark Mode is {state.isDark ? 'on' : 'off'}</h2>
   </div>
  </Layout>
  )
}

export default IndexPage
