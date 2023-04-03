import {
  PageWithSidebar,
} from '../../components/PageWithSidebar/PageWithSidebar.jsx';
import s from './HomePage.module.css';
import {HiOutlineSquares2X2} from 'react-icons/hi2';
import {BiBookOpen, BiHomeAlt} from 'react-icons/bi';
import {BsCalendarDay} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {Sidebar} from '../../components/Sidebar/Sidebar.jsx';

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

export const HomePage = () => {
  return (
    <PageWithSidebar>
      <Sidebar rows={rows}/>
      <main className={s.main}>
        <div className='container'>
          <h1>Главная страница</h1>

        </div>
      </main>
    </PageWithSidebar>
  );
};
