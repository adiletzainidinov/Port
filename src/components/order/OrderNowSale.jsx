import { styled } from '@mui/material';
import { GiCheckMark } from 'react-icons/gi';
import { MdShield } from 'react-icons/md';

const OrderNowSale = () => {
  return (
    <>
      <OrderNowTop>
        <OrderNowTopProtection>
          <OrderNowTopIcons>
            <MdShield
              fontSize="35px"
              color="#58b958"
              style={{ marginRight: 10 }}
            />
            <GiCheckMark className="checkMarkTop" style={{ marginRight: 10 }} />
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
    </>
  );
};

export default OrderNowSale;


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