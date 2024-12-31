import Home from './home/Home';

type MainContentProps = {
  selectedTab: string;
};

const MainContent = ({ selectedTab }: MainContentProps) => {
  return (
    <div
      style={{
        padding: '1rem',
        flex: 1,
        width: '%100',
        height: '100%',
        backgroundColor: '#FFF2BF',
        color: 'black',
      }}
    >
      {selectedTab === 'Home' && <Home />}
      {selectedTab === 'Salpicon' && <div>Salpicon de marcas </div>}
      {selectedTab === 'hotline' && <div>La hot line </div>}

      {selectedTab === 'Fungui' && <div>El fungui world </div>}

      {selectedTab === 'Juniper' && <div>Juniper - Merch </div>}
      {selectedTab === 'Selva' && <div>Selva gin - Merch </div>}
      {selectedTab === 'chef' && <div>Chef burguer - Refresh redes </div>}
    </div>
  );
};

export default MainContent;
