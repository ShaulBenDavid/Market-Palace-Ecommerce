import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import './Category.scss';
import { selectCategories } from "../../Store/Categories/Categories.selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <div className="category-wrapper">
            <h2>{category}</h2>
            <div className="category-products-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} item={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Category;
