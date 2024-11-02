import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ProductProfile from './pages/ProductProfile/ProductProfile'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route path='/product/:id' element={<ProductProfile/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App