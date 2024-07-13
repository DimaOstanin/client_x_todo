import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { signIn } from "../redux/user/userSlice";

export const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        
        const res = await fetch('http://localhost:5000/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        dispatch(signIn(data));
        // console.log(data);
        if (data.success === false) {
          
          return;
        }
       
        navigate('/createTask');
      } catch (error) {
       alert(error)
      }
    };



  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h2 className="text-3xl bold">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-3">
            <label>User Name</label>
            <input
            className='border p-3 rounded-lg '
          type='text'
          placeholder='User Name'
          
          id='username'
          
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='password'
          
          onChange={handleChange}
        />
        <button
          
          className='bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-1'
        >
          { 'Sign In'}
        </button>
        </form>
        
        <div className="mt-3">
          <p>Dont have an account?</p>
        <Link to="/signup" className="text-blue-500 bold "> SignUp</Link>
        </div>
        
    </div>
  )
}
