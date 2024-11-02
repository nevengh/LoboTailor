import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import PageHero from '../../components/PageHero/PageHero'
import FeatureCard from '../../DB/FeaturedCard'
import './AllProduct.css'

const AllProduct = () => {
  return (
    <div className='AllProductPage'>
      <PageHero/>
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
    </div>
  )
}

export default AllProduct