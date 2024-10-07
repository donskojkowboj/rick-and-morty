import styles from './FilterPopup.module.scss';

export const FilterPopup = () => {
  return (
    <form className={styles.popup}>
      <input className={styles.popup__search} name="name" type="text" placeholder={'Type name here'} />
      <select className={styles.popup__select} name="status" id="status-select">
        <option value="">Choose status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select className={styles.popup__select} name="gender" id="gender-select">
        <option value="">Choose gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      <button className={styles.popup__btn}>Apply</button>
    </form>
  );
};
