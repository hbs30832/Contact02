import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
  padding: 0 10px;
  margin: 10px 0;
`;

const Input = styled.input`
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  padding: 10px;
  border: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    width: 80px;
    text-align: left;
  }
`;

function InputItem({ labelText, onChange, name, value }) {
  return (
    <InputBox>
      <Label>
        {labelText && <p>{labelText}</p>}
        <Input onChange={onChange} name={name} value={value} />
      </Label>
    </InputBox>
  );
}

export default InputItem;
