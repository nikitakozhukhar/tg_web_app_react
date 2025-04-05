import './App.css'
import { useEffect } from 'react'

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className='container'>
      Work
      <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App

 // "name": "telegram_bot",
