import { useState } from "react"
import { Link } from "react-router-dom"


export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h2 className="text-3xl bold">SignUp</h2>
        <form className="flex flex-col mt-3">
            <label>User Name</label>
            <input
            className='border p-3 rounded-lg '
          type='text'
          placeholder='User Name'
          
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='email'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </form>
        <Link to="/auth">Login</Link>
    </div>
  )
}
