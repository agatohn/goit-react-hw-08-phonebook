import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization";
import style from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <div className={style.formWrapper}>
      <h2 className={style.formName}>Login form</h2>

      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
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
          Log in
        </button>
      </form>
    </div>
  );
}
