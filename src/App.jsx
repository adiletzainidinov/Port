import Header from './components/Header';
import MainContent from './components/MainContent';
import Manufacturing from './components/manufacturing/Manufacturing';
import Order from './components/Order';
import PortableCarStarter from './components/portable_car_starter/PortableCarStarter';
import Power from './components/power/Power';
import Equipment from './components/equipment/Equipment';
import Support from './components/support/Support';
import Delivery from './components/delivery/Delivery';
import DeliveryBottom from './components/delivery/DeliveryBottom';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Order />
      <PortableCarStarter />
      <Power />
      <Manufacturing />
      <Support />
      <Equipment />
      <Delivery/>
      <DeliveryBottom/>
    </>
  );
};

export default App;
