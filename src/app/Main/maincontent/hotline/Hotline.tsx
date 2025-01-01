'use client';

import React, { useEffect, useState } from 'react';
import styles from './hotline.module.scss';

type Props = {
  images: { src: string }[];
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

export default function Hotline({ images, text1, text2, text3, text4 }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize(); // Detectar el estado inicial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={isMobile ? styles.none : styles.row}>
        <p style={{ fontSize: '40px', fontWeight: 'bold' }}>{text1}</p>

        <p style={isMobile ? {} : { maxWidth: '40%' }}>{text2}</p>
      </div>
      <div className={isMobile ? styles.none : styles.row}>
        <p>{text3}</p>
        <p style={isMobile ? {} : { maxWidth: '40%' }}>{text4}</p>
      </div>
      <div
        className={isMobile ? styles.mobileGrid : styles.desktopGrid}
        style={{ marginTop: '20px' }}
      >
        {images.map((image) => (
          <div key={image.src} className={styles.imageWrapper}>
            <img
              src={image.src}
              alt={`Image ${image.src + 1}`}
              style={isMobile ? { maxWidth: '300px' } : { minWidth: '900px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
