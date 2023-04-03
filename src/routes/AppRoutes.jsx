import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {RegisterPage} from '../layout/RegisterPage/RegisterPage.jsx';
import {LoginPage} from '../layout/LoginPage/LoginPage.jsx';
import {HomePage} from '../layout/HomePage/HomePage.jsx';
import {ProfilePage} from '../layout/ProfilePage/ProfilePage.jsx';
import {ErrorPage} from '../layout/ErrorPage/ErrorPage.jsx';

export const AppRoutes = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      const token = localStorage.getItem('token');
      setToken(token);
    }
  }, [token]);

  if (!token) {
    return (
      <Routes>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
        <Route path={'*'} element={
          <ErrorPage
            message={'This page does not exists'}
            to={'/login'}
          />
        }/>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/profile'} element={<ProfilePage/>}/>
      <Route path={'*'} element={
        <ErrorPage
          message={'This page does not exists'}
          to={'/'}
        />
      }/>
    </Routes>
  );
};
