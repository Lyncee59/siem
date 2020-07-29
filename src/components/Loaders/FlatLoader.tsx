import React from "react";
import styled, { keyframes } from "styled-components";

const stretchAnimation = keyframes`
  0%,
  40%,
  100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  height: 40px;
  text-align: center;
  font-size: 10px;
`;
const Rectangle = styled.div`
  display: inline-block;
  width: 15%;
  height: 100%;
  background: blue;
  animation: ${stretchAnimation} 1.2s infinite ease-in-out;
`;
const Rectangle1 = styled(Rectangle)`
  animation-delay: -1.1s;
`;
const Rectangle2 = styled(Rectangle)`
  animation-delay: -1s;
`;
const Rectangle3 = styled(Rectangle)`
  animation-delay: -0.9s;
`;
const Rectangle4 = styled(Rectangle)`
  animation-delay: -0.8s;
`;
const Rectangle5 = styled(Rectangle)`
  animation-delay: -0.7s;
`;

const FlatLoader: React.FC = () => (
  <Container>
    <Rectangle1 />
    <Rectangle2 />
    <Rectangle3 />
    <Rectangle4 />
    <Rectangle5 />
  </Container>
);

export default FlatLoader;
