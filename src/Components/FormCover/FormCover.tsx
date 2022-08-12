// Styles
import "./FormCover.style.scss";
// Types
type FormCoverProps = {
  signType: boolean;
};

const FormCover: React.FC<FormCoverProps> = ({ signType }) => {
  return (
    <div className="form-cover">
      <div className="box-type-container">
        <h3>{signType ? "Sign Up" : "sign In"}</h3>
      </div>
    </div>
  );
};

export default FormCover;
