import { styled } from '@mui/material';
import ImgCnopka from '../../assets/photo_2024-10-01_18-04-54-removebg-preview.png';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Button from '../../shared/UI/button/Button';

const TechnickData = [
  {
    id: 1,
    title: 'Модель:',
    subTitle: 'X1B',
  },
  {
    id: 2,
    title: 'Емкость:',
    subTitle: '39800 мАч',
  },
  {
    id: 3,
    title: 'Запуск автомобиля:',
    subTitle: '12 В',
  },
  {
    id: 4,
    title: 'USB-выход:',
    subTitle: '5 В/2 А',
  },
  {
    id: 5,
    title: 'Материал:',
    subTitle: 'ABS-пластик',
  },
  {
    id: 6,
    title: 'Время зарядки:',
    subTitle: '7-8 часов',
  },
];

const Support = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ManufacturingBox>
            <p
              style={{
                borderBottom: '2px solid black',
                paddingBottom: 10,
                marginBottom: 10,
              }}
            >
              Независимость от внешних источников питания:{' '}
            </p>
            <p>Удобство использования:</p>
          </ManufacturingBox>
          <ImgManufacturing>
            <img src={ImgCnopka} />
          </ImgManufacturing>
          <Technick>
            <h2>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>

            {TechnickData.map((item, index) => (
              <p
                key={item.id}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f3f5f7' : 'white',
                  padding: '10px 20px',
                }}
              >
                <IoIosCheckmarkCircleOutline
                  fontSize="23px"
                  color="#6dc16e"
                  style={{ top: 5, position: 'relative' }}
                />
                <span>{item.title}</span> {item.subTitle}
              </p>
            ))}
          </Technick>
          <ButtonStyle>ЗАКАЗАТЬ СЕЙЧАС</ButtonStyle>
        </StyledBox>
      </Container>
    </>
  );
};

export default Support;

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  height: '650px',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(https://i.pinimg.com/564x/78/7b/07/787b070bbd4ad79b18652af87fd7c542.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: 300,
}));

export const ImgManufacturing = styled('div')(() => ({
  position: 'relative',
  textAlign: 'center',
  '& img': {
    width: '50%',
    height: '100%',
    maxHeight: 400,
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: 20,
  },
}));

export const ManufacturingBox = styled('div')(() => ({
  padding: '10px 10px',
  borderRadius: 20,
  backgroundColor: '#fdffe5',
  width: '100%',
  maxWidth: 300,
  margin: '0 auto',
  marginTop: 20,
  position: 'relative',
  background:
    'linear-gradient(#fdffe5, #fdffe5) padding-box, linear-gradient(to right, #ae936d, #f3c49e) border-box',
  border: '5px solid transparent',
  '& p': {
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '24px',
  },
}));

export const Technick = styled('div')(() => ({
  marginBottom: 30,
  '& h2': {
    textAlign: 'center',
    marginTop: 60,
    color: '#42464e',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  p: {
    backgroundColor: '#f3f5f7',
    padding: '10px 20px',
    span: {
      fontWeight: 'bold',
      marginLeft: 8,
    },
  },
  '@media(max-width: 340px)': {
    h2: {
      marginTop: 80,
    },
  },
  '@media(max-width: 320px)': {
    h2: {
      marginTop: 110,
    },
  },
}));

const ButtonStyle = styled(Button)(() => ({
  '@media(max-width: 380px)': {
    fontSize: 20,
  },
  '@media(max-width: 330px)': {
    fontSize: 18,
  },
}));
