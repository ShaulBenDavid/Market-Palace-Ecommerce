import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../Store/User/User.selector";
// components
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import FormCover from "../../Components/FormCover/FormCover";
// Styles
import "./Auth.style.scss";

const Auth = () => {
  const [signType, setSignType] = useState(true);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleCover = () => {
    setSignType(!signType);
  };
  // Navigate to home when the user make a login
  useEffect(() => {
    currentUser?.email && navigate("/");
  }, [currentUser]);

  return (
    <div className="auth-container">
      <div
        className={`form-cover-container  ${!signType ? "active-cover" : ""}`}
        onClick={() => handleCover()}
      >
        <FormCover signType={signType} />
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
