import { Fragment, useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from "../../../Context/UserContext";
import { signOutUser } from "../../../Utils/FireBase/FIreBase";
import { ReactComponent as MpLogo } from '../../../assets/mp-logo.svg';
import CartIcon from '../../CartIcon/CartIcon';
import './navigation.style.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;