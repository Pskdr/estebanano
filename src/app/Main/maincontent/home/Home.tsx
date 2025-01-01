import React from 'react';
import fondo from '../../../images/homeimage.png';

type Props = {};

export default function Home({}: Props) {
  return (
    <img
      src={fondo.src}
      alt='fondo'
      style={{ width: '100%', height: '100%' }}
    />
  );
}
