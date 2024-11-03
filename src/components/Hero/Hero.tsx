// Hero.js
// import { Carousel } from 'react-bootstrap';
// import slide1 from '../../assets/ryan-plomp-TT6Hep-JzrU-unsplash.jpg';
// import slide2 from '../../assets/slide2.jpg';
// import slide3 from '../../assets/About-2240x1400.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero">
      {/* <Carousel interval={3000} pause="hover">
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Slide 1" />
          <Carousel.Caption>
            <h2>The Best Personalised Tailoring Service</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit dolore magna aliqua</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Slide 2" />
          <Carousel.Caption>
            <h2>Slide 2 Title</h2>
            <p>Slide 2 Description</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Slide 3" />
          <Carousel.Caption>
            <h2>Slide 3 Title</h2>
            <p>Slide 3 Description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <div className="hero_content">
      <div className="hero_background"></div>
        <h2>"Where Perfect Fit Meets Personalized Style"</h2>
        <p>Experience luxury tailoring tailored uniquely for you.</p>
      </div>
    </div>
  );
};

export default Hero;
