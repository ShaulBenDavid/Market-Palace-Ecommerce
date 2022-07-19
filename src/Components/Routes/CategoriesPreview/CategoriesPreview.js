import React from "react";
import { useContext } from "react";
import { CategoreisContext } from '../../../Context/CategoreisContext';
import CategoryPreview from "../../CategoryPreview/CategoryPreview";
import './CategoriesPreview.scss'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoreisContext)

    return (
        <div className="categories-previes-wrapper">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />;
            })}
        </div>
  );
};

export default CategoriesPreview;
