import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Math from "./pages/Math"
import Physics from "./pages/Physics"
import Chemistry from "./pages/Chemistry"
import CS from "./pages/CS"
import Leaderboard from "./pages/Leaderboard"
import Login from "./pages/Login"

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<Math />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
 
    </div>

  )
}

export default App
