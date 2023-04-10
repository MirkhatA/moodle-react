import s from './RegisterPage.module.css';
import {Button} from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import logo from '../../assets/img/logo.png';
import {useContext} from 'react';
import {StorageContext} from '../../App.jsx';


export const RegisterPage = () => {
  const {currentUser, setCurrentUser} = useContext(StorageContext);
  return (
    <div className={s.bgRegister}>
      <div className={s.registerSideBar}>
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

          <form className={s.registerForm}>
            <h2>Регистрация</h2>

            <Input
              label={'Почта'}
              type={'email'}
              placeholder={'Введите почту...'}
            />
            <Input
              label={'Логин'}
              type={'text'}
              placeholder={'Введите логин...'}
            />
            <Input
              label={'Имя'}
              type={'text'}
              placeholder={'Введите имя...'}
            />
            <Input
              label={'Фамилия'}
              type={'text'}
              placeholder={'Ввдеите фамилию...'}
            />
            <Input
              label={'Пароль'}
              type={'password'}
              placeholder={'Введите пароль...'}
            />
            <Input
              label={'Повторить пароль'}
              type={'password'}
              placeholder={'Повторите ваш пароль...'}
            />

            <div className={s.buttonGroup}>
              <Button>Войти</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
