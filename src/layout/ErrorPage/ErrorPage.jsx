import {NavLink} from 'react-router-dom';

export const ErrorPage = (props) => {
  const {
    message = '',
    to,
  } = props;

  return (
    <div>
      <h1>Error 404</h1>
      {message && <h3>{message}</h3>}
      <NavLink to={to}>Go home</NavLink>
    </div>
  );
};
