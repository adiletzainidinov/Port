import { styled } from '@mui/material';
import { MdShield } from 'react-icons/md';
import { GiCheckMark, GiPresent } from 'react-icons/gi';

const MainContent = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <BoxIconCheck>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <div style={{ position: 'relative' }}>
                <MdShield fontSize="50px" color="#14356c" />
                <GiCheckMark className="checkMark" />
              </div>
              <p>
                УДОБЕН И <br /> БЕЗОПАСЕН
              </p>
            </div>
          </BoxIconCheck>
          <Present>
            <div>
              <GiPresent
                className="gifPresentIcon"
                fontSize="150px"
                color="#f500c1"
              />
              <p className="idea">ИДЕЯ ДЛЯ ПОДАРКА</p>
            </div>
            <Avaria>
              <h3>аварийный запуск автомобиля</h3>
              <p>39800 мАч</p>
            </Avaria>
          </Present>
        </StyledBox>
      </Container>
    </>
  );
};

export default MainContent;

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
  backgroundImage:
    'url(https://lh4.googleusercontent.com/proxy/u9i_8xCdQNLZpoLdl18CY497aX6eIgiN71k81xqWWlUyOtLzd2i_CR9rAPvS33I0t37Y1lPBViQuAeclYtR1iLNWH4x5MremHIG_K12CYv_i4dzYTA7VJKH3tIgjdDBd)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '500px',
  paddingLeft: 10,
  paddingRight: 10,
}));

export const BoxIconCheck = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  marginLeft: 10,
  '& .checkMark': {
    position: 'absolute',
    top: 13,
    left: 13,
    color: 'white',
    fontSize: 24,
  },
  '& p': {
    color: '#14356c',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
}));

export const Present = styled('div')(() => ({
  width: '100%',
  marginTop: 200,
  display: 'flex',
  justifyContent: 'space-between',
  '& .idea': {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#7bb361',
    color: 'white',
    padding: '5px 15px',
    transform: 'rotate(50deg)',
    position: 'relative',
    top: -180,
    left: 40,
  },
  '& .gifPresentIcon': {
    marginTop: 80,
  },
  '@media (max-width: 470px)': {
    '& .idea': {
      left: 30,
    },
  },
  '@media (max-width: 450px)': {
    '& .idea': {
      left: 20,
      top: -200
    },
    '& .gifPresentIcon': {
        marginTop: 100,
      },
  },
  '@media (max-width: 430px)': {
    '& .idea': {
      left: 0,
      top: -220
    },
    '& .gifPresentIcon': {
        marginTop: 120,
      },
  },
  '@media (max-width: 390px)': {
    '& .idea': {
      left: -10,
      top: -250
    },
    '& .gifPresentIcon': {
        marginTop: 160,
      },
  },
  '@media (max-width: 320px)': {
    '& .idea': {
      left: -10,
      top: -250
    },
    '& .gifPresentIcon': {
        marginTop: 160,
      },
  },
}));

export const Avaria = styled('div')(() => ({
  color: '#14356c',
  marginTop: 95,
  marginRight: 40,
  '& h3': {
    width: '100%',
    maxWidth: 150,
    fontSize: 30,
    lineHeight: '26px',
    marginBottom: 10,
  },
  '& p': {
    color: '#fd5800',
  },
  '@media (max-width: 390px)': {
    marginTop: 150,
    '& h3': {
        fontSize: 26
    },
    '& p': {
      },
  },
  '@media (max-width: 320px)': {
    marginTop: 150,
    '& h3': {
        fontSize: 22
    },
    '& p': {
      },
  },
}));
