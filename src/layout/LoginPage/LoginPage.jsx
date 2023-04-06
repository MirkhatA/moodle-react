import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import Input from '../../components/ui/Input/Input';
import {Button} from '../../components/ui/Button/Button';
import authStore from '../../store/authStore.js';
import {login} from '../../services/authService.js';

import s from './LoginPage.module.css';
import {setUser} from '../../services/tokenService.js';
import {StorageContext} from '../../App.jsx';


export const LoginPage = (props) => {
  const [barcode, setBarcode] = useState(null);
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const {currentUser, setCurrentUser} = useContext(StorageContext);

  const navigate = useNavigate();

  const onChangeBarcode = (e) => {
    setBarcode(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  function handleCheckboxChange(e) {
    setIsChecked(e.target.value);
  }

  useEffect(() => {
    function clearLocalStorage() {
      localStorage.removeItem('session');
    }

    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(barcode, password);
      console.log(res);
      setTimeout(() => {
        if (res.data.accessToken) {
          setBarcode('');
          setPassword('');
          setUser(res.data);
          setCurrentUser(res.data);
        }
        if (res.data.role === 'ROLE_STUDENT') {
          authStore.setMessage('Успешная авторизация роль студента');
          navigate('/');
        } else if (res.data.role === 'ROLE_TEACHER') {
          authStore.setMessage('Успешная авторизация роль учителя');
          navigate('/');
        }
      }, 1000);
    } catch (error) {
      authStore.setMessage('Неправильный логин или пароль');
    }
  };

  return (
    <div className={s.bgLogin}>
      <div className={s.loginSideBar}>
        <div className="container">
          <div className={s.logo}>
            <div className={s.logoImg}>
              <figure>
                <img src={logo} alt="logo.png"/>
              </figure>
            </div>
            <div className={s.logoText}>
              <h3>MOODLE</h3>
              <h3>MD AITU</h3>
            </div>
          </div>

          <div>
            {authStore.message}
          </div>

          <form className={s.loginForm} onSubmit={handleOnSubmit}>
            <h2>Авторизация</h2>

            <Input
              label={'Логин'}
              type={'text'}
              placeholder={'логин...'}
              onChange={onChangeBarcode}
            />
            <Input
              label={'Пароль'}
              type={'password'}
              placeholder={'пароль...'}
              onChange={onChangePassword}
            />

            <div className={s.checkbox}>
              <input
                id="checkbox"
                type="checkbox"
                value={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox">Запомнить</label>
            </div>

            <div className={s.buttonGroup}>
              <Button>Войти</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
