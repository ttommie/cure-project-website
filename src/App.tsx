import Nav from "./components/Nav"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Legal from "./pages/legal"

function App() {

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-800 to-zinc-900 transition duration-75">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </div>
  )
}

export default App
