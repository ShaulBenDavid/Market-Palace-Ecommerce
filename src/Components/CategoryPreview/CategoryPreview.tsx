import React from "react";
import { Link } from "react-router-dom";
// Components
import ProductCard from "../ProductCard/ProductCard";
// Styles
import "./CategoryPreview.scss";
// Types
import { CategoryItem } from "../../Store/Categories/Categories.types";
type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <div className="category-preview-wrapper">
      <Link to={title}>{title}</Link>
      <div className="category-preview-products">
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <ProductCard key={product.id} item={product} />)}
      </div>
    </div>
  );
};

export default CategoryPreview;
