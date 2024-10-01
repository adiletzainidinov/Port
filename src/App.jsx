import Header from './components/Header';
import MainContent from './components/MainContent';
import Order from './components/Order';
import PortableCarStarter from './components/portable_car_starter/portableCarStarter';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Order />
      <PortableCarStarter/>
    </>
  );
};

export default App;
