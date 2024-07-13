
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import { CreateTask } from './pages/CreateTask'
import { SaveTask } from './pages/SaveTask'
import { Navbar } from './components/Navbar'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/createTask" element={<CreateTask/>} />
          <Route path="/saveTask" element={<SaveTask/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  )
}
