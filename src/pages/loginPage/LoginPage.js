import LoginForm from "../../components/loginForm/LoginForm";

export default function loginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authOperations } from "../../redux/authorization";

// export default function LoginPage() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         return setEmail(value);
//       case "password":
//         return setPassword(value);
//       default:
//         return;
//     }
//   };
//   const resetForm = () => {
//     setEmail("");
//     setPassword("");
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(authOperations.logIn({ email, password }));
//     resetForm();
//   };

//   return (
//     <div>
//       <h2>Login form</h2>

//       <form onSubmit={handleSubmit} autoComplete="off">
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// }
