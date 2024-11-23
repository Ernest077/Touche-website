import style from './Search.module.scss';

const Search = ({ visible }) => {
    return (
        <div className={style.Search} style={{ display: visible ? 'flex' : 'none' }}>
            <input className={style.SearchInput} type="text" placeholder="SEARCH" />
        </div>
    );
};

export default Search;