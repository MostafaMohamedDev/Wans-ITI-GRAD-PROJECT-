import React from 'react'
import './Blogging.css';
import BloggingImage from '../../images/shelter.jpg';


const Blogging = () => {
  return (
    <div className='BlogSection'>
      <div >
        <div >
          <img src={BloggingImage} alt='Header'           className="responsive-image"
          />
        </div>
        
        <div className="curosal">
        
        </div>
        import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../../../" className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="image2.jpg" className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="image3.jpg" className="d-block w-100" alt="Image 3" />
        </div>
        <div className="carousel-item">
          <img src="image4.jpg" className="d-block w-100" alt="Image 4" />
        </div>
        <div className="carousel-item">
          <img src="image5.jpg" className="d-block w-100" alt="Image 5" />
        </div>
        <div className="carousel-item">
          <img src="image6.jpg" className="d-block w-100" alt="Image 6" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

      </div>
    </div>
  )
}

export default Blogging
