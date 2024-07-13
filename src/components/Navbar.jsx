

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex justify-between items-center py-4 px-3 bg-blue-600  mb-3">
            <Link to="/">Home</Link>
            {currentUser ? <div className="flex gap-5  " >
            <Link to="/createTask">CreateTask</Link> 
            <Link to="/saveTask">SaveTask</Link> 
            </div>
             :"Sign in for creating Task"}
            
            <Link to="/signin">
            {currentUser ? (
              <h3 className=" text-white-700 hover:underline">{"Hi "+ currentUser.username}</h3>
            ) : (
              <h3 className=" text-white-700 hover:underline">Sign in</h3>
            )}
            </Link>
            
        </div>
  )
}
