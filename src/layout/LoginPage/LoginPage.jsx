import s from './LoginPage.module.css';
import {Button} from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import logo from '../../assets/img/logo.png';
import {useState} from 'react';

export const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.value);
  }

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

          <form className={s.loginForm}>
            <h2>Авторизация</h2>

            <Input
              label={'Логин'}
              type={'text'}
              placeholder={'логин...'}
            />
            <Input
              label={'Пароль'}
              type={'password'}
              placeholder={'пароль...'}
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
