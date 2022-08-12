// Styles
import "./FormInput.style.scss";
// Types
type FormInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="input-group">
      <input className="form-input" {...otherProps} />
      <label
        className={`label-input ${
          typeof otherProps.value === "string" && otherProps.value?.length
            ? "shrink"
            : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
