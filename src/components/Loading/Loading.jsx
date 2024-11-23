import style from './Loaging.module.scss';

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loading;