import { styled } from '@mui/material';

const PortableCarStarter = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <TopCardContent>
            <StarterText>
              <p className="universal">
                Универсально для <span>автомобилей и скутеров</span>
              </p>
              <p>
                Зарядка для всех <span>смартфонов</span>
              </p>
              <p className="quickStart">
                Мгновенный запуск и зарядка в любой ситуации
              </p>
            </StarterText>
            <ImgStarter>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXjNeYxpPhU8aXMi8qBC3ezVU41Rnv1t18w&s"
                alt=""
                className="scuter"
              />
              <img
                src="https://static.rozetked.me/imager/main/images/uploads/eBnnxyHpbomk.webp"
                alt=""
                className="phone"
              />
            </ImgStarter>
          </TopCardContent>
          <BacgroundUrl></BacgroundUrl>
        </StyledBox>
      </Container>
    </>
  );
};

export default PortableCarStarter;

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

export const TopCardContent = styled('div')(() => ({
  width: '100%',
  backgroundColor: '#fafee8',
  margin: '0 auto',
  height: '100%',
  maxHeight: 350,
  padding: '10px 20px',
  paddingBottom: 0,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  '@media(max-width: 446px)': {
    paddingBottom: 360,
  },
  '@media(max-width: 410px)': {
    paddingBottom: 380,
  },
  '@media(max-width: 340px)': {
    paddingBottom: 320,
  },
}));

export const StarterText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& p': {
    fontSize: 18,
    marginTop: 5,
    borderBottom: '0.5px solid #909c4d',
    paddingBottom: 7,
    display: 'inline-block',
    textAlign: 'center',
    span: {
      backgroundColor: '#909365',
      padding: '3px 5px',
      borderRadius: 40,
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 14,
    },
  },
  '& .quickStart': {
    marginBottom: 20,
  },
  '@media(max-width: 410px)': {
    '& .universal': {
      width: '100%',
      maxWidth: 240,
    },
  },
}));

export const ImgStarter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    maxWidth: 200,
    borderRadius: 30,
  },
  '& .phone': {
    marginLeft: 20,
  },
  '@media(max-width: 446px)': {
    '& img': {
      maxWidth: 170,
    },
  },
  '@media(max-width: 380px)': {
    '& img': {
      maxWidth: 150,
    },
  },
  '@media(max-width: 340px)': {
    '& img': {
      maxWidth: 130,
      height: 150,
    },
  },
}));

export const BacgroundUrl = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  backgroundImage:
    'url("https://www.carandbike.com/_next/image?url=http%3A%2F%2Fi.ndtvimg.com%2Fi%2F2016-08%2Ftypes-of-cars_827x510_71472130209.jpg&w=640&q=75")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '250px',
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
}));
