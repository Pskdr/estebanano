import React from 'react';
import styles from './slidebar.module.scss';
import slidelogo from '../../images/logoslide.svg';
import { MenuItem } from '@/app/interfaces/interfaces';
import MainContent from '../maincontent/Maincontent';

type Props = {
  setSelectedTab: Function;
  isMobile: boolean;
  selectedTab: string;
};

export default function slidebar({
  setSelectedTab,
  isMobile,
  selectedTab,
}: Props) {
  const items: MenuItem[] = [
    { title: 'Salpicón de marcas', category: 'Logofolio' },
    { title: 'La hot line' },
    { title: 'El fungi world' },
    { title: 'Juniper - Merch' },
    { title: 'Selva Gin - Merch' },
    { title: 'Chef burger - Refresh redes' },
  ];
  return (
    <div className={isMobile ? styles.container : styles.containerDesktop}>
      <div className={styles.row}>
        <span>Esteban</span>
        <span>Molina</span>
      </div>
      <img src={slidelogo.src} alt='slidelogo' style={{ marginTop: '40px' }} />
      <p style={{ marginTop: '10px', fontSize: '25px', fontWeight: '550' }}>
        estebanano.com
      </p>
      {isMobile ? <MainContent selectedTab={selectedTab} /> : null}
      <p
        style={
          isMobile
            ? { marginLeft: '20px', marginRight: '20px' }
            : { marginTop: '20px' }
        }
      >
        Diseñador gráfico graduado de la Colegiatura, con un enfoque en
        ilustración, desarrollo de identidad visual y dirección de arte.
      </p>
      <div className={styles.menuList}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => setSelectedTab(item.title)}
          >
            <span className={styles.title}>{item.title}</span>
            {item.category ? (
              <button className={styles.categoryButton}>
                {item.category} <span className={styles.arrow}>➔</span>
              </button>
            ) : (
              <span className={styles.arrow}>➔</span>
            )}
          </div>
        ))}
      </div>
      <div className={styles.containerLinks}>
        <p className={styles.links}>
          <a
            href='https://www.behance.net/el_estebanano'
            target='_blank'
            rel='noopener noreferrer'
          >
            Behance
          </a>
          <a
            href='https://dribbble.com/El_estebanano'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dribble
          </a>
          <a
            href='https://www.instagram.com/el_estebanano/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
