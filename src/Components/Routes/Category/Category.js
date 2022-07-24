import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoreisContext } from "../../../Context/CategoreisContext";
import ProductCard from "../../ProductCard/ProductCard";
import './Category.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoreisContext);
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
