import styles from './SearchBox.module.css'


const SearchBox = ({value, onFilter}) => {
  

  return (
      <div>
      <p className={styles.label}>Find contacts by name</p>
      <input className={styles.input} type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
     
    </div>
  );
};




export default SearchBox;