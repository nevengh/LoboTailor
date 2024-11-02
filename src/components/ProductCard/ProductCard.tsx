import './ProductCard.css'
import { Link } from 'react-router-dom'
interface ProductCardProps{
    ProductKind:string;
    productImg:string;
}
const ProductCard:React.FC<ProductCardProps>= ({productImg,ProductKind}) => {
  return (
    <div className='ProductCard'>
        <div className="product-card">
            <img src={productImg} alt="Product 1" />
            <div className="product-card-content">
              <p className='product-Name'>{ProductKind}</p>
              <Link to='/Product:id' className="View-product">View Product</Link>
            </div>
          </div>
    </div>
  )
}

export default ProductCard