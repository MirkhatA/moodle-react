import {useState} from 'react';
import logo from '../../assets/img/logo.png';
import Input from '../../components/ui/Input/Input';
import {Button} from '../../components/ui/Button/Button';
import {login} from '../../services/authService.js';

import s from './LoginPage.module.css';
import {useDispatch} from 'react-redux';
import {setToken} from '../../store/reducers/authReducer.js';

export const LoginPage = () => {
  const [barcode, setBarcode] = useState(null);
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onChangeBarcode = (e) => {
    setBarcode(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  function handleCheckboxChange(e) {
    setIsChecked(e.target.value);
  }

  const handleOnSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    try {
      login(barcode, password)
          .then((res) => {
            dispatch(setToken({token: res.data.accessToken}));
          })
          .finally(() => {
            setIsLoading(false);
          });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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

          {/* <div> */}
          {/*   {authStore.message} */}
          {/* </div> */}

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
              <Button disabled={isLoading}>Войти</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
