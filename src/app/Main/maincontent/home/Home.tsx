import React from 'react';
import fondo from '../../../images/homeimage.svg';

type Props = {};

export default function Home({}: Props) {
  return <img src={fondo.src} alt='fondo' style={{ width: '100%' }} />;
}
