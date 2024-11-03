import PageHero from "../../components/PageHero/PageHero";
import "./ContactUs.css";
import contactHero from "../../assets/close-up-smiling-male-tailor-shaking-hand-with-senior-customer.avif";
import FooterTopBaaner from "../../components/FooterTopBaaner/FooterTopBaaner";
import footerContact from "../../assets/business-urban-beautiful-landscape-night.avif";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <PageHero heroImg={contactHero} PageName="Contact US" />
      <div className="ContactUs_Container d-flex  d-spaceBetween m-auto">
        <div className="Form">
          <form action="">
            <div className="input-group d-flexColoumn">
              <label htmlFor="Fullname">Full Name</label>
              <div className="fullName d-flex d-spaceBetween">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  id="Fullname"
                  required
                />
                <input
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  id="Fullname"
                  required
                />
              </div>
            </div>
            <div className="input-group d-flexColoumn mt-5">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="PhoneNumber">
                <input
                  type="text"
                  placeholder="Phone Number.."
                  required
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className="input-group d-flexColoumn mt-5">
              <label htmlFor="Email">Email</label>
              <div className="Email">
                <input type="Email" placeholder="Email.." required id="Email" />
              </div>
            </div>
            <div className="input-group d-flexColoumn mt-5">
              <label htmlFor="phoneNumber">Message</label>
              <div className="Message">
                <textarea placeholder="Message...." required id="Message" />
              </div>
            </div>
          </form>
        </div>
        <div className="ContactDetails">
          <div className="">
            <h2>For Enquiries:</h2>
            <p className="Enquiries">
              Tel:
              <br />
              <a href="tel:+97143523760">+97143523760</a>
              <br />
              <a href="tel:+97143593670">+97143593670</a>
              <br />
              <a href="tel:+97142821666">+97142821666</a>
            </p>
          </div>
          <div>
            <p className="Emails">
              Emails:
              <br />
              <a href="mangaer@lobotailor.com">mangaer@lobotailor.com</a>
              <br />
              <a href="lobotl2@eim.ae">lobotl2@eim.ae</a>
            </p>
          </div>
          <div>
            <h2>Support Hours :</h2>
            <p> Mon - Sat: 10am - 8pm </p>
          </div>
        </div>
      </div>
      <div className="OurStors d-flex d-spaceArround p-3 mt-5">
        <div className="sotreCard">
          <h2>Al Barsha Showroom</h2>
          <p>
            Near Mall of Emirates
            <br />
            Dubai, United Arab Emirates
          </p>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115615.09409685926!2d55.13803079908081!3d25.102819621813012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2b35f4d977%3A0x73d1b371bcc99fad!2sLobo%20Tailors%20-%20Al%20Barsha!5e0!3m2!1sen!2sus!4v1730652969981!5m2!1sen!2sus"
            width="250"
            height="200"
           
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="sotreCard">
          <h2>BurDubai Showroom</h2>
          <p>
            Meena Bazar,
            <br />
            Next to AlFahidi Souq
            <br />
            United Arab Emirates
          </p>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115465.96352991447!2d55.144114697265636!3d25.260109399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433ebce54e3f%3A0x49edad5cdca3b759!2sLobo%20Tailor!5e0!3m2!1sen!2sus!4v1730653033629!5m2!1sen!2sus"
            width="250"
            height="200"
           
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="sotreCard">
          <h2>Main Factory</h2>
          <p>
            Al Serkal Warehouse
            <br />
            AlMarabea Street no,D65
            <br />
            Industrial Area 1,AlQuoz
            <br />
            United Arab Emirates
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115615.09409685926!2d55.13803079908081!3d25.102819621813012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c894566065%3A0x88f8553f64cdaabb!2sLobo%20Tailors%20Factory!5e0!3m2!1sen!2sus!4v1730652898322!5m2!1sen!2sus"
            width="250"
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <FooterTopBaaner
        footerheading="One-on-one support with our expert stylists"
        footerimg={footerContact}
        footertext="Book your session to get specialized style advice with our in-house team at the showrooms or join us virtually"
      />
    </div>
  );
};

export default ContactUs;
