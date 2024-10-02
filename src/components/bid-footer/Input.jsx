import Button from '../../shared/UI/button/Button';
import { IoIosContact } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { portativePost } from '../../store/slices/portative-slice/portative.Thunk';

const Input = () => {
  const dispatch = useDispatch();
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

    if (phone.trim() === '') {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      const data = { name, phone };
      console.log('Form submitted:', data);

      dispatch(portativePost(data));
    }
    setName('');
    setPhone('');
  };

  return (
    <>
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
            helperText={phoneError ? 'Телефон не может быть пустым' : ''}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaPhoneAlt style={{ color: '#57b957', fontSize: '20px' }} />
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
    </>
  );
};

export default Input;

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
      fontSize: 18,
    },
  },
  '@media(max-width: 350px)': {
    maxWidth: 250,
    '& button': {
      fontSize: 16,
    },
  },
}));
