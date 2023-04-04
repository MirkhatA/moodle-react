import {useState} from 'react';
import s from './PageWithSidebar.module.css';

export const PageWithSidebar = (props) => {
  const {
    children,
  } = props;

  const [token, setToken] = useState('');

  if (!token) return children;
  return (
    <div className={s.page}>
      { children }
    </div>
  );
};
