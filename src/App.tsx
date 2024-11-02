import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ProductProfile from './pages/ProductProfile/ProductProfile'
import { LanguageProvider } from './LanguageContextType'
import AboutUs from './pages/AboutUs/AboutUs'
import AllProduct from './pages/AllProduct/AllProduct'

const App = () => {
  return (
    <div className='App'>
      <LanguageProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route  path='/about' element={<AboutUs/>}  />
        <Route  path='/contact' element={<AboutUs/>}  />
        <Route  path='/AllProduct' element={<AllProduct/>}  />
        <Route path='/product/:id' element={<ProductProfile/>} />
      </Routes>
      
      </BrowserRouter>
      </LanguageProvider>
    </div>
  )
}

export default App