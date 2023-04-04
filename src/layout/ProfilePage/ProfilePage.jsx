import {NavLink} from 'react-router-dom';
import s from './ProfilePage.module.css';

export const ProfilePage = () => {
  const user = {
    fullname: 'Асен Мирхат Маратулы',
    login: 'e@example.com',
    group: 'Взвод 12',
  };

  return (
    <main className={s.main}>
      <div className='container'>
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
    </main>
  );
};
