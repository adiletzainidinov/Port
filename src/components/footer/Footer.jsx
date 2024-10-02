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
        <a href="#" onClick={handleIsWebsitePrivacyPolicy}>
          Политика конфиденциальности сайта
        </a>
        <a href="#" onClick={handleIsUserAgreementData}>
          Пользовательское соглашение
        </a>
        <a href="#" onClick={handleisForReturningAndExchangingGoods}>
          Условия возврата и обмена товара
        </a>
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
  a: {
    color: '#42464e',
    marginBottom: 10
  },
}));
