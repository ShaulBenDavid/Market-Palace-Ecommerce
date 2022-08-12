import { useId } from "react";
// Components
import CategoryItem from "../Category-Item/CategoryItem";
// Styles
import './CategoriesContainer.style.scss';
// Types
export type CategoriesContainerParams = {
    id: string,
    title: string,
    imgUrl: string,
    route: string;
}

const CategoriesContainer = () => {
    
    const categories: CategoriesContainerParams[] = [
       {
           "id": useId(),
           "title": "MENS",
           "imgUrl": "https://i.ibb.co/8g9t4k3/mens.png",
           "route": "shop/mens"
       },
       {
           "id": useId(),
           "title": "T-SHIRT",
           "imgUrl": "https://i.ibb.co/6snyCW2/tshirt.png",
           "route": "shop/tshirt"
       },
       {
           "id": useId(),
           "title": "HOODIES",
           "imgUrl": "https://i.ibb.co/QNyxx9d/hoodies.png",
           "route": "shop/hoodies"
       },
       {
           "id": useId(),
           "title": "WOMENS",
           "imgUrl": "https://i.ibb.co/6tHfStp/girls.png",
           "route": "shop/womens"
       }
    ];

    return (
        <div className="categories-flex">
            <div className="categories-container">
                {categories.map((category) => (
                    <CategoryItem category={category} key={category.id} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesContainer;