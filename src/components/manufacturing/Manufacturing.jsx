import { styled } from '@mui/material';
import ImgWhatsap from '../../assets/Изображение_WhatsApp_2024-09-30_в_10.50.40_10985b31-removebg-preview.png';
import { FcTodoList } from 'react-icons/fc';

const Manufacturing = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ManufacturingBox>
            <p>Корпус изготовлен из прочного ABS-пластика</p>
          </ManufacturingBox>
          <ImgManufacturing>
            <div className="papa">
              <FcTodoList fontSize="100px" className="todoList" />
              <div style={{ marginTop: 5 }}>
                <p>A</p>
                <p>B</p>
                <p>S</p>
              </div>
            </div>
            <img src={ImgWhatsap} />
          </ImgManufacturing>
          <TextManifacturing>
            <h2>Стандарт GB/T35590-2017: Качество и Безопасность</h2>
            <p>
              Стандарт GB/T35590-2017 регулирует требования к пуско-зарядным
              устройствам в Китае. Он охватывает аспекты безопасности,
              производственных требований и тестирования производительности,
              обеспечивая защиту от перегрузок и коротких замыканий. Соблюдение
              этого стандарта гарантирует надежность и эффективность устройств,
              что делает их важным инструментом для водителей в экстренных
              ситуациях.
            </p>
          </TextManifacturing>
        </StyledBox>
      </Container>
    </>
  );
};

export default Manufacturing;

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  height: '540px',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(https://i.pinimg.com/564x/cd/76/0d/cd760de630e9f3262a95c8e8b9eaabdf.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '0 20px',
}));

export const ImgManufacturing = styled('div')(() => ({
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    maxHeight: 400,
    backgroundColor: 'white',
    borderRadius: '30%',
    marginTop: 20,
  },
  '& .papa': {
    position: 'absolute',
    top: 30,
    left: 70,
    display: 'flex',
    p: {
      fontWeight: 900,
      color: 'red',
      fontSize: 21,
    },
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

export const TextManifacturing = styled('div')(() => ({
  marginTop: 50,
  padding: '0 10px',
  '& h2': {
    textAlign: 'center',
    marginBottom: 10,
    color: '#42464e',
  },
  '& p': {
    lineHeight: '22px',
    textAlign: 'center',
    marginBottom: 15,
  },
}));
