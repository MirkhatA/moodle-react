import s from './PageWithSidebar.module.css';
import {useSelector} from 'react-redux';

export const PageWithSidebar = (props) => {
  const {
    children,
  } = props;

  const token = useSelector((state) => state.auth.token);

  if (!token) return children;
  return (
    <div className={s.page}>
      { children }
    </div>
  );
};
