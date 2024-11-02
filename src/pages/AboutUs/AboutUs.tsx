import PageHero from "../../components/PageHero/PageHero";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <PageHero />
      <div className="About_container">
        <div className="first-about">
          <div className="first-about-content">
            <h2>About US</h2>
            <p>
              Lobo Tailors is an award winning specialist in hospitality
              corporate clothing. Established in 1978 and situated in the heart
              of UAE. Since then, we have grown and today we are an industry
              leader as a supplier of bespoke design corporate clothing. The
              epitome of Style and Bespoke Tailoring, Lobo Tailors have over 40
              Years of experience and are specialists in high quality uniform
              design
            </p>
          </div>
        </div>
        <div className="second_about">
          <h2>Productivity</h2>
          <p>
            We provide a dedicated, high-end service supplying exclusively
            designed uniforms to hotels, restaurants, beauty and leisure spas,
            Airlines, the financial sector, the government, facilities,
            management services and corporate events. We have carved a niche in
            the bespoke uniform industry delivering a professional uniform from
            our creative twist on design that encompass the values and heritage
            of each client. The Lobo team combines creativity and commercial
            acumen with high-level experience in garment development quality,
            clothes that fit, reliable delivery and great service
          </p>
        </div>
        <div className="third-about">
          <div className="third-about-content">
            <h2>Our Specialties</h2>
            <p>
              Lobo Tailors team is always focused on making high end quality
              garments. Which can be fitted for the purpose of uniform, made
              from special corporate wear fabrics and constructed using key
              uniform design features. We are a passionate company and we have
              successfully gained market share through offering a ‘can do’
              approach with an innovative attitude to design. Our bespoke design
              service means creating unique garments that promote you, your
              brand and your corporate image. By combining innovative design
              with traditional tailoring methods and fabrics, we create elegant,
              professional garments that stand out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
