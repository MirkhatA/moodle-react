import './App.css';
import {useState} from 'react';
import {BiBookOpen, BiHomeAlt} from 'react-icons/bi';
import {BsCalendarDay} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineSquares2X2} from 'react-icons/hi2';
import {
  PageWithSidebar,
} from './components/PageWithSidebar/PageWithSidebar.jsx';
import {Sidebar} from './components/Sidebar/Sidebar.jsx';
import {AppRoutes} from './routes/AppRoutes.jsx';

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

function App() {
  return (
    <PageWithSidebar>
      <Sidebar rows={rows}/>
      <AppRoutes/>
    </PageWithSidebar>
  );
}

export default App;
