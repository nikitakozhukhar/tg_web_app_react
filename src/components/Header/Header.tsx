import './Header.css'
import { useEffect } from 'react'
// import IInitDataUnsave from '../../interface/IInitDataUnsave'
import Button from '../Button/Button';

const Header = () => {
  const tg = window.Telegram.WebApp;
  let userName;

  const onClose = () => {
    tg.close()
  }

  useEffect(() => {
    userName = tg.initDataUnsafe?.user?.username
  }, [])

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть </Button>
      <span>{userName}</span>
    </div>
  );
};

export default Header;