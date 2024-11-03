import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import PageHero from '../../components/PageHero/PageHero'
import FeatureCard from '../../DB/FeaturedCard'
import './AllProduct.css'
import allproduct from '../../assets/slide3.jpg'
import FooterTopBaaner from '../../components/FooterTopBaaner/FooterTopBaaner'
import sppotlight from '../../assets/spools-thread-basic-sewing-tools-including-needles-tape-measure-thimble-checkered-background.jpg'
const AllProduct = () => {
  return (
    <div className='AllProductPage'>
      <PageHero PageName='All Product' heroImg={allproduct}/>
      <div className="AllProductPage_Container">
      {FeatureCard.map((items) => (
            <FeaturedCard
            key={items.id} // Always provide a unique key
            id={items.id}
            card_info_head={items.card_info_head}
            card_info_subhead={items.card_info_subhead}
            defaultImage={items.defaultImage}
            hoverImage={items.hoverImage}
          />
          ))}
      </div>
      <FooterTopBaaner  footerimg={sppotlight} footertext="Your Vision, Our Precision" footerheading="Book your Appointment Now" />
    </div>
  )
}

export default AllProduct