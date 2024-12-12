import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = (props) => {
    const { productItems, onClickLike } = props;  // Expecting 'productItems' as prop
    const { id, image, title, price, isLike } = productItems;  // Only using necessary props

    const handleLikeClick = () => {
        onClickLike(id);  // Toggle like functionality
    };

    return (
        <li className="product-item-wrapper">
            <div className="product-card">
                <Link to={`/products/${id}`} className="image-link">
                    <img src={image} alt="Product" className="product-image" />
                </Link>
                <div className="details-section">
                    <h4 className="product-title">{title}</h4>
                    <IoHeartSharp 
                        size={20} 
                        color={isLike ? 'red' : 'gray'} 
                        className="like-icon" 
                        onClick={handleLikeClick} 
                    />
                </div>
                <div className="price-section">
                    <h4 className="product-price">Rs.{price}</h4>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;

