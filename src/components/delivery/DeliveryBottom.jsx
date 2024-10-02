import { styled } from '@mui/material';
import { FaPen } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';
import { GiWallet } from 'react-icons/gi';

const BottomData = [
  {
    id: 1,
    icon: <FaPen fontSize="30px" color="#57b957" />,
    title: 'Заявка',
    subTitle: 'Оставляете заявку на сайте',
  },
  {
    id: 2,
    icon: <FiPhoneCall fontSize="30px" color="#57b957" />,
    title: 'Звонок',
    subTitle: 'Наш менеджер уточняет детали заказа',
  },
  {
    id: 3,
    icon: <IoIosSend fontSize="30px" color="#57b957" />,
    title: 'Отправка',
    subTitle: 'Доставляем ваш товар в течение 1-3 дней',
  },
  {
    id: 4,
    icon: <GiWallet fontSize="30px" color="#57b957" />,
    title: 'Получение',
    subTitle: 'Оплачиваете при получении товара',
  },
];

const DeliveryBottom = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <DeleveryBottomPapa>
            {BottomData.map((item) => (
              <ItemBottom key={item.id}>
                <IconDiv>{item.icon}</IconDiv>
                <TextDiv>
                  <h2>{item.title}</h2>
                  <p>{item.subTitle}</p>
                </TextDiv>
              </ItemBottom>
            ))}
          </DeleveryBottomPapa>
        </StyledBox>
      </Container>
    </>
  );
};

export default DeliveryBottom;

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
  backgroundColor: 'white',
  height: '100%',
  minHeight: 200,
  padding: 20,
}));

export const DeleveryBottomPapa = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  '@media(max-width: 400px)': {
    justifyContent: 'center',
  },
}));
export const ItemBottom = styled('div')(() => ({
  width: '100%',
  maxWidth: 180,
  height: '100%',
  minHeight: 150,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: 20,
}));
export const IconDiv = styled('div')(() => ({
  width: '100%',
  maxWidth: 70,
  height: '100%',
  minHeight: 70,
  backgroundColor: '#f7f8f9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
}));
export const TextDiv = styled('div')(() => ({
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: '20px 0 10px',
    textAlign: 'center',
  },
  p: {
    width: '100%',
    maxWidth: 150,
    textAlign: 'center',
  },
}));
