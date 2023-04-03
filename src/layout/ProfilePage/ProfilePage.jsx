import {BiBookOpen, BiHomeAlt} from 'react-icons/bi';
import {BsCalendarDay} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineSquares2X2} from 'react-icons/hi2';
import {NavLink} from 'react-router-dom';
import {
  PageWithSidebar,
} from '../../components/PageWithSidebar/PageWithSidebar.jsx';
import {Sidebar} from '../../components/Sidebar/Sidebar.jsx';
import s from './ProfilePage.module.css';

const rows = [
  {
    label: 'Профиль',
    icon: <CgProfile/>,
    to: '/profile',
  },
  {
    label: 'Главная',
    icon: <BiHomeAlt/>,
    to: '/',
  },
  {
    label: 'Предметы',
    icon: <HiOutlineSquares2X2/>,
    to: '/lessons',
  },
  {
    label: 'Журнал оценок',
    icon: <BiBookOpen/>,
    to: '/grades',
  },
  {
    label: 'Расписание',
    icon: <BsCalendarDay/>,
    to: '/timetable',
  },
];

export const ProfilePage = () => {
  const user = {
    fullname: 'Асен Мирхат Маратулы',
    login: 'e@example.com',
    group: 'Взвод 12',
  };

  return (
    <PageWithSidebar>
      <Sidebar rows={rows}/>
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
    </PageWithSidebar>
  );
};
