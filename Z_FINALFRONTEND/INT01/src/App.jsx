import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Compra from './pages/Compra'
import Register from './pages/Register'
import Ayuda from './pages/ayuda'
import Info from './pages/info'
import CreateCompra from './pages/CreateCompra'
import LayoutBase from './layouts/LayoutBase'
import Character from './pages/Character'

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutBase>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Compra' element={<Compra />} />
            <Route path='/register' element={<Register />} />
            <Route path='/info' element={<Info />} />
            <Route path='/ayuda' element={<Ayuda />} />
            <Route path='/CreateCompra' element={<CreateCompra />} />
            <Route path='/character/:id' element={<Character />} />
          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </>
  )
}

export default App
