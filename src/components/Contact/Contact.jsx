import { FaUser, FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contactInfo: { id, name, number } }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div>
        <div className={css.contactTitle}>
          <FaUser className={css.contactIcon} />
          <p className={css.contactInfo}>{name}</p>
        </div>

        <div className={css.contactTitle}>
          <FaPhoneAlt className={css.contactIcon} />
          <p className={css.contactInfo}>{number}</p>
        </div>
      </div>

      <button type="button" className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
