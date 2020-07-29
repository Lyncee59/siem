import * as React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
};

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: ${(props) => props.width};
  height: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
`;

export const DataCell: React.FC<Props> = ({ children, width }) => (
  <Wrapper width={width}>{children}</Wrapper>
);
