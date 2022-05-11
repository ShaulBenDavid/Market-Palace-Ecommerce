import './CategoryItem.style.scss';

const CategoryItem = ({ category }) => {
    const { imgUrl, title } = category;

    return (
        <div className={`category-container ${title}`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imgUrl})`
            }} />
            <div className='overlay'/>
            <div className="category-title">
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default CategoryItem;