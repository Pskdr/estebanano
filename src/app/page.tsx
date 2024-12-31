'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Slidebar from './Main/slidebar/Slidebar';
import MainContent from './Main/maincontent/Maincontent';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <div className={styles.container}>
      <div className={isMobile ? styles.justPanel : styles.leftPanel}>
        <Slidebar
          setSelectedTab={setSelectedTab}
          isMobile={isMobile}
          selectedTab={selectedTab}
        />
      </div>

      {isMobile ? null : (
        <div className={styles.rightPanel}>
          <MainContent selectedTab={selectedTab} />
        </div>
      )}
    </div>
  );
}
