import React from "react";
import styled from "styled-components";
import FlatLoader from "../../components/Loaders/FlatLoader";
import { ApolloError } from "@apollo/client";

type Props = {
  error?: ApolloError;
  loading: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 5px 25px;
  box-sizing: border-box;
  min-height: 100;
  border-bottom: 1px solid #cdcdcd;
`;
const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const StatusBar: React.FC<Props> = ({ error, loading }) => (
  <Wrapper>
    <Title>SIEM</Title>
    <span>{error?.message}</span>
    {loading && <FlatLoader />}
  </Wrapper>
);

export default StatusBar;
