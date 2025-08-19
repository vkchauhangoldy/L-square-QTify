import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card/Card';
import './Slider.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 3,
  },
  'small-mobile': {
    breakpoint: { max: 400, min: 0 },
    items: 2,
  },
};

const Slider = (props) => {
  console.error = () => { };


  

  return (
    <div className="parent">
      <Carousel responsive={responsive} infinite={true} showDots={false}>
        {Array.isArray(props.data) && props.data.length > 0 ? (
          props.data.map((elem, index) => (
            <Card key={elem.id} slug={elem.slug} title={elem.title} image={elem.image} follows={elem.follows} likes={elem.likes} totalSongs={elem.songs ? elem.songs.length : elem.artists} />
          ))
        ) : (
          <div>No data available</div>
        )}
      </Carousel>
    </div>
  );
};

export default Slider;
