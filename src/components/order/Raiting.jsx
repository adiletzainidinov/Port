import { styled } from '@mui/material';
import { FaStar } from 'react-icons/fa6';

const Raiting = () => {
  return (
    <>
         <RaitingStyle>
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
        </RaitingStyle>
    </>
  )
}

export default Raiting


export const RaitingStyle = styled('div')(() => ({
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