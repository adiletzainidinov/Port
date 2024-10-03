import { Modal, styled, TextField } from '@mui/material';
import {
  CHARTERDATA,
  forReturningAndExchangingGoodsData,
  userAgreementData,
  websitePrivacyPolicyData,
} from '../../data/Data';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginTrue } from '../../store/slices/portative-slice/portativeSlice';

const Footer = () => {
  const { isLogin } = useSelector((s) => s.portative);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isWebsitePrivacyPolicy, setIsWebsitePrivacyPolicy] = useState(false);
  const [isUserAgreementData, setIsUserAgreementData] = useState(false);
  const [
    isForReturningAndExchangingGoodsData,
    setIsForReturningAndExchangingGoodsData,
  ] = useState(false);
  const [charter, setCharter] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleIsWebsitePrivacyPolicy = () => {
    setIsWebsitePrivacyPolicy((prev) => !prev);
  };

  const handleIsUserAgreementData = () => {
    setIsUserAgreementData((p) => !p);
  };
  const handleisForReturningAndExchangingGoods = () => {
    setIsForReturningAndExchangingGoodsData((p) => !p);
  };
  const handleCharter = () => {
    setCharter((p) => !p);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === 'Adilet' && password === '5365') {
      dispatch(isLoginTrue());
      handleClose();
      setName('');
      setPassword('');
    }
  };

  console.log(isLogin);
  return (
    <Container>
      <StyledBox>
        <h2>На нашем сайте действует:</h2>
        <p onClick={handleIsWebsitePrivacyPolicy}>
          Политика конфиденциальности сайта
        </p>
        <p onClick={handleIsUserAgreementData}>Пользовательское соглашение</p>
        <p onClick={handleisForReturningAndExchangingGoods}>
          Условия возврата и обмена товара
        </p>
        <p onClick={handleCharter}>Внимание фото и видео рекламные</p>
        <p onClick={handleOpen}>Админ</p>
        {isWebsitePrivacyPolicy && <h4>{websitePrivacyPolicyData}</h4>}
        {isUserAgreementData && <h4>{userAgreementData}</h4>}
        {isForReturningAndExchangingGoodsData && (
          <h4>{forReturningAndExchangingGoodsData}</h4>
        )}
        {charter && <h4>{CHARTERDATA}</h4>}
        <Modal open={open} onClose={handleClose}>
          <ModalContent onSubmit={handleSubmit}>
            <h3>Админ</h3>
            <InputAdmin>
              <TextField
                value={name}
                onChange={handleName}
                fullWidth
                label="Напишите имя"
                sx={{ mb: 2, mt: 2 }}
              />
              <TextField
                value={password}
                onChange={handlePassword}
                fullWidth
                label="Напишите пароль"
                type="password"
                sx={{ mb: 4 }}
              />
            </InputAdmin>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: 300,
                margin: '0 auto',
              }}
            >
              <button onClick={handleClose}>Закрыть</button>
              <button type="submit">Войти</button>
            </div>
          </ModalContent>
        </Modal>
      </StyledBox>
    </Container>
  );
};

export default Footer;

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
  padding: 40,
  alignItems: 'center',
  backgroundColor: '#f7f8f9',
  h2: {
    marginBottom: 20,
  },
  p: {
    color: '#42464e',
    cursor: 'pointer',
    marginBottom: 10,
    borderBottom: '1px solid #42464e',
  },
}));

const ModalContent = styled('form')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  backgroundColor: '#fff',
  padding: '20px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
  '& h3': {
    marginBottom: '10px',
    fontSize: 28,
  },
  '& p': {
    marginBottom: '20px',
  },
  '& button': {
    padding: '10px 20px',
    backgroundColor: '#57b957',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#4ca84c',
    },
  },
}));

const InputAdmin = styled('div')(() => ({
  width: '100%',
  maxWidth: 300,
  margin: '0 auto',
}));
