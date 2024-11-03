import "./AboutUsCard.css";
import React from "react";
interface AboutCardProps{
    img_url:string;
    headingCard:string;
    CArdtext:string;
}
const AboutUsCard:React.FC<AboutCardProps> = ({img_url,headingCard,CArdtext}) => {
  return (
    <div className="AboutUsCard d-flex-coloumn">
      <img src={img_url} alt="" />
      <h2>{headingCard}</h2>
      <p>
        {CArdtext}
      </p>
    </div>
  );
};

export default AboutUsCard;
