import { useNavigate } from "react-router-dom";
// Styles
import "./CategoryItem.style.scss";
// Types
import { CategoriesContainerParams } from "../Categories-Container/CategoriesContainer";

type CategoryItemProps = {
  category: CategoriesContainerParams;
};
const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { imgUrl, title, route } = category;
  const navigate = useNavigate();

  const handleNavigateCat = () => navigate(route);
  return (
    <div className={`category-container ${title}`} onClick={handleNavigateCat}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className="overlay" />
      <div className="category-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
