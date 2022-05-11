import FormInput from "../FormInput/FormInput";
import { useState } from 'react';
import Button from "../Button/Button";
import './SignUp.style.scss';

const defaultFormField = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { fullName, email, password, confirmPassword } = formFields;

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <FormInput label="Full Name" type="name" required name="fullName" onChange={handleChange} value={fullName}/>
                <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email}/>
                <FormInput label="Password" type="password" required name="password" onChange={handleChange} value={password}/>
                <FormInput label="Confirm Password" type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUp;