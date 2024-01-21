import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className='img1' src="https://picsum.photos/250/250" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/251/251" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/249/249" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/252/252" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/250/250" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/251/251" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/249/249" onDragStart={handleDragStart} role="presentation" />,
    <img className='img1' src="https://picsum.photos/252/252" onDragStart={handleDragStart} role="presentation" />,
  ];

const Carusel = () => {

    return (
       <>
            <AliceCarousel mouseTracking items={items} />
       </>
      );
}

export default Carusel