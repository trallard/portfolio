import React from 'react';
import PropTypes from 'prop-types';
import { email } from '@config';

import { Side } from '@components';
import styled from 'styled-components';
import { theme } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightBlue};
  }
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: tranBlueY(-3px);
  }

  svg {
    display: inline-block;
    height: 18px;
    width: auto;
    margin-right: 10px;
    margin-top: 5px;
    color: ${colors.Pink};
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
    </StyledLinkWrapper>
  </Side>
);
Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
