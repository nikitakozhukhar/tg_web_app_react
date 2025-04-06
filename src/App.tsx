import './App.css'
import { useEffect } from 'react';
import useTelergam from './hooks/useTelergam'


function App() {

  const { onToggleButton, tg } = useTelergam();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className=''>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App

