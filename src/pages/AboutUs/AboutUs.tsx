import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import PageHero from "../../components/PageHero/PageHero";
import "./AboutUs.css";
import clients from "../../assets/games_826262.svg";
import design from "../../assets/fashion-design_2586715.svg";
import samples from "../../assets/pantone_8153462.svg";
import factory from "../../assets/sewing-machine_3048409.svg";
import deleviry from "../../assets/delivery_7903296.svg";
import fitting from "../../assets/tailoring_17944596.svg";
import FooterTopBaaner from "../../components/FooterTopBaaner/FooterTopBaaner";
import footer from '../../assets/clothing-workshop-with-material.jpg'
const AboutUs = () => {
  const Cards = [
    {
      id: 1,
      img_url: clients,
      headingCard: "Meeting Clients",
      CArdtext:
        "Our first meeting with the client usually covers the concept of the project, the timeline, specific requirements and a discussion to make the project a success. We listen closely to your requirements, focus on the priorities and ensure every detail is covered",
    },
    {
      id: 2,
      img_url: design,
      headingCard: "Design",
      CArdtext:
        "The design team at LOBO Tailors are on hand to advice on fabric suitability and design practicalities for the individual roles required. Illustrations are produced along with fabric swatches to give a first view of the new look before the sampling process begins. This gives the client a chance to review and make any changes at an early stage",
    },
    {
      id: 3,
      img_url: samples,
      headingCard: "Samples",
      CArdtext:
        "Our design team will then start on patterns, sourcing trims, cutting and making the samples. We believe that by having the same people both drawing and making the samples, nothing will get lost in translation, and that the samples will truly reflect what was drawn and approved",
    },
    {
      id: 4,
      img_url: fitting,
      headingCard: "Fitting",
      CArdtext:
        "Our garment technologist makes sure the best fit is achieved. We offer three fitting services: Standardized, made-to-measure and bespoke. We also conduct ‘wearer trials’, with members of staff having the opportunity to wear the samples while working, and giving us feedback or any suggestions for final refinement",
    },
    {
      id: 5,
      img_url: factory,
      headingCard: "Manufacturing",
      CArdtext:
        "LOBO Tailors has 8000 sq. ft. factory well equipped with modern machinery and an in-house professional tailor count of 200 plus. Our Turn Around Time is 3 weeks on the higher side from the day of measurements. All our garments are handmade, be it at a large scale or small scal",
    },
    {
      id: 6,
      img_url: deleviry,
      headingCard: "Delivery",
      CArdtext:
        "Bulk deliveries to single or multiple locations, or individual man-packs are sent from one of our two warehouses based out in DIP and Al Rashidiya. We also have our own fleet for timely deliveries and more personal service as and when the situation arises. For our international customers, we ship the uniforms by Air",
    },
  ];
  return (
    <div className="AboutUs">
      <PageHero PageName="About US" />
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
        <div className="About_Card_container">
          {Cards.map((items) => (
            <AboutUsCard
              key={items.id}
              CArdtext={items.CArdtext}
              headingCard={items.headingCard}
              img_url={items.img_url}
            />
          ))}
        </div>
      </div>
      <FooterTopBaaner footerheading="Crafting Timeless Elegance, One Stitch at a Time" footerimg={footer} footertext="Discover bespoke tailoring that blends tradition with innovation for an impeccable fit." />
    </div>
  );
};

export default AboutUs;
