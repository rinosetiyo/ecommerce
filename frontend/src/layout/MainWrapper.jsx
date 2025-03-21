import {useState, useEffect} from 'react';
import { setUser } from '../utils/auth';

const MainWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(async() => {
    const handler = async () => {
      setLoading(true);
      await setUser();
      setLoading(false);
    };

    handler();
  }, []);

  return loading ? <div>Loading...</div> : children;
}

export default MainWrapper;