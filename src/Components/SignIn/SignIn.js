import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  googleLogInStart,
  emailLogInStart,
} from "../../Store/User/User.action";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./SignIn.style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const dispatch = useDispatch();
  const { email, password } = formFields;

  const logInWithGooglePopup = async () => {
    dispatch(googleLogInStart());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailLogInStart(email, password));
      resetFormFields();
    } catch (err) {
      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        alert("Wrong Password or Email");
      }
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-form-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={logInWithGooglePopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
