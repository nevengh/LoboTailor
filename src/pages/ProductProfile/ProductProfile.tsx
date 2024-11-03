import { Link, useParams } from 'react-router-dom';
import './ProductProfile.css';
import { useEffect, useState } from 'react';
import FeatureCard from '../../DB/FeaturedCard';
import PageHero from '../../components/PageHero/PageHero';

interface Product {
    id: number;
    defaultImage: string;
    hoverImage?: string;
    card_info_head: string;
    card_info_subhead: string;
    img_card_collection: string[];
    product_number: string;
    product_text: string;
    product_text_read: string;
}

const ProductProfile = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    const [mainImage, setMainImage] = useState<string | undefined>();
    const [showMore, setShowMore] = useState(false); // State for Read More

    useEffect(() => {
        const selectedProduct = FeatureCard.find(
            (item) => item.id === parseInt(id as string, 10)
        );
        setProduct(selectedProduct);
        setMainImage(selectedProduct?.defaultImage); // Set initial main image to defaultImage
    }, [id]);

    const handleImageClick = (imageUrl: string) => {
        setMainImage(imageUrl);
    };

    const handleReadMoreClick = () => {
        setShowMore(!showMore); // Toggle showMore state
    };

    return (
        <div className='ProductProfile'>
            <PageHero PageName={product?.card_info_head}/>
            <div className="ProductProfile_Container">
                <div className="ProductProfile_Card">
                    <div className="ProductProfile_Card_collection">
                        {product?.img_card_collection.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product Thumbnail ${index + 1}`}
                                onClick={() => handleImageClick(image)} 
                                className="thumbnail-image"
                            />
                        ))}
                    </div>
                    <div className="ProductProfile_image_holder">
                        <img src={mainImage} alt={product?.card_info_head} />
                    </div>
                </div>
                <div className="ProductProfile_Info">
                    <h2 className='ne-card-info-head'>{product?.card_info_head}</h2>
                    <p className='ne-card-info-subhead'>{product?.card_info_subhead}</p>
                    <p className='ne-product-number'>{product?.product_number}</p>
                    <p className='product_text_1'>
                        {product?.product_text}{' '}
                        <span className='read_more' onClick={handleReadMoreClick}>
                            {showMore ? 'Show Less' : 'Read More'}
                        </span>
                    </p>
                    {showMore && <p className='product_text_2'>{product?.product_text_read}</p>} {/* Conditional rendering */}
                </div>
                <div className="ProductProfile_Buttons">
                    <Link to=''  className="EnquireNow">Enquire Now</Link>
                    <Link to='' className='BooKAppoitment'>Book Virtual Appoitment</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductProfile;
