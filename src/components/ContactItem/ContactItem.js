import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{number}</p>
      <button
        type="button"
        className={s.contactItemText}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
