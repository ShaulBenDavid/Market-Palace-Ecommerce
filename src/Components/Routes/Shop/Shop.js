import React, { useContext } from "react";
import './Shop.scss';

import { ProductsContext } from "../../../Context/ProductsContext";
import ProductCard from "../../ProductCard/ProductCard";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="shop-wrapper">
            {products.map((item) => 
                <ProductCard key={item.id} item={item} /> 
                )
            }
        </div>
    );
};

export default Shop;