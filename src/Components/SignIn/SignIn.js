import FormInput from "../FormInput/FormInput";
import { useState } from 'react';
import Button from "../Button/Button";
import './SignIn.style.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserAuthWithEmailAndPassword } from '../../Utils/FireBase/FIreBase';

const defaultFormField = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const logInWithGooglePopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userRefDoc = await createUserDocumentFromAuth(user);
        console.log(userRefDoc);
    }

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInUserAuthWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (err) {
            if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
                console.log("Wrong Password or Email"); 
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
                <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email}/>
                <FormInput label="Password" type="password" required name="password" onChange={handleChange} value={password}/>
                <div className="buttons-form-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={logInWithGooglePopup}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;