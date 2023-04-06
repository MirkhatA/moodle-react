import s from './HomePage.module.css';

export const HomePage = (props) => {
  const user = props.currentUser;
  return (
    <main className={s.main}>
      <div className='container'>
        <h1>Главная страница</h1>
        <p>{user.barcode}</p>
      </div>
    </main>
  );
};
