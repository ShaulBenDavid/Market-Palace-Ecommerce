import FormInput from "../FormInput/FormInput";
import { useState } from 'react';
import Button from "../Button/Button";
import './SignIn.style.scss';

const defaultFormField = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const handleSubmit = (event) => {
        event.preventDefault();

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
                    <Button type="button" buttonType="google">Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;