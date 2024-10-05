import { styled } from '@mui/material';
import Raiting from '../order/Raiting';
import OrderNow from '../order/OrderNow';
import PropTypes from 'prop-types';
import OrderNowSale from '../order/OrderNowSale';
import Input from './Input';

const BidFooter = ({ id }) => {
  const phoneNumber = '+996998083828';
  const message = encodeURIComponent('Здравствуйте! Я хочу купить пусковое устройство для автомобиля.');

  return (
    <>
      <Container id={id}>
        <StyledBox>
          <div style={{ backgroundColor: '#f7f8f9', marginTop: 50 }}>
            <Raiting />
          </div>
          <BidPapa>
            <h2>Оставьте заявку</h2>
            <p>
              Наши менеджеры свяжутся с вами для консультации и помогут сделать
              заказ
            </p>
            <div className="line"></div>
          </BidPapa>
          <OrderNow />
          <Input />
          <StyledHeading style={{ textAlign: 'center', fontSize: '44px' }}>
            ИЛИ
          </StyledHeading>
          <StyledWhatsAppButton 
            href={`https://wa.me/${phoneNumber}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            НАПИШИТЕ НА WhatsApp
          </StyledWhatsAppButton>
          <OrderNowSale />
        </StyledBox>
      </Container>
    </>
  );
};

export default BidFooter;

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
}));

export const BidPapa = styled('div')(() => ({
  width: '100%',
  maxWidth: 350,
  margin: '0 auto',
  h2: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    color: '#42464e',
    fontWeight: 700,
    fontSize: 32,
    marginLeft: 10,
    marginRight: 10,
  },
  p: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  '& .line': {
    width: 40,
    height: 2,
    backgroundColor: '#bbbdbf',
    margin: '0 auto',
    marginTop: 10,
  },
}));

const StyledHeading = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '44px',
  margin: '20px 0',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const StyledWhatsAppButton = styled('a')(() => ({
  display: 'inline-block',
  background: 'linear-gradient(360deg, #6a9e80, #2fbf7a)',
  color: 'white',
  padding: '12px 24px',
  fontSize: '18px',
  borderRadius: '8px',
  textTransform: 'none',
  transition: 'background-color 0.3s, transform 0.3s',
  marginBottom: 30,
  textDecoration: 'none',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: '#333',
    transform: 'scale(1.05)',
  },
}));

BidFooter.propTypes = {
  id: PropTypes.string.isRequired,
};
