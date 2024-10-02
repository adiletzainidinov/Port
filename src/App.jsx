import Header from './components/Header';
import MainContent from './components/MainContent';
import Manufacturing from './components/manufacturing/Manufacturing';
import Order from './components/order/Order';
import PortableCarStarter from './components/portable_car_starter/PortableCarStarter';
import Power from './components/power/Power';
import Equipment from './components/equipment/Equipment';
import Support from './components/support/Support';
import Delivery from './components/delivery/Delivery';
import DeliveryBottom from './components/delivery/DeliveryBottom';
import BidFooter from './components/bid-footer/BidFooter';
import Footer from './components/footer/Footer';
import Admin from './components/admin/Admin';
import { useSelector } from 'react-redux';

const App = () => {
  const { isLogin } = useSelector((s) => s.portative);
  const id = 'id'

  return (
    <>
      <Header />
      <MainContent />
      <Order id={id} />
      <PortableCarStarter />
      <Power />
      <Manufacturing />
      <Support id={id} />
      <Equipment />
      <Delivery />
      <DeliveryBottom />
      <Header />
      <MainContent />
      <BidFooter id={id} />
      <Footer />
      {isLogin && <Admin />}
    </>
  );
};

export default App;
