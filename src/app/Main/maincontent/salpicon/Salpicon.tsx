'use client';

import React, { useEffect, useState } from 'react';
import styles from './salpicon.module.scss';

type Props = {
  images: { src: string }[];
};

export default function Salpicon({ images }: Props) {
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
        <p style={{ fontSize: '40px', fontWeight: 'bold' }}>
          Salpicón de marcas
        </p>

        <p style={isMobile ? {} : { marginTop: '10px', maxWidth: '40%' }}>
          <span style={{ fontWeight: 'bold' }}>Definición de Salpicón:</span>{' '}
          Postre Antioqueño conformado por una gran variedad de frutas dulces,
          entre ellas el <span style={{ fontWeight: 'bold' }}>banano</span>, la
          fresa y papaya.
        </p>
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
              style={isMobile ? { maxWidth: '300px' } : {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
