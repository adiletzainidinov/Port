import { styled } from '@mui/material';
import Button from '../../shared/UI/button/Button';
import Raiting from './Raiting';
import OrderNow from './OrderNow';
import OrderNowSale from './OrderNowSale';
import PropTypes from 'prop-types'; 

const Order = ({ id }) => {
  return (
    <Container>
      <StyledBox>
        <Raiting />

        <OrderNow />

        <OrderNowButton>
        <a href={`#${id}`}> 
            <ButtonStyle className="orderNowButton">
              ЗАКАЗАТЬ СЕЙЧАС
            </ButtonStyle>
          </a>
        </OrderNowButton>

        <OrderNowText>
          <OrderNowSale />

          <OrderNowBottom>
            <h2>Пуско-зарядное устройство 39800 мАч — всегда готово помочь!</h2>
            <p>
              Это устройство предназначено для экстренного запуска автомобиля,
              когда аккумулятор разряжен. Оно также может быть использовано как
              портативное зарядное устройство для различных гаджетов через USB.
              В комплект входят пусковые зажимы для подключения к автомобильной
              батарее и адаптеры для зарядки. Устройство имеет высокую емкость
              аккумулятора (39800 мАч), что делает его полезным для экстренных
              ситуаций и длительных поездок.
            </p>
          </OrderNowBottom>
        </OrderNowText>
      </StyledBox>
    </Container>
  );
};

export default Order;

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 60,
  backgroundColor: '#f7f8f9',
  '@media (max-width: 430px)': {
    marginTop: 100,
  },
  '@media (max-width: 390px)': {
    marginTop: 130,
  },
}));

export const OrderNowButton = styled('div')(() => ({
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  '@media (max-width: 380px)': {
    fontSize: 2,
  },
  '@media (max-width: 330px)': {},
}));

export const ButtonStyle = styled(Button)(() => ({
  '@media (max-width: 380px)': {
    fontSize: 18,
  },
  '@media (max-width: 330px)': {
    fontSize: 16,
  },
}));

export const OrderNowText = styled('div')(() => ({
  backgroundColor: 'white',
  width: '100%',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const OrderNowBottom = styled('div')(() => ({
  width: '100%',
  maxWidth: 350,
  margin: '0 auto',
  '& h2': {
    fontSize: 22,
    textAlign: 'center',
    margin: '0 10px',
    marginBottom: 10,
    color: '#42464e',
  },
  '& p': {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: '20px',
    margin: '0 10px',
    marginBottom: 15,
  },
}));

Order.propTypes = {
  id: PropTypes.string.isRequired,
};
