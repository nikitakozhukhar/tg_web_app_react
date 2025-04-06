import './App.css'
import { useEffect } from 'react';
import useTelergam from './hooks/useTelergam'
import Header from './components/Header/Header';


function App() {

  const { onToggleButton, tg } = useTelergam();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className='App'>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App

