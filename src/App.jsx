
import './App.css'

import CardSection from './Components/Cards/CardSection'
import Navigation from './Components/NavBar/Nav'
import Cart from './Components/NavBar/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/Homepage/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/cart'element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
