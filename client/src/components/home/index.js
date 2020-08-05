import React from "react";
import "./style.css";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import { useState } from "react";
import main from "../Slide/main.png"
import slide1 from '../Slide/1.png'
import slide2 from '../Slide/2.png'
import slide3 from '../Slide/3.png'
import slide4 from '../Slide/4.png'
import slide5 from '../Slide/5.png'
import slide6 from '../Slide/6.png'



  const items = [
    {
      src: slide1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: slide2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: slide3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    },
    {
        src: slide4,
        altText: 'Slide 4',
        caption: 'Slide 4'
      },
      {
        src: slide5,
        altText: 'Slide 5',
        caption: 'Slide 5'
      },
      {
        src: slide6,
        altText: 'Slide 6',
        caption: 'Slide 6'
      }

  ];

  const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
          
        >
          <img src={item.src} alt={item.altText} className="img-fluid"/>
          <CarouselCaption captionText={item.caption}/>
        </CarouselItem>
      );
    });
  
    return (
        <div className="justify-content-center mt-5">
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

        </div>

    );
  }
  
  export default Example;
