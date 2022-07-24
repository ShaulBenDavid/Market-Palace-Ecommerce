import './Auth.style.scss';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import FormCover from '../../Components/FormCover/FormCover';
import { useState } from 'react';

const Auth = () => {
    const [signType, setSignType] = useState(true);

    const handleCover = () => {
        setSignType(!signType);
    };

    return (
        <div className="auth-container">
        <div className={`form-cover-container  ${!signType ? 'active-cover' : ''}`} onClick={() => handleCover()}>
            <FormCover signType={signType}/>
        </div>
            <div className="sign-in-container">
                <SignIn />
            </div>
            <div className="sign-up-container">
                <SignUp />
            </div>
        </div>
    );
};

export default Auth;