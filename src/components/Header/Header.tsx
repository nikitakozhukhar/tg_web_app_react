import './Header.css'
import { useEffect } from 'react'
import useTelergam from '../../hooks/useTelergam';
// import IInitDataUnsave from '../../interface/IInitDataUnsave'
import Button from '../Button/Button';

const Header = () => {

  const { onClose, user } = useTelergam();


  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть </Button>
      <span>{user}</span>
    </div>
  );
};

export default Header;