import s from './Button.module.css';

export const Button = (props) => {
  const {
    children,
    disabled = false,
    className,
    id,
    ...etc
  } = props;

  return (
    <button
      id={id}
      className={`${s.button} ${className ? className : ''}`}
      disabled={disabled}
      {...etc}
    >
      {children}
    </button>
  );
};
