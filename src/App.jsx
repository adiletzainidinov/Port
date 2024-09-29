import {  styled } from '@mui/material';

const App = () => {
  return (
    <Container>
      <StyledBox>
        <ContentBox>
          <h1>Adilet</h1>
          <p>burger</p>
        </ContentBox>
        <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyw6ofY_Xv1ppBAwufl7XsnDwlis7T-qgZwA&s" alt="" />
      </StyledBox>
    </Container>
  );
};

export default App;

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  display: 'flex',
  flexDirection: 'column'
}));

export const ContentBox = styled('div')(() => ({
  width: '100%',
  height: '100%',
  maxHeight: 100,
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'red'
}));
