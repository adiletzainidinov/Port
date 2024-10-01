import { Button as MuiButton, styled } from '@mui/material';
import PropTypes from 'prop-types';

const Button = ({ children, type = 'button', onClick, ...rest }) => {
  return (
    <MuiButtonStyle type={type} onClick={onClick} {...rest}>
      {children}
    </MuiButtonStyle>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

const MuiButtonStyle = styled(MuiButton)(() => ({
  padding: '15px 40px',
  background: 'linear-gradient(360deg, #f5c179, #ff6600)', 
  color: 'white',
  fontSize: '22px',
  borderRadius: '7px',
  fontWeight: 'bold'
}));
