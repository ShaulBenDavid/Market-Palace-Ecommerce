import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as MpLogo } from '../../../assets/mp-logo.svg';
import './navigation.style.scss';

const Navigation = () => {

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
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;