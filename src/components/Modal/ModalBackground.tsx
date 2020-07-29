import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${transparentize(0.9, "#323232")};
  transform: translateZ(0);
  z-index: 100;
`;

const ModalBackground: React.FC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default ModalBackground;
