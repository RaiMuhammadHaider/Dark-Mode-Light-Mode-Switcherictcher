import React, { useContext } from 'react'
import ContextKOCreateKiya from './createContext'

const LoginDta = () => {
    const {User} = useContext(ContextKOCreateKiya)
if(!User) return <div>Create User</div>
return <div>This is YOur:   {User.Password}</div>
}

export default LoginDta