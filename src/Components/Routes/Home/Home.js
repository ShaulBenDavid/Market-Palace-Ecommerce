import { useId } from "react";
import CategoriesContainer from "../../Categories-Container/CategoriesContainer";
import './Home.style.scss'
const Home = () => {

    const categories = [
        {
            "id": useId(),
            "title": "MENS",
            "imgUrl": "https://i.ibb.co/8g9t4k3/mens.png" 
        },
        {
            "id": useId(),
            "title": "T-SHIRT",
            "imgUrl": "https://i.ibb.co/6snyCW2/tshirt.png" 
        },
        {
            "id": useId(),
            "title": "HOODIES",
            "imgUrl": "https://i.ibb.co/QNyxx9d/hoodies.png" 
        },
        {
            "id": useId(),
            "title": "WOMENS",
            "imgUrl": "https://i.ibb.co/6tHfStp/girls.png" 
        }
    ];

    return (
        <div className="home">
            <CategoriesContainer categories={categories}/>
        </div>
    );
};

export default Home;