import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-wrapper">
      <h2>{title}</h2>
      <div className="category-preview-products">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
