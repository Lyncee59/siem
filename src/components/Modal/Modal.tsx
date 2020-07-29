import React from "react";
import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
};

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ffffff;

  @media (min-width: 48rem) {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: 5px;
  }
`;

const Modal: React.FC<Props> = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

Modal.defaultProps = {
  height: "50%",
  width: "50%",
};

export default Modal;
