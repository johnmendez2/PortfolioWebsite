import styled from 'styled-components';


const Button = styled.button`
  margin-right: 10px;
  margin-left: auto;
  color: white;
  background-color: ${props => theme[props.theme].default};
  padding: 15px 15px;
  border-radius:12px;
  font-size: 24px;
  font-family: 'Sora', sans-serif;
  transition: ease background-color 250ms;
  &:hover{
    background-color: ${props => theme[props.theme].hover};

  }
`
const theme = {
    green:{
      default: '#4caf50',
      hover: '#1b5e20'
    },
    blue:{
      default: '#82b1ff ',
      hover: '#2196f3'
    },
    red:{
      default: '#e42727c5 ',
      hover: '#dd3030'
    },
    black:{
      default: '#424242',
      hover: '#212121'
    }
  }
  
  Button.defaultProps = {
    theme: 'black'
  }

  
  export default Button;