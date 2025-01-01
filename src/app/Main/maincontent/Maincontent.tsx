import Home from './home/Home';
import Salpicon from './salpicon/Salpicon';

import image1 from '../../images/salpicon/beyer.png';
import image2 from '../../images/salpicon/elmaximo.png';
import image3 from '../../images/salpicon/guardian.png';
import image4 from '../../images/salpicon/hongbao.png';
import image5 from '../../images/salpicon/infinity.png';
import image6 from '../../images/salpicon/luegopago.png';
import image7 from '../../images/salpicon/mamipan.png';
import image8 from '../../images/salpicon/mewe.png';
import image9 from '../../images/salpicon/nubba.png';
import image10 from '../../images/salpicon/romeo.png';
import image11 from '../../images/salpicon/torneodebarrio.png';

import hotline1 from '../../images/hotline/hotline1.png';
import hotline2 from '../../images/hotline/hotline2.png';
import hotline3 from '../../images/hotline/hotline3.png';
import hotline4 from '../../images/hotline/hotline4.png';
import hotline5 from '../../images/hotline/hotline5.png';
import hotline6 from '../../images/hotline/hotline6.png';
import Hotline from './hotline/Hotline';

import fungui1 from '../../images/fungui/fungui1.png';
import fungui2 from '../../images/fungui/fungui2.png';
import fungui3 from '../../images/fungui/fungui3.png';
import fungui4 from '../../images/fungui/fungui4.png';
import fungui5 from '../../images/fungui/fungui5.png';
import fungui6 from '../../images/fungui/fungui6.png';

import juniper1 from '../../images/juniper/juniper1.png';
import juniper2 from '../../images/juniper/juniper2.png';
import juniper3 from '../../images/juniper/juniper3.png';
import juniper4 from '../../images/juniper/juniper4.png';
import juniper5 from '../../images/juniper/juniper5.png';
import juniper6 from '../../images/juniper/juniper6.png';
import juniper7 from '../../images/juniper/juniper7.png';
import juniper8 from '../../images/juniper/juniper8.png';

import selva1 from '../../images/selva/selva1.png';
import selva2 from '../../images/selva/selva2.png';
import selva3 from '../../images/selva/selva3.png';
import selva4 from '../../images/selva/selva4.png';
import selva5 from '../../images/selva/selva5.png';

import chef1 from '../../images/chef/chef1.png';
import chef2 from '../../images/chef/chef2.png';
import chef3 from '../../images/chef/chef3.png';
import chef4 from '../../images/chef/chef4.png';
import chef5 from '../../images/chef/chef5.png';
import Contact from '../contact/Contact';

type MainContentProps = {
  selectedTab: string;
};

const MainContent = ({ selectedTab }: MainContentProps) => {
  const salpicon = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  const hotline = [hotline1, hotline2, hotline3, hotline4, hotline5, hotline6];

  const funguis = [fungui1, fungui2, fungui3, fungui4, fungui5, fungui6];

  const juniper = [
    juniper1,
    juniper2,
    juniper3,
    juniper4,
    juniper5,
    juniper6,
    juniper7,
    juniper8,
  ];

  const chefs = [chef1, chef2, chef3, chef4, chef5];

  const selvas = [selva1, selva2, selva3, selva4, selva5];
  return (
    <div
      style={{
        padding: '1rem',
        flex: 1,
        backgroundColor: '#FFF2BF',
        color: 'black',
      }}
    >
      {selectedTab === 'Home' && <Home />}
      {selectedTab === 'Salpicón de marcas' && <Salpicon images={salpicon} />}
      {selectedTab === 'La hot line' && (
        <Hotline
          images={hotline}
          text1='La hot line'
          text2='Este es un proyecto propio que tenía como único propósito explorar nuevos sustratos y poder divertirme sobre la marcha, haciendo lo que consideré cool, o como yo realmente diría: chimba. Al fin y al cabo yo soy el cliente (para variar).'
          text3='Branding, ilustración'
          text4=''
        />
      )}

      {selectedTab === 'El fungi world' && (
        <Hotline
          images={funguis}
          text1='El fungi world'
          text2='Les presento el FUNGI WORD, universo visual creado para acompañar una nueva hamburguesa de pollo con diferentes tipos de hongos que sacaria una marca de hamburguesas artesanales llamada Chef burger.'
          text3='Ilustración, Diseño de personajes.'
          text4='La inspiración para este universo proviene de los icónicos posters y publicidades psicodélicas de los años 60 y 70. El diseño se sumerge en una atmósfera retro y colorida, que resalta la creatividad y el sabor único de esta hamburguesa especial.'
        />
      )}

      {selectedTab === 'Juniper - Merch' && (
        <Hotline
          images={juniper}
          text1='Merch - Juniper'
          text2='En los últimos años, las marcas han estado buscando diversas formas de conectarse con las personas. Una de estas estrategias es a través del popular merchandising.'
          text3='Ilustración, Diseño de textil.'
          text4='
En esta ocasión, tuve el honor de crear una colección de merchandising inspirada en varios cócteles que pueden ser preparados utilizando los productos de Juniper. Siempre manteniendo como objetivo principal un atractivo visual sólido y preguntándome a mí mismo: "¿Qué me gustaría llevar de esta marca?".'
        />
      )}
      {selectedTab === 'Selva Gin - Merch' && (
        <Hotline
          images={selvas}
          text1='Merch - Selva Gin'
          text2='En los últimos años, las marcas han estado buscando diversas formas de conectarse con las personas. Una de estas estrategias es a través del popular merchandising.'
          text3='Ilustración, Diseño de textil.'
          text4='
En esta ocasión, tuve el honor de crear una colección de merchandising inspirada en varios cócteles que pueden ser preparados utilizando los productos de Juniper. Siempre manteniendo como objetivo principal un atractivo visual sólido y preguntándome a mí mismo: "¿Qué me gustaría llevar de esta marca?".'
        />
      )}
      {selectedTab === 'Chef burger - Refresh redes' && (
        <Hotline
          images={chefs}
          text1='Chef burger - refresh redes'
          text2='En los últimos años, las marcas han estado buscando diversas formas de conectarse con las personas. Una de estas estrategias es a través del popular merchandising.'
          text3='Ilustración, diseño social media.'
          text4='En esta ocasión, tuve el honor de crear una colección de merchandising inspirada en varios cócteles que pueden ser preparados utilizando los productos de Juniper. Siempre manteniendo como objetivo principal un atractivo visual sólido y preguntándome a mí mismo: "¿Qué me gustaría llevar de esta marca?".'
        />
      )}
      {selectedTab === 'Contact' && <Contact />}
    </div>
  );
};

export default MainContent;
