
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/create'element={<Create/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
