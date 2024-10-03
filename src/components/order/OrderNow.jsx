import { useEffect, useState } from 'react';
import { styled } from '@mui/material';

const OrderNow = () => {
  const initialDuration = 86400;
  const [timeRemaining, setTimeRemaining] = useState(() => {
    const startTime = localStorage.getItem('startTime');
    const savedDuration = localStorage.getItem('duration');

    if (startTime && savedDuration) {
      const elapsedTime = Math.floor((Date.now() - Number(startTime)) / 1000);
      const remainingTime = savedDuration - elapsedTime;

      return remainingTime > 0 ? remainingTime : initialDuration;
    }

    localStorage.setItem('startTime', Date.now());
    localStorage.setItem('duration', initialDuration);
    return initialDuration;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          localStorage.setItem('startTime', Date.now());
          return initialDuration;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor((timeRemaining % 86400) / 3600)).padStart(
    2,
    '0'
  );
  const minutes = String(Math.floor((timeRemaining % 3600) / 60)).padStart(
    2,
    '0'
  );
  const seconds = String(timeRemaining % 60).padStart(2, '0');

  return (
    <OrderNowStyle>
      <OrderNowForWidth>
        <Promotion>
          <h2>До конца акции:</h2>
          <p>
            <span className="first">{hours}</span>:
            <span className="second">{minutes}</span>:
            <span className="third">{seconds}</span>
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
  maxWidth: 380,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Promotion = styled('div')(() => ({
  width: '100%',
  maxWidth: 191,
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
      marginLeft: 5,
    },
  },
  '@media (max-width: 400px)': {
    width: '100%',
    maxWidth: '163px',
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
  '@media (max-width: 400px)': {
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
