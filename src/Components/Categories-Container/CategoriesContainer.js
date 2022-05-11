import CategoryItem from "../Category-Item/CategoryItem";
import './CategoriesContainer.style.scss';

const CategoriesContainer = ({ categories }) => {
     
    return (
        <div className="categories-flex">
            <div className="categories-container">
                {categories.map((category) => (
                    <CategoryItem category={category} key={category.id} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesContainer;