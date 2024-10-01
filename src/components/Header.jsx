import { styled } from '@mui/material';

const Header = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <HeaderBox>
            <h1>Закажите уже сегодня!!!</h1>
          </HeaderBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default Header;

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
}));

export const HeaderBox = styled('div')(() => ({
  width: '100%',
  height: '100%',
  maxHeight: 100,
  backgroundColor: 'blue',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0px',
  '& h1': {
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: '3px',
    marginLeft: 10,
    marginRight: 10,
  },
  '@media (max-width: 420px)': {
    '& h1': {
      fontSize: 26,
    },
  },
  '@media (max-width: 380px)': {
    '& h1': {
      fontSize: 22,
    },
  },
  '@media (max-width: 340px)': {
    '& h1': {
      fontSize: 18,
    },
  },
}));
