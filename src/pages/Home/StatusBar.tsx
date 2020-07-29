import React from "react";
import styled from "styled-components";
import FlatLoader from "../../components/Loaders/FlatLoader";

type Props = {
  loading: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 25px;
`;

const StatusBar: React.FC<Props> = ({ loading }) => (
  <Wrapper>{loading && <FlatLoader />}</Wrapper>
);

export default StatusBar;
