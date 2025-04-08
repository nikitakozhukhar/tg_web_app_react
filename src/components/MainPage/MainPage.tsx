import './MainPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTelergam from '../../hooks/useTelergam';

const MainPage = () => {

  const navigate = useNavigate();
  const { tg } = useTelergam();

  useEffect(() => {
    const path = tg.initDataUnsafe?.start_param;
    if (path) {
      navigate(`/${path}`)
    }
  }, [navigate])

  return (
    <div>
      <button onClick={() => navigate('/form')}>Go to Form</button>
      <button onClick={() => navigate('/products')}>Go to Products</button>
    </div>
  );
};

export default MainPage;