import React, { useReducer, useContext, createContext, ComponentType } from 'react'

import reducer from './reducer'

export const initState = { count: 0 }

const CountCtx = createContext(null)

export const Provider: ComponentType = props => {
  const [state, dispatch] = useReducer(reducer, initState)
  return <CountCtx.Provider value={{ state, dispatch }}>{props.children}</CountCtx.Provider>
}

export const useTestStore = () => useContext(CountCtx)