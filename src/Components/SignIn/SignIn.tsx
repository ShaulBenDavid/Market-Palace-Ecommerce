import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  googleLogInStart,
  emailLogInStart,
} from "../../Store/User/User.action";
// Components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
// Types
import { AuthError, AuthErrorCodes } from "firebase/auth";
// Styles
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailLogInStart(email, password));
      resetFormFields();
    } catch (err) {
      if (
        (err as AuthError).code === AuthErrorCodes.INVALID_PASSWORD ||
        (err as AuthError).code === AuthErrorCodes.INVALID_EMAIL
      ) {
        alert("Wrong Password or Email");
      }
      console.log(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Button type="submit" buttonType="base">Sign In</Button>
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
