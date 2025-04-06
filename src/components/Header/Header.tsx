import './Header.css'
import useTelergam from '../../hooks/useTelergam';
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