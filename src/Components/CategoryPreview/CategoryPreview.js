import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-wrapper">
      <Link as="h2" to={title}>{title}</Link>
      <div className="category-preview-products">
        {products && products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
