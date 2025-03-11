import './index.css'
import { CiHeart } from "react-icons/ci";

const ProductItem=(props)=>{
    const {product}=props;
    const {id,title,image,price}=product;
    return(
        <li className="product-item" >
            <img src={image} alt={title} className="product-image" />
            <h1 className="product-title" >{title}</h1>
            <div className="product-price-heart" >
            <p className="product-price" >{price}</p>
            <CiHeart size={35} color='black' />
            </div>
          
        </li>
    )
}

export default ProductItem