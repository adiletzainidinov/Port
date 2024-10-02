import { useState } from 'react';
import { InputAdornment, styled, TextField } from '@mui/material';
import Raiting from '../order/Raiting';
import OrderNow from '../order/OrderNow';
import Button from '../../shared/UI/button/Button';
import { IoIosContact } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import OrderNowSale from '../order/OrderNowSale';

const BidFooter = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleValidation = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }
    if (!/^\+?[0-9\s-]{7,15}$/.test(phone)) {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      // Proceed with form submission
      console.log('Form submitted:', { name, phone });
    }
  };

  return (
    <>
      <Container>
        <StyledBox>
          <div style={{ backgroundColor: '#f7f8f9' }}>
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
          <InputPapa>
            <div style={{ width: '100%', marginBottom: '16px', marginTop: 30 }}>
              <TextField
                fullWidth
                label="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Имя не может быть пустым' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoIosContact
                        style={{ color: '#57b957', fontSize: '24px' }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div style={{ width: '100%', marginBottom: '16px' }}>
              <TextField
                fullWidth
                type="text"
                label="Введите ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={phoneError}
                helperText={
                  phoneError ? 'Введите действительный номер телефона' : ''
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaPhoneAlt
                        style={{ color: '#57b957', fontSize: '20px' }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button
              style={{ width: '100%', marginBottom: 20, marginTop: 20 }}
              onClick={handleSubmit}
            >
              Оформить заказ
            </Button>
          </InputPapa>
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

export const InputPapa = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 350,
  margin: '0 auto',
  '@media(max-width: 400px)': {
    maxWidth: 300,
    '& button': {
      fontSize: 18
    }
  },
  '@media(max-width: 350px)': {
    maxWidth: 250,
    '& button': {
      fontSize: 16
    }
  },
}));
