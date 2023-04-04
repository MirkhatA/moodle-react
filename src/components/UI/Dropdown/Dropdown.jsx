import s from './Dropdown.module.css';
import React from 'react';
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io';
import {AiOutlineLink} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';


export const Dropdown = (props) => {
  const {
    data,
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!data.items.length) return null;
  if (!isOpen) {
    return (
      <div className={s.dropDown}>
        <div onClick={handleOpen} className={s.dropDownTitle}>
          <IoMdArrowDropdown/>
          {data.title}
        </div>
      </div>
    );
  }
  return (
    <div className={s.dropDown}>
      <div onClick={handleOpen} className={s.dropDownTitle}>
        <IoMdArrowDropup/>
        {data.title}
      </div>
      <ul className={s.dropDownList}>
        {
          data.items.map((row) => (
            <li key={row.id} className={s.dropDownListItem}>
              <AiOutlineLink/>
              <NavLink className={s.dropDownLink}
                to={row.label}>{row.label}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
