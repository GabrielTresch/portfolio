import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ActivitiCard = () => (
  // <Carousel
  //   showThumbs={false}
  //   showStatus={false}
  //   useKeyboardArrows
  //   className="presentation-mode"
  // >
  // </Carousel>
  <Carousel
    showThumbs={false}
    showStatus={false}
    useKeyboardArrows
    className="presentation-mode"
  >
    <div>
      <img src="https://gabrieltresch.fr/img/project_1.jpg" alt="img" />
    </div>
    <div>
      <img src="https://gabrieltresch.fr/img/project_1.jpg" alt="img" />
    </div>
    <div>
      <img src="https://gabrieltresch.fr/img/project_1.jpg" alt="img" />
    </div>
  </Carousel>
);

export default ActivitiCard;
