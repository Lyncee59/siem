import React, { useCallback } from "react";
import styled from "styled-components";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const InputWrapper = styled.input<Props>`
  width: 400px;
  height: 35px;
  padding: 5px;
  border: 1px solid black;
`;

const Input: React.FC<Props> = ({ onChange, value }) => {
  const handleChange = useCallback((e) => onChange(e.target.value), []);

  return (
    <InputWrapper
      onChange={handleChange}
      value={value}
      placeholder="Search..."
    />
  );
};

export default Input;
