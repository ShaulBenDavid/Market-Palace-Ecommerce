import { Fragment, useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import { CartContext } from "../../Context/CartContext";
import { signOutUser } from "../../Utils/FireBase/FIreBase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/User/User.selector";

import { ReactComponent as MpLogo } from '../../assets/mp-logo.svg';
import CartIcon from '../../Components/CartIcon/CartIcon';
import CartBox from "../../Components/CartBox/CartBox";

import './navigation.style.scss';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const { cartIsOpen } = useContext(CartContext);

    return (
        <Fragment>
            <nav className="navigation">
                <div className="nav-flex">
                    <Link className="logo-container" to='/'>
                        <MpLogo className="logo"/>
                    </Link>
                    <div className="nav-links-container">
                        <Link className="nav-link" to='/shop'>
                            SHOP
                        </Link>
                        <Link className="nav-link" to='/about'>
                            ABOUT
                        </Link>

                        {currentUser ?
                            <span className="nav-link" to='/auth' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                            :
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        }
                        <CartIcon />
                    </div>
                </div>
                {cartIsOpen && <CartBox />}
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;