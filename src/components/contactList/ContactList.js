import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/phonebook";
import style from "./ContactList.module.css";

export default function PhonebookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContact());
  }, [dispatch]);

  const filteredContacts = useSelector(contactsSelectors.getVisibleContacts);

  const deleteBtnHandler = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      <h2 className={style.contactLabel}>Contacts</h2>
      <ul className={style.contactList}>
        {filteredContacts.map((contact) => (
          <li className={style.contactListItem} key={contact.id}>
            <span className={style.listItemdData}>
              {contact.name}:{" "}
              <a href="tel:+{contact.number}">{contact.number}</a>
            </span>
            <button
              className={style.contactsBtn}
              type="button"
              onClick={() => deleteBtnHandler(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
