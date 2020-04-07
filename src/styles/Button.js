import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${colors.Pink};
  background-color: transparent;
  border: 1px solid ${colors.Pink};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.MonoFont};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.transPink};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
