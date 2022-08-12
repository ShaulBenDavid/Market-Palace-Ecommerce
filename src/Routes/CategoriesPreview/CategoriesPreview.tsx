import React from "react";

import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/Categories/Categories.selector";

import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";

import "./CategoriesPreview.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="categories-previes-wrapper">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
