import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withHover from './withHover';

const Container = styled.div`
  position: relative;
  display: flex;
`;

const TooltipItem = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 160px;
  top: 100%;
  left: 50%;
  margin-left: -80px;
  border-radius: 3px;
  background-color: hsla(0, 0%, 20%, 0.9);
  padding: 1px;
  margin-top: 5px;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;

const Tooltip = ({ tooltip, children, hovering }) => (
  <Container>
    {hovering && <TooltipItem>{tooltip}</TooltipItem>}
    {children}
  </Container>
);

Tooltip.propTypes = {
  tooltip: PropTypes.string.isRequired;
  hovering: PropTypes.bool.isRequired
};

export default withHover(Tooltip);