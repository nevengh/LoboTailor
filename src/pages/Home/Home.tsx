import { Link } from 'react-router-dom'
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import Hero from '../../components/Hero/Hero'
import FeatureCard from '../../DB/FeaturedCard'
import './Home.css'
import { useLanguage } from '../../LanguageContextType'
import ar from '../../locales/ar'
import en from '../../locales/en'

const Home = () => {
  const{language}=useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <div className='ne_Home'>
        <Hero/>
        <div className="FeaturedCollection">
          <div className="FeaturedCollection_Title">Featured Collection</div>
          <div className='FeaturedCollection_Container'>
          {FeatureCard.slice(0,8).map((items) => (
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
          <div className="AllProductBtn">
            <Link to='/AllProduct'>{translations.AllProduct}</Link>
          </div>
        </div>
    </div>
  )
}

export default Home