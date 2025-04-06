import './App.css'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useTelergam from './hooks/useTelergam'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import Button from './components/Button/Button';


function App() {

  const { onToggleButton, tg } = useTelergam();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className='App'>
      <Header />
      <Router basename='https://nikitakozhukhar.github.io/tg_web_app_react/'> 
        <Routes>
          <Route path='/form' element={<Form/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
        </Routes>
        <Button onClick={onToggleButton}>toggle</Button>
      </Router>
    </div>
  )
}

export default App

