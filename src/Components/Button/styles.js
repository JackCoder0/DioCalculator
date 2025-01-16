import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 64px;
  height: 64px;
  border: none;
  background: ${({ color }) => color || '#2D2A37'};
  position: relative;
  border-radius: 50%;
  margin: 12px;
  color: ${({ font }) => font || '#ebebeb'};
  font-size: 24px;
  font-weight: 400;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      186deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }

  &:hover{
    opacity: 0.6;
  }

  box-shadow: 
    0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 11px 7px rgba(0, 0, 0, 0.01),
    0px 4px 6px rgba(0, 0, 0, 0.10),
    0px 2px 4px rgba(0, 0, 0, 0.26),
    inset 0px 0px 2px rgba(0, 0, 0, 0.29),
    0px 0px 2px rgba(0, 0, 0, 0.29)
    ;
`