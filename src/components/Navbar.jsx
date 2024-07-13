

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-3 bg-blue-600  mb-3">
            <Link to="/">Home</Link>
            <Link to="/createTask">CreateTask</Link>
            <Link to="/saveTask">SaveTask</Link>
            <Link to="/auth">Login</Link>
            <Link to="/signin">Sign In</Link>
            
        </div>
  )
}
