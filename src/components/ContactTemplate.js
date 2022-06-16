import React from "react";
import styled from "styled-components";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e9e9e9;
`;

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 800px;
  background-color: #f5f5f5;
  border-radius: 4px;
  /* padding: 20px 0 */
`;

function ContactTemplate({ userList, onCreate }) {
  return (
    <Positioner>
      <TemplateBlock>
        <ContactList userList={userList} />
        <CreateContact onCreate={onCreate} />
      </TemplateBlock>
    </Positioner>
  );
}

export default ContactTemplate;
