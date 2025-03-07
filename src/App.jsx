import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/create/:id" element={<CreateTodo />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
