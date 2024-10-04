import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
