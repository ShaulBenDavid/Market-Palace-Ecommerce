import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/User/User.selector";
import { cartIsOpenSelector } from "../../Store/Cart/Cart.selector";
import { logOutStart } from "../../Store/User/User.action";

import { ReactComponent as MpLogo } from "../../assets/mp-logo.svg";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartBox from "../../Components/CartBox/CartBox";

import "./navigation.style.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const cartIsOpen = useSelector(cartIsOpenSelector);

  const handleLogOut = () => {
    dispatch(logOutStart());
  };

  return (
    <Fragment>
      <nav className="navigation">
        <div className="nav-flex">
          <Link className="logo-container" to="/">
            <MpLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>

            {currentUser ? (
              <span className="nav-link" to="/auth" onClick={handleLogOut}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <CartIcon />
          </div>
        </div>
        {cartIsOpen && <CartBox />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
