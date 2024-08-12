import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";

import { deleteContactThunk } from "../../../redux/components/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number } = contact;
  return (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContactThunk(contact.id))}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
