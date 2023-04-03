import {useId} from 'react';
import s from './Input.module.css';

const Input = (props) => {
  const {
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    id = useId(),
    className,
  } = props;

  return (
    <div>
      {label && <label htmlFor={id} className={s.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        className={`${s.input} ${className && className}`}
      />
    </div>
  );
};

export default Input;
