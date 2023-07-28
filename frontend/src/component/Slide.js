import React from 'react';
import { useSelector } from 'react-redux';
import Productcard from './Productcard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const Slide = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of products to show in a single slide
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set the duration between slide transitions (in milliseconds)
    vertical: false, // Set to false to create a horizontal slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const allProducts = useSelector((state) => state.product.productList);
  console.log(allProducts);

  return (
    <div className="mx-auto" style={{"maxWidth":"90%"}}>

      <div className='flex flex-col text-center pt-20 font-semibold text-5xl'>
        <p className='text-orange-600'>OUR WIDE RANGE OF PRODUCTS</p>
      </div>

      <div className='mt-10 '>

        <Slider {...sliderSettings}>
          {allProducts.map((element) => (
            <div key={element._id} className='flex justify-center'>
              <Productcard image={element.image} name={element.name} description={element.description} />
            </div>
          ))}
        </Slider>

        <div className='flex flex-row mt-10 pt-5 max-w-50 mx-auto justify-center '>
          <Link to={"products"}>
            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
              Browse all PRODUCTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;