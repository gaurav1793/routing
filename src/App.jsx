import {createBrowserRouter , NavLink, RouterProvider} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar"


//routing
//step1 : create routing
const gk = createBrowserRouter([
  {
    path:"/",
    element:<div>
      <NavBar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:<div>
      <NavBar/>
      <About/>
    </div>
  },
  {
    path:"/dashboard",
    element:<div>
      <NavBar/>
      <Dashboard/>
    </div>
  }

])
function App() {
  
  return (
    <>
      <RouterProvider router={gk}/>
    </>
  )
}

export default App
