'use client';

import React, { useEffect, useState } from 'react';
import styles from './contact.module.scss';
import estebanfoto from '../../images/estebanfoto.png';
import estebanmolina from '../../images/estebanmolina.png';

type Props = {};

export default function Contact({}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize(); // Detectar el estado inicial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}?subject=Consulta&body=Hola, me gustaría hablar contigo sobre un proyecto.`;
  };
  return (
    <div>
      {isMobile ? (
        <div style={{ marginLeft: '7%', maxWidth: '400px' }}>
          <img src={estebanfoto.src} style={{ margin: 'auto' }} />
          <p style={{ marginTop: '20px' }}>
            Egresado de la Colegiatura Colombiana.
          </p>
          <p style={{ marginTop: '20px' }}>Medellín Colombia.</p>{' '}
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Me formé como diseñador gráfico en la Colegiatura, con un enfoque
              en ilustración, desarrollo de identidad visual y branding.
            </p>
            <p style={{ marginTop: '20px' }}>
              Disfruto explorar diversas formas de expresión gráfica, ya sea a
              través de medios digitales o análogas, en piezas estáticas o en
              movimiento. Creo firmemente que esta variedad marca la diferencia
              al enfrentar proyectos que buscan destacar visualmente.
            </p>
          </div>
          <img src={estebanmolina.src} style={{ maxWidth: '300px' }} />
          <div className={styles.containelinks}>
            <p
              className={styles.categoryButton}
              onClick={() => {
                handleEmailClick('Hola@estebanano.com');
              }}
            >
              E-mail <span className={styles.arrow}>➔</span>
            </p>
            <p
              className={styles.categoryButton}
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/esteban-molina-3a43b4199/',
                  '_blank'
                );
              }}
            >
              Linkedin <span className={styles.arrow}>➔</span>
            </p>
          </div>
        </div>
      ) : (
        <div className={isMobile ? styles.none : styles.container}>
          <div className={isMobile ? styles.none : styles.container}>
            <div className={isMobile ? styles.none : styles.row}>
              <div className={isMobile ? styles.none : styles.container}>
                <div
                  className={isMobile ? styles.none : styles.row}
                  style={isMobile ? { maxWidth: '400px', margin: 'auto' } : {}}
                >
                  <img
                    src={estebanfoto.src}
                    style={
                      isMobile ? { maxWidth: '300px', margin: 'auto' } : {}
                    }
                  />
                  <div>
                    {' '}
                    <p>Egresado de la Colegiatura Colombiana.</p>
                    <p>Medellín Colombia.</p>
                    <div className={styles.containelinks}>
                      <p
                        className={styles.categoryButton}
                        onClick={() => {
                          handleEmailClick('Hola@estebanano.com');
                        }}
                      >
                        E-mail <span className={styles.arrow}>➔</span>
                      </p>
                      <p
                        className={styles.categoryButton}
                        onClick={() => {
                          window.open(
                            'https://www.linkedin.com/in/esteban-molina-3a43b4199/',
                            '_blank'
                          );
                        }}
                      >
                        Linkedin <span className={styles.arrow}>➔</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={estebanmolina.src}
                  style={isMobile ? { maxWidth: '400px', margin: 'auto' } : {}}
                />
                <div style={{ width: '70%' }}>
                  <p
                    style={
                      isMobile
                        ? {
                            maxWidth: '400px',
                            margin: 'auto',
                            fontWeight: 'bold',
                          }
                        : { marginTop: '20px', fontWeight: 'bold' }
                    }
                  >
                    Me formé como diseñador gráfico en la Colegiatura, con un
                    enfoque en ilustración, desarrollo de identidad visual y
                    branding.
                  </p>
                  <p
                    style={
                      isMobile
                        ? { maxWidth: '400px', margin: 'auto' }
                        : { marginTop: '20px' }
                    }
                  >
                    Disfruto explorar diversas formas de expresión gráfica, ya
                    sea a través de medios digitales o análogas, en piezas
                    estáticas o en movimiento. Creo firmemente que esta variedad
                    marca la diferencia al enfrentar proyectos que buscan
                    destacar visualmente.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.row}></div>
          </div>
        </div>
      )}
    </div>
  );
}
