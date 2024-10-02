import { styled } from '@mui/material';
import {
  forReturningAndExchangingGoodsData,
  userAgreementData,
  websitePrivacyPolicyData,
} from '../../data/Data';
import { useState } from 'react';

const Footer = () => {
  const [isWebsitePrivacyPolicy, setIsWebsitePrivacyPolicy] = useState(false);
  const [isUserAgreementData, setIsUserAgreementData] = useState(false);
  const [
    isForReturningAndExchangingGoodsData,
    setIsForReturningAndExchangingGoodsData,
  ] = useState(false);

  const handleIsWebsitePrivacyPolicy = () => {
    setIsWebsitePrivacyPolicy((prev) => !prev);
  };

  const handleIsUserAgreementData = () => {
    setIsUserAgreementData((p) => !p);
  };
  const handleisForReturningAndExchangingGoods = () => {
    setIsForReturningAndExchangingGoodsData((p) => !p);
  };
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
        {isWebsitePrivacyPolicy && <h4>{websitePrivacyPolicyData}</h4>}
        {isUserAgreementData && <h4>{userAgreementData}</h4>}
        {isForReturningAndExchangingGoodsData && (
          <h4>{forReturningAndExchangingGoodsData}</h4>
        )}
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
    borderBottom: '1px solid #42464e'
  },
}));
