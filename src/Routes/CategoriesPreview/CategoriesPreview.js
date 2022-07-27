import React from "react";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";
import './CategoriesPreview.scss'
import { useSelector } from "react-redux";
import { selectCategories } from "../../Store/Categories/Categories.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategories);
    
    return (
        <div className="categories-previes-wrapper">
            {categoriesMap && Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />;
            })}
        </div>
  );
};

export default CategoriesPreview;
