import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization/index";
import style from "./RegForm.module.css";

export default function Regform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <div className={style.formWrapper}>
      <h2 className={style.formName}>Registration form</h2>
      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={style.formLabel}>
          Name
          <input
            className={style.formInput}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={style.formLabel}>
          Email
          <input
            className={style.formInput}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={style.formLabel}>
          Password
          <input
            className={style.formInput}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={style.formBtn} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
