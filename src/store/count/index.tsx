import React, { useReducer, useContext, createContext, ComponentType, Dispatch } from 'react'

import reducer from './reducer'

export const initState = { count: 0 }

const CountCtx = createContext<Context<ICount.State, Dispatch<ICount.Action>>>(null)

export const Provider: ComponentType = props => {
  const [state, dispatch] = useReducer(reducer, initState)
  return <CountCtx.Provider value={{ state, dispatch }}>{props.children}</CountCtx.Provider>
}

export const useTestStore = () => useContext(CountCtx)