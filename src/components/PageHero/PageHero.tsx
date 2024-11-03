import './PageHero.css'

interface PageHeroProps{
  PageName:string|undefined;
  heroImg:string;
}
const PageHero:React.FC<PageHeroProps> = ({PageName,heroImg}) => {
  return (
    <div className='PageHero'>
        <img src={heroImg} alt="" />
        <h2>{PageName}</h2>
    </div>
  )
}

export default PageHero