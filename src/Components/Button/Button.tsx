// Styles
import "./Button.style.scss";
// types
type ButtonType = "base" | "google" | "secondary";

export type ButtonProps = {
  children: React.ReactNode;
  buttonType: ButtonType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

enum BUTTON_TYPE {
  base = "",
  google = "google-button",
  secondary = "secondary-button",
}
const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
