import './Button.style.scss'

const BUTTON_TYPE = {
    google: 'google-button',
    secondary: 'secondary-button'
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>{children}</button>
    );
}

export default Button;