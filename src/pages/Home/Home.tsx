import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import Hero from '../../components/Hero/Hero'
import FeatureCard from '../../DB/FeaturedCard'
import './Home.css'

const Home = () => {
  return (
    <div className='ne_Home'>
        <Hero/>
        <div className="FeaturedCollection">
          <div className="FeaturedCollection_Title">Featured Collection</div>
          <div className='FeaturedCollection_Container'>
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
    </div>
  )
}

export default Home