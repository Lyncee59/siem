import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  background: #cdcdcd;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 50px);
`;

const Public: React.FC = ({ children }) => (
  <Wrapper>
    <Header></Header>
    <Content>{children}</Content>
  </Wrapper>
);

export default Public;
