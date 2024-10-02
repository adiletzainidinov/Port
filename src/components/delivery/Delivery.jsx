import { styled } from '@mui/material';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const DeliveryData = [
  {
    id: 1,
    icon: <FaTelegramPlane fontSize="40px" />,
    title: 'Доставка',
    subTitle: `Курьерская доставка до двери в течение 1-3 рабочих дней по всему
                Кыргызстану! (Доставка по Бишкеку-200сом; Регионы с
                предоплатой-300сом)`,
  },
  {
    id: 2,
    icon: <FaWallet fontSize="40px" />,
    title: 'Оплата',
    subTitle: `Оплата заказов осуществляется по факту получения товара`,
  },
  {
    id: 3,
    icon: <BsShieldCheck fontSize="40px" />,
    title: 'Гарантии',
    subTitle: `Мы всегда проверяем товар перед отправкой и гарантируем 100% качество`,
  },
];

const Delivery = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <div>
            {DeliveryData.map((item) => (
              <DeliveryPapa key={item.id}>
                <DeliveryIcon>{item.icon}</DeliveryIcon>
                <DeliveryText>
                  <h2>{item.title}</h2>
                  <p>{item.subTitle}</p>
                </DeliveryText>
              </DeliveryPapa>
            ))}
          </div>
        </StyledBox>
      </Container>
    </>
  );
};

export default Delivery;

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
  marginTop: 250,
  backgroundColor: '#2f3339',
  height: '100%',
  minHeight: 200,
  color: 'white',
  padding: 20,
  paddingTop: 45,
}));

export const DeliveryPapa = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 35,
}));

export const DeliveryIcon = styled('div')(() => ({
  backgroundColor: '#57b957',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  width: '100%',
  maxWidth: 70,
  height: '100%',
  minHeight: 70,
  marginRight: '20px',
}));

export const DeliveryText = styled('div')(() => ({
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  p: {
    lineHeight: '22px',
  },
}));
