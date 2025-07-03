import React from 'react'
import { useState } from 'react'
import ContextKOCreateKiya from './createContext'
const Provider = ({children}) => {
    const [User, setUser] = useState(null)
  return (
    <ContextKOCreateKiya.Provider value={{User,setUser}}>
{children}
    </ContextKOCreateKiya.Provider>
  )
}

export default Provider