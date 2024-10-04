import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={styles.input}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;
