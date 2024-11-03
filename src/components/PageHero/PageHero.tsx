import './PageHero.css'
import hero from '../../assets/hands-manufacturing-clothes-close-up.jpg'
interface PageHeroProps{
  PageName:string|undefined
}
const PageHero:React.FC<PageHeroProps> = ({PageName}) => {
  return (
    <div className='PageHero'>
        <img src={hero} alt="" />
        <h2>{PageName}</h2>
    </div>
  )
}

export default PageHero