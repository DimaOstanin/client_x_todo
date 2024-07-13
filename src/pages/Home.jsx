import { useEffect ,useState} from "react"


export const Home = () => {
  const [users, setUsers] = useState([])
  const [tasks,setTasks] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/getAllUsers')
      const data = await res.json()
      console.log(data) 
       setUsers(data)
      } catch (error) {
        alert(error)
      }
     
    }
    fetchUsers()
  }, [])

  
  return (
    <div className="flex flex-row">
      <div className="w-3/4 bg-slate-400">
        <h1 className="text-center bold uppercase">Welcome to task manager</h1>
        <h2 className="text-center bold uppercase">All tasks</h2>
      </div>
      <div className="w-1/4 bg-blue-300">
        <h1 className="text-center bold uppercase">Users</h1>
        {users.map((user) => (
          <div className="border" key={user.id}>{user.username}</div>
        ))}
      </div>
    </div>
  )
}
