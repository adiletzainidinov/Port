import { styled } from "@mui/material";

const OrderNow = () => {
  return (
    <>
      <OrderNowStyle>
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
      </OrderNowStyle>
    </>
  );
};

export default OrderNow;


export const OrderNowStyle = styled('div')(() => ({
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
