import { styled } from '@mui/material';

const Power = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <h2>
            Пуско-зарядное устройство — компактная мощность для вашего
            автомобиля
          </h2>
          <p>
            Это устройство оснащено всем необходимым для быстрого запуска
            автомобиля с напряжением 12 В и также работает как портативное
            зарядное устройство для ваших гаджетов с выходным напряжением USB 5
            В. Время полной зарядки составляет около 7-8 часов, что делает его
            удобным для постоянного использования. Корпус изготовлен из прочного
            ABS-пластика, соответствующего стандарту GB/T35590-2017, что
            гарантирует долговечность и надежность в различных условиях.
          </p>
        </StyledBox>
      </Container>
    </>
  );
};

export default Power;

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
  padding: '0 10px',
  '& h2': {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    color: '#42464e',
  },
  '& p': {
    textAlign: 'center',
    lineHeight: '22px',
    marginBottom: 20,
  },
}));
