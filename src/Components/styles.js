import styled from 'styled-components';

export const Content = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Container = styled.div`
  background-color: #2D2A37;
  filter: 
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) 
    drop-shadow(0px 188px 52px rgba(0, 0, 0, 0.01)) 
    drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.26)) 
    drop-shadow(0px 68px 41px rgba(0, 0, 0, 0.15)) 
    drop-shadow(0px 8px 17px rgba(0, 0, 0, 0.29));

  box-shadow:
    inset 0px 6px 8px 0px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px 0px rgba(0, 0, 0, 0.22); 

  border-radius: 48px;
  width: 356px;
  height: 566px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`