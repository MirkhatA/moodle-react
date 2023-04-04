import {useState} from 'react';
import {HiOutlineLogout} from 'react-icons/hi';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import s from './Sidebar.module.css';

export const Sidebar = (props) => {
  const {
    rows = [],
  } = props;

  const [token, setToken] = useState('');

  if (!token) return null;
  return (
    <aside className={s.aside}>
      <div className={`container ${s.container}`}>
        <div className={s.sidebarLogo}>
          <figure>
            <img src={logo} alt='Logo'/>
          </figure>
        </div>
        <div className={s.sidebarRows}>
          {
            rows.map((row) => (
              <NavLink to={row.to} key={row.label} className={s.sidebarRow}>
                <div className={s.rowIcon}>
                  {row.icon}
                </div>
                <div>
                  <span>
                    {row.label}
                  </span>
                </div>
              </NavLink>
            ))
          }
          <NavLink to={'/logout'} className={s.sidebarLogout}>
            <div className={s.logoutIcon}>
              <HiOutlineLogout/>
            </div>
            <div>
              <span>Выйти</span>
            </div>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
