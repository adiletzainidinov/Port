import { styled } from '@mui/material';
import { FaStar } from 'react-icons/fa6';
import Button from '../shared/UI/button/Button';
import { GiCheckMark } from 'react-icons/gi';
import { MdShield } from 'react-icons/md';

const Order = () => {
  return (
    <Container>
      <StyledBox>
        <Raiting>
          <div className="star">
            <FaStar color="#fa9535" className="starIcon" />
            <FaStar color="#fa9535" className="starIcon" />
            <FaStar color="#fa9535" className="starIcon" />
            <FaStar color="#fa9535" className="starIcon" />
            <FaStar color="#fa9535" className="starIcon" />
            <p>5.0</p>
          </div>
          <div className="line"></div>
          <h4>Ограниченный тираж — не упустите возможность!</h4>
        </Raiting>

        <OrderNow>
          <OrderNowForWidth>
            <Promotion>
              <h2>До конца акции:</h2>
              <p>
                <span className="first">24</span>:
                <span className="second">00</span>:{' '}
                <span className="third">00</span>
              </p>
            </Promotion>
            <LineOrderNow />
            <PriceOrderNow>
              <h3>
                <span className="many">5850 сом</span>{' '}
                <span className="sale">-40%</span>
              </h3>
              <p>
                3500 <span>сом</span>
              </p>
            </PriceOrderNow>
          </OrderNowForWidth>
        </OrderNow>

        <OrderNowButton>
          <ButtonStyle className="orderNowButton">ЗАКАЗАТЬ СЕЙЧАС</ButtonStyle>
        </OrderNowButton>

        <OrderNowText>
          <OrderNowTop>
            <OrderNowTopProtection>
              <OrderNowTopIcons>
                <MdShield
                  fontSize="35px"
                  color="#58b958"
                  style={{ marginRight: 10 }}
                />
                <GiCheckMark
                  className="checkMarkTop"
                  style={{ marginRight: 10 }}
                />
              </OrderNowTopIcons>
              <p>Защита покупателя</p>
            </OrderNowTopProtection>
            <OrderNowTopLine />
            <OrderNowTopSale>
              <p>
                <span>17 шт.</span> осталось по акции
              </p>
              <div className="saleBlue"></div>
            </OrderNowTopSale>
          </OrderNowTop>
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

export const Raiting = styled('div')(() => ({
  padding: '10px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .star': {
    width: '100%',
    maxWidth: 150,
    display: 'flex',
    marginLeft: 20,
    justifyContent: 'center',
  },
  '& .starIcon': {
    fontSize: 22,
  },
  '& p': {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fa9535',
    marginRight: 10,
    marginLeft: 5,
  },
  '& .line': {
    width: 2,
    height: 30,
    backgroundColor: '#b4ada9',
  },
  '& h4': {
    fontSize: 14,
    color: '#b4ada9',
    width: '100%',
    maxWidth: 200,
    marginRight: 20,
  },
  '@media (max-width: 430px)': {
    '& .starIcon': {
      fontSize: 20,
    },
    '& p': {
      fontSize: 19,
    },
    '& h4': {
      fontSize: 13,
      maxWidth: 180,
    },
  },
  '@media (max-width: 380px)': {
    '& .star': {
      maxWidth: 120,
    },
    '& .starIcon': {
      fontSize: 18,
    },
    '& p': {
      fontSize: 18,
    },
    '& h4': {
      fontSize: 11,
      maxWidth: 150,
    },
  },
  '@media (max-width: 330px)': {
    '& .star': {
      maxWidth: 110,
    },
    '& .starIcon': {
      fontSize: 18,
    },
    '& p': {
      fontSize: 18,
    },
    '& h4': {
      fontSize: 10,
      maxWidth: 140,
    },
  },
}));

export const OrderNow = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: '20px 10px',
}));

export const OrderNowForWidth = styled('div')(() => ({
  width: '100%',
  maxWidth: 350,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Promotion = styled('div')(() => ({
  width: '100%',
  maxWidth: 166,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& h2': {
    fontSize: 16,
    fontWeight: 100,
    marginBottom: 12,
  },
  '& p': {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58b958',
    '& span': {
      backgroundColor: '#eff2f5',
      padding: '4px 8px',
    },
    '& .first': {
      marginRight: 5,
    },
    '& .second': {
      marginLeft: 5,
      marginRight: 5,
    },
    '& .third': {
      marjinLeft: 5,
    },
  },
  '@media (max-width: 340px)': {
    maxWidth: 156,
    '& h2': {
      fontSize: 14,
    },
    '& p': {
      fontSize: 20,
    },
  },
}));

export const LineOrderNow = styled('div')(() => ({
  width: 2,
  height: '65px',
  backgroundColor: '#b4ada9',
  '@media (max-width: 340px)': {
    height: 55,
  },
}));

export const PriceOrderNow = styled('div')(() => ({
  '& h3': {
    fontSize: 19,
    fontWeight: 100,
    '& .many': {
      textDecoration: 'line-through',
    },
    '& .sale': {
      padding: '3px 6px',
      backgroundColor: '#58b958',
      color: 'white',
      borderRadius: 3,
      fontSize: 14,
    },
  },
  '& p': {
    color: '#ff4e00',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 2,
  },
  '@media (max-width: 340px)': {
    '& h3': {
      fontSize: 17,
      '& .sale': {
        fontSize: 11,
      },
    },
    '& p': {
      fontSize: 25,
    },
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

export const OrderNowTop = styled('div')(() => ({
  width: '100%',
  maxWidth: 350,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  paddingBottom: 40,
  paddingTop: 10,
}));

export const OrderNowTopProtection = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 130,
  '& p': {
    fontWeight: 100,
  },
  '@media (max-width: 380px)': {
    maxWidth: 118,
    '& p': {
      fontSize: 14,
    },
  },
  '@media (max-width: 330px)': {
    maxWidth: 108,
    '& p': {
      fontSize: 12,
    },
  },
}));

export const OrderNowTopIcons = styled('div')(() => ({
  position: 'relative',
  '& .checkMarkTop': {
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
  },
}));

export const OrderNowTopLine = styled('div')(() => ({
  width: 2,
  height: 45,
  backgroundColor: '#b4ada9',
}));

export const OrderNowTopSale = styled('div')(() => ({
  '& p': {
    fontWeight: 100,
    '& span': {
      fontWeight: 'bold',
    },
  },
  '& .saleBlue': {
    width: '100%',
    height: '10px',
    background: 'linear-gradient(to right, #36d0f8 17%, #eaebed 17%)',
    borderRadius: 50,
    marginTop: 6,
  },
  '@media (max-width: 380px)': {
    '& p': {
      fontSize: 14,
    },
  },
  '@media (max-width: 330px)': {
    '& p': {
      fontSize: 12,
    },
  },
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
