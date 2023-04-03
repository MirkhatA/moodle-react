import s from './Input.module.css';

const Input = (props) => {
  const {
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
  } = props;

  return (
    <div className={s.input}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
