import React, { useState } from "react";
import styled from "styled-components";
import InputItem from "./InputItem";

const Block = styled.div`
  /* padding: 10px; */
  text-align: center;
`;

const BtnSave = styled.button`
  width: 200px;
  margin: 10px 0;
`;

function CreateContact({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNum: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  console.log(inputs);

  return (
    <Block>
      <InputItem
        labelText="이름"
        onChange={onChange}
        name="name"
        value={inputs.name}
      />
      <InputItem
        labelText="전화번호"
        onChange={onChange}
        name="phoneNum"
        value={inputs.phoneNum}
      />
      <BtnSave
        onClick={() => {
          onCreate(inputs);
          setInputs({
            name: "",
            phoneNum: "",
          });
        }}
      >
        저장
      </BtnSave>
    </Block>
  );
}

export default CreateContact;
