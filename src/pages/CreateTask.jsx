import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom"

const CreateTask = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [users, setUsers] = useState([]);
  const [assignedUser, setAssignedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/getAllUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title: taskName,
      description: description,
      createdBy: currentUser._id,
      assignedTo: assignedUser._id
    };

    try {
      await axios.post('http://localhost:5000/api/task/createTask', newTask);
      alert('Task created successfully!');
      
      navigate('/home');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Error creating task');
    }
  };

  return (
    <div  className='p-3 max-w-lg mx-auto'>
    <form onSubmit={handleSubmit} className="flex flex-col mt-3">
      <div className="flex flex-col mt-3">
        <label>Task Name:</label>
        <input
        className='border p-3 rounded-lg '
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col mt-3">
        <label>Description:</label>
        <textarea
        className='border p-3 rounded-lg '
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="flex flex-col mt-3">
        <label>Assign To:</label>
        <select
        className='border p-3 rounded-lg '
          value={assignedUser}
          onChange={(e) => setAssignedUser(e.target.value)}
          required
        >
          <option value="">Select a user</option>
          {users.map(user => (
            <option className='border p-3 rounded-lg ' key={user._id} value={user._id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      <button  className='bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-1' type="submit">Create Task</button>
    </form>
    </div>
  );
};

export default CreateTask;
