import { styled } from '@mui/material';
import Raiting from '../order/Raiting';
import OrderNow from '../order/OrderNow';
import PropTypes from 'prop-types';
import OrderNowSale from '../order/OrderNowSale';
import Input from './Input';

const BidFooter = ({ id }) => {
  return (
    <>
      <Container id={id}>
        <StyledBox>
          <div style={{ backgroundColor: '#f7f8f9', marginTop: 30 }}>
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

BidFooter.propTypes = {
  id: PropTypes.string.isRequired,
};
