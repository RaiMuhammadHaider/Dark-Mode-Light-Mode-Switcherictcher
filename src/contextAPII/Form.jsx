import React from 'react'
import { useContext,useState } from 'react'
import ContextKOCreateKiya from './createContext'
const Form = () => {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(ContextKOCreateKiya)
    const handleSubmit =(e)=>{
e.preventDefault()
setUser({Name,Password})

    }
  return (
<>
<h1>Login Form</h1>
<input type="text"
value={Name}
onChange={(e)=>setName(e.target.value)}



/>
<input type="text"
value={Password}
onChange={(e)=> setPassword(e.target.value)}



/>
<button onClick={handleSubmit} >Submit</button>





</>  )
}

export default Form