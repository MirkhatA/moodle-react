import s from './RegisterPage.module.css';
import {Button} from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import logo from '../../assets/img/logo.png';

export const RegisterPage = () => {
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
              placeholder={'почта...'}
            />
            <Input
              label={'Логин'}
              type={'text'}
              placeholder={'логин...'}
            />
            <Input
              label={'Имя'}
              type={'text'}
              placeholder={'имя...'}
            />
            <Input
              label={'Фамилия'}
              type={'text'}
              placeholder={'фамилия...'}
            />
            <Input
              label={'Пароль'}
              type={'password'}
              placeholder={'пароль...'}
            />
            <Input
              label={'Повторить пароль'}
              type={'password'}
              placeholder={'повторить пароль...'}
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
