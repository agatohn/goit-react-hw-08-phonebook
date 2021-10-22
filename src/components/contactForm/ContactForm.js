import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/phonebook";
import style from "./ContactForm.module.css";

export default function PhonebookForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (contact) =>
    dispatch(contactsOperations.addContact(contact));

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label className={style.formLabel} htmlFor="name">
            Name
            <input
              className={style.formInput}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
        </div>
        <div>
          <label className={style.formLabel} htmlFor="number">
            Number
            <input
              className={style.formInput}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>
        <button className={style.formBtn} type="submit">
          Add contact to phonebook
        </button>
      </form>
    </div>
  );
}
