
import Container from "./Components/Container"
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Todo from "./Components/Todo"


function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Container/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
      </Routes>
    </Router>
 
      
    </>
  )
}

export default App
