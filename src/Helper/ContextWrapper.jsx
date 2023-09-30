import React, { useState } from 'react'
import { UserContext } from './Context'

const ContextWrapper = ({children}) => {
    const [contextState, setContextState] = useState({authenticated: false})
  return (
    <UserContext.Provider value={{contextState, setContextState}}>
        {children}
    </UserContext.Provider>
  )
}

export default ContextWrapper