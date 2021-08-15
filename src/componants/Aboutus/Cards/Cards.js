import React from "react";
import Card from "./Card";

import image1 from "../img/1111.jpg";
import image2 from '../img/22222.jpg'
import image3 from '../img/33333.jpg'
import image4 from '../img/4444444.jpg'

const cards = [
  {
    id: 1,
    title: "Mahmoud Abubaker",
    image: image1,
    url: "#",
    text : 'I am a mechanical engineer and i graduated from Hashemite University. I have a passion for design and programming.'
  },
  {
    id: 2,
    title: "Heba Almomani",
    image: image2,
    url: "#",
    text : 'Computer engineer , born in 25-9-1998 , Study Full stack development at LTUC-Abdul Aziz Al Ghurair School of Advanced Computing, I’m interested in programming'

  },
  {
    id: 3,
    title: "Amneh AL-Momany",
    image: image3,
    url: "#",
    text : 'I graduated from ABBU with a bachelors degree of computer science and am an ASAC trainee'

  },
  {
    id: 4,
    title: "Raghad-Abdelghani",
    image: image4,
    url: "#",
    text : 'I am a pharmacist on the road to be a programmer, looking forward to solving world health problems using the technology I will learn and develop.'

  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id , text}) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;