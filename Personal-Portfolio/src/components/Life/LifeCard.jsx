import React, { useState, useEffect } from "react";
import styles from "./LifeCard.module.css";
import { getImageUrl } from "../../utils"; 

export const LifeCard = ({
  project: { title, imageSrc, description },
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //to cycle through the images every 3 seconds which is 3000
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imageSrc.length - 1 ? 0 : prevIndex + 1 //loop back to first image after last
      );
    }, 3000); 

    return () => clearInterval(timer);
  }, [imageSrc.length]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}> 
      {/*mapping through imageSrc to get image*/ }
        {imageSrc.map((src, index) => (
          <img
            key={src}
            src={getImageUrl(src)}
            alt={`Image of ${title}`}
            className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
          />
        ))}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
