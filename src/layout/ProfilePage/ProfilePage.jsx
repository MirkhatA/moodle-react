import {useContext, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {NavLink} from 'react-router-dom';
import s from './ProfilePage.module.css';
import {StorageContext} from '../../App.jsx';


export const ProfilePage = () => {
  const {currentUser, setCurrentUser} = useContext(StorageContext);
  const user = {
    fullname: 'Асен Мирхат Маратулы',
    login: 'e@example.com',
    group: 'Взвод 12',
  };

  const [value, onChange] = useState(new Date());

  function handleClickDay(...etc) {
    console.log(etc);
  }

  return (
    <main className={s.main}>
      <div className={`container ${s.container}`}>
        <div className={s.profilePageLeft}>
          <h1>Профиль</h1>
          <div className={s.profileInfo}>
            <div className={s.profileItem}>
              <h4>ФИО</h4>
              <p>{user.fullname}</p>
            </div>
            <div className={s.profileItem}>
              <h4>Логин</h4>
              <p>{user.login}</p>
            </div>
            <div className={s.profileItem}>
              <h4>Взвод</h4>
              <p>{user.group}</p>
            </div>
            <div className={`${s.profileItem} ${s.changePassword}`}>
              <NavLink to={'/changePassword'}>Сменить пароль</NavLink>
            </div>
          </div>
        </div>
        <div className={s.profilePageRight}>
          <div className={s.calendarInfo}>
            <Calendar
              value={value}
              onChange={onChange}
              onClickDay={handleClickDay}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
