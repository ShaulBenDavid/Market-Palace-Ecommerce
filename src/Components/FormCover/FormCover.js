import './FormCover.style.scss';


const FormCover = ({ signType }) => {

    return (
        <div className="form-cover">
            <div className="box-type-container">
                <h3>{signType ? 'Sign Up' : 'sign In'}</h3>
            </div>
        </div>
    );
};

export default FormCover;