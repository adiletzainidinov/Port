import { styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { portativeGet } from '../../store/slices/portative-slice/portative.Thunk'; 

const Admin = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((s) => s.portative);

  useEffect(() => {
    dispatch(portativeGet());
  }, [dispatch]);

  console.log(data);

  return (
    <>
      <Container>
        <StyledBox>
          <h2>Данные пользователей</h2>
          {data && Array.isArray(data) ? (
            data.map((item, index) => (
              <DataUser key={item.id} isOdd={index % 2 !== 0}>
                <p>Клиент: {item.id}</p>
                <p>Имя: {item.name}</p>
                <p>Телефон: {item.phone}</p>
              </DataUser>
            ))
          ) : (
            <p>Данные отсутствуют</p>
          )}
        </StyledBox>
      </Container>
    </>
  );
};

export default Admin;

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
  padding: 20,
  h2: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
}));

export const DataUser = styled('div')(({ isOdd }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: isOdd ? '#ffffff' : '#f7f8f9',
  padding: 10,
  borderRadius: 10,
  p: {
    marginBottom: 8,
  },
}));
