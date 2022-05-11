import './FormInput.style.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="input-group">
            <input  className="form-input" {...otherProps}/>
            <label className={`label-input ${otherProps.value.length ? 'shrink' : ''}`}>{label}</label>
        </div>
    );
}

export default FormInput;