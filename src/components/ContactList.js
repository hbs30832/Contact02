import React, { useEffect, useReducer, useState } from "react";
import styled, { css } from "styled-components";
import InputItem from "./InputItem";

const Block = styled.div`
  flex: 1;
  border-bottom: 1px solid #e9e9e9;
  overflow: auto;
  ul {
    margin: 0;
    padding: 0;
  }
`;

const ContactItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #e9e9e9;
  height: 80px;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.25s;
  padding: 0 15px;
  p {
    height: 80px;
    line-height: 80px;
    margin: 0;
  }

  ${({ active }) =>
    active &&
    css`
      height: 120px;
    `}

  cursor: pointer;
`;

function ContactList({ userList }) {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState(userList);

  useEffect(() => {
    // 두번째 매개변수로 배열을 전달.
    // => 배열에 있는 값이 변했을 때에만 콜백 실행.
    const lower = keyword.toLowerCase();
    setFiltered((userList) =>
      userList.filter((user) => {
        const lowerName = user.name.toLowerCase();
        return lowerName.includes(lower);
      })
    );
  }, [keyword]);

  const onChange = (e) => setKeyword(e.target.value);
  console.log(filtered);

  const onDetail = (id) =>
    setFiltered(
      filtered.map((user) => {
        if (user.id === id) {
          return user.active
            ? { ...user, active: false }
            : { ...user, active: true };
        } else {
          return { ...user, active: false };
        }
      })
    );

  //   소문자, 대문자 상관없이 출력. => 입력된값과 기존 비교할 값 둘다 toLowerCase();

  return (
    <Block>
      <InputItem onChange={onChange} />
      <ul>
        {filtered.map((user) => (
          <ContactItem
            key={user.id}
            active={user.active}
            onClick={() => onDetail(user.id)}
          >
            <p>{user.name}</p>
            <span>{user.phoneNum}</span>
          </ContactItem>
        ))}
      </ul>
    </Block>
  );
}

export default ContactList;
