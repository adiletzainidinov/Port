import { styled } from '@mui/material';
import Pusk from '../../assets/пусковые зажимы.jpg';
import ImgCnopka from '../../assets/photo_2024-10-01_18-04-54-removebg-preview.png';

const EquipmentData = [
  {
    id: 1,
    title: 'USB-кабель для зарядки ',
    src: 'https://i.pinimg.com/564x/01/ac/b2/01acb2fdce84fa09aaff22b111bf95b1.jpg',
  },
  {
    id: 2,
    title: 'Пусковые зажимы',
    src: Pusk,
  },
  {
    id: 3,
    title: 'Коробка для хранения',
    src: 'https://www.antech.ru/upload/resize_cache/iblock/a2f/bn0snriau93imgdlmumttum127q365l9/300_300_1/P1047040.jpg',
  },
  {
    id: 4,
    title: 'Инструкция пользователя',
    src: 'https://e7.pngegg.com/pngimages/195/628/png-clipart-product-manuals-owner-s-manual-computer-icons-symbol-icon-design-symbol-product-manuals.png',
  },
];

const Equipment = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ManufacturingBox>
            <p>Комплектация </p>
            <EquipmentPapa>
              {EquipmentData.map((item) => (
                <EquipmentItem key={item.id}>
                  <h4>{item.title} </h4>
                  <div className="imgPapa">
                    <div className="number">
                      <h2>{item.id}</h2>
                    </div>
                    <img src={item.src} alt="" />
                  </div>
                </EquipmentItem>
              ))}
            </EquipmentPapa>
          </ManufacturingBox>
          <SamTehnich>
            <p>Само устройство</p>
            <img src={ImgCnopka} style={{ height: 400 }} alt="" />
          </SamTehnich>
          <p className="bottomText">
            Этот многофункциональный набор включает все необходимые элементы для
            быстрого запуска автомобиля в случае разряженного аккумулятора.
            Устройство с емкостью 39800 мАч, пусковые зажимы, USB-кабель и
            адаптеры обеспечивают удобство и универсальность использования. Все
            компоненты аккуратно упакованы в прочную коробку, которая защищает
            устройство и аксессуары, облегчая хранение и транспортировку, чтобы
            вы всегда были готовы к любым непредвиденным ситуациям на дороге.
          </p>
        </StyledBox>
      </Container>
    </>
  );
};

export default Equipment;

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  height: '970px',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(https://i.pinimg.com/564x/b9/32/b5/b932b5e575763162f8d7893017e45e5b.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: 520,
  '@media(max-width: 410px)': {
    height: '1410px',
    marginTop: 520,
  },
  '& .bottomText': {
    textAlign: 'center',
    margin: '-80px auto 0px',
    padding: '0 10px',
    lineHeight: '22px',
  },
}));

export const ManufacturingBox = styled('div')(() => ({
  padding: '10px',
  borderRadius: 20,
  backgroundColor: '#feffef',
  width: '100%',
  maxWidth: 400,
  margin: '0 auto',
  marginTop: 20,
  position: 'relative',
  background:
    'linear-gradient(#fdffe5, #fdffe5) padding-box, linear-gradient(to right, #ae936d, #f3c49e) border-box',
  border: '5px solid transparent',
  '& p': {
    fontSize: 22,
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '24px',
    backgroundColor: '#91925e',
    color: 'white',
    borderRadius: 50,
    padding: '5px 10px',
  },
  '@media(max-width: 410px)': {
    maxWidth: 280,
  },
}));

export const EquipmentPapa = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: 100,
  '@media(max-width: 410px)': {
    justifyContent: 'center',
  },
}));

export const EquipmentItem = styled('div')(() => ({
  width: '100%',
  maxWidth: '170px',
  height: '100%',
  minHeight: '170px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: 20,
  h4: {
    width: '100%',
    maxWidth: 100,
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  '& .imgPapa': {
    width: 150,
    height: 150,
    border: '4px solid #c4c7ab',
    borderRadius: '100%',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '100%',
    },
    '& .number': {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: -10,
      left: 60,
      width: 20,
      height: 20,
      borderRadius: '100%',
      zIndex: 10,
      backgroundColor: '#c7c9b1',
      color: 'white',
      h2: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
  },
}));

export const SamTehnich = styled('div')(() => ({
  margin: '0 auto',
  position: 'relative',
  top: -90,
  p: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '28px',
    marginBottom: 20,
  },
}));
