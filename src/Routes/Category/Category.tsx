import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/Categories/Categories.selector";
// Components
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../../Components/ProductCard/ProductCard";
//Styles
import "./Category.scss";
// Types
type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-wrapper">
      <h2>{category}</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="category-products-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
