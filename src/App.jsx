import Header from './components/Header';
import MainContent from './components/MainContent';
import Manufacturing from './components/manufacturing/manufacturing';
import Order from './components/Order';
import PortableCarStarter from './components/portable_car_starter/portableCarStarter';
import Power from './components/power/Power';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Order />
      <PortableCarStarter/>
      <Power/>
      <Manufacturing/>
    </>
  );
};

export default App;
