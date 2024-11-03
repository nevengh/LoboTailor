import { Link } from 'react-router-dom'
import './FooterTopBaaner.css'

interface FooterTopBaanerProps{
    footerimg:string;
    footerheading:string;
    footertext:string;
}
const FooterTopBaaner:React.FC<FooterTopBaanerProps>= ({footerimg,footerheading,footertext}) => {
  return (
    <div className="Footer_topBanner">
        <img src={footerimg} alt="" />
        <div className="Footer_topBanner_content">
          <h2>{footerheading}</h2>
          <p>{footertext}</p>
          <Link to="/contact" className="BooKAppoitment">
            Book Virtual Appoitment
          </Link>
        </div>
      </div>
  )
}

export default FooterTopBaaner