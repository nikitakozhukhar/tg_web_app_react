import './Header.css'
import { Link } from "react-router-dom";
import useTelergam from '../../hooks/useTelergam';
import Button from '../Button/Button';

const Header = () => {

  const { onClose, user } = useTelergam();

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <Link to={'/form'}>
        <Button>Open form</Button>
      </Link>
      <span>{user}</span>
    </div>
  );
};

export default Header;