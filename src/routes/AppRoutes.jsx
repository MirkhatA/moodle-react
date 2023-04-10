import {Navigate, Route, Routes} from 'react-router-dom';
import {RegisterPage} from '../layout/RegisterPage/RegisterPage.jsx';
import {LoginPage} from '../layout/LoginPage/LoginPage.jsx';
import {HomePage} from '../layout/HomePage/HomePage.jsx';
import {ProfilePage} from '../layout/ProfilePage/ProfilePage.jsx';
import {ErrorPage} from '../layout/ErrorPage/ErrorPage.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setToken} from '../store/reducers/authReducer.js';

export const AppRoutes = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      const tokenData = localStorage.getItem('user');
      if (tokenData == null) return;
      dispatch(setToken({token: JSON.parse(tokenData)}));
    }
  }, [token]);

  if (!token) {
    return (
      <Routes>
        <Route path={'/'} element={<Navigate to={'/login'}/>}/>
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
      <Route path={'/login'} element={<Navigate to={'/'}/>}/>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/profile'} element={<ProfilePage/>}/>
      <Route path={'*'}
        element={<ErrorPage message={'This page does not exists'}
          to={'/'}
        />}
      />
    </Routes>
  );
};
