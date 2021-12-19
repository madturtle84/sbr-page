//@flow
import * as React from 'react';
import Title from './Title';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carrousel_1 from './images/carousel/carousel_1.png';
import carrousel_2 from './images/carousel/carousel_2.png';
import carrousel_3 from './images/carousel/carousel_3.png';
import carrousel_4 from './images/carousel/carousel_4.png';

export default function MediaSection(): React.Node {
  const containerStyle = {
    marginTop: 20,
  };
  return (
    <div style={containerStyle}>
      <Title text='Media'/>
      <Carousel>
        <div>
            <img src={carrousel_1} alt='carousel_1' />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={carrousel_2} alt='carousel_2' />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={carrousel_3} alt='carousel_3' />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={carrousel_4} alt='carousel_4' />
            <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </div>
  );
}
