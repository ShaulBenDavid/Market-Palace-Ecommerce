import FormInput from "../FormInput/FormInput";
import { useState } from 'react';
import Button from "../Button/Button";
import './SignUp.style.scss';
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/FireBase/FIreBase";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password doesn't match");
            return;
        }

        try {
            const { user } = await createUserAuthWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert('This email all ready in use');
            }
            console.log(err);
        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <FormInput label="Full Name" type="name" required name="displayName" onChange={handleChange} value={displayName}/>
                <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email}/>
                <FormInput label="Password" type="password" required name="password" onChange={handleChange} value={password}/>
                <FormInput label="Confirm Password" type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUp;