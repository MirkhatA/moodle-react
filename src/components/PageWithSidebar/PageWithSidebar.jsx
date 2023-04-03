import s from './PageWithSidebar.module.css';

export const PageWithSidebar = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={s.page}>
      { children }
    </div>
  );
};
