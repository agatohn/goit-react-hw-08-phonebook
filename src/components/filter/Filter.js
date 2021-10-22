import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/phonebook";
import style from "./Filter.module.css";

const Filter = () => {
  const inputValue = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(contactsActions.changeFilter(e.currentTarget.value));
  };

  return (
    <div className={style.formWrapper}>
      <label className={style.filterLabel}>
        Find contact by name
        <input
          className={style.filterInput}
          type="text"
          name="filter"
          value={inputValue}
          onChange={onChange}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </div>
  );
};

export default Filter;
