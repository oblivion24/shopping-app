import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
const images = [
  "images/image.png",
  "images/images.jpeg",
  "images/images 2.jpeg",
  "images/images 3.jpeg",
];

const Carousel = () => {
  // Step 1: Set up state to track the active image index
  const [activeIndex, setActiveIndex] = useState(0);

  // Step 2: Function to handle next image
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Step 3: Function to handle previous image
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const [isPaused, setIsPaused] = useState(false);

  function handleMouseEnter() {
    setIsPaused(true);
  }

  function handleMouseLeave() {
    setIsPaused(false);
  }

  useEffect(() => {
    if (isPaused) return; //  No auto-play when paused

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div>
      <div
        className={styles.carousel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Step 4: Render images based on active index */}
        <div className={styles.wrapper}>
            <div className={styles.arrowLeft} onClick={handlePrev}>
              ◀
            </div>
          <div className={styles.carouselImageContainer}> 
            <img
              src={images[activeIndex]}
              alt={`Image ${activeIndex + 1}`}
              width="100%"
            />
            
          </div>
          <div className={styles.arrowRight} onClick={handleNext}>
              ▶
            </div>
        </div>
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
