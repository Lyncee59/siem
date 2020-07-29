import * as React from "react";
import styled from "styled-components";

type Props = {
  type?: string;
};

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: ${(props) => (props.type == "header" ? "50px" : "25px")};
  cursor: ${(props) => (props.type == "header" ? "default" : "pointer")};
  overflow: hidden;

  &:nth-child(odd) {
    background: #cdcdcd;
  }

  &:nth-child(even) {
    background: #ffffff;
  }

  & > div {
    font-weight: ${(props) => (props.type == "header" ? 600 : 300)};
  }
`;

export const DataRow: React.FC<Props> = ({ children, type }) => (
  <Wrapper type={type}>{children}</Wrapper>
);
