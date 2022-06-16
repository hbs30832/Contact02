import { useRef, useState } from "react";
import "./App.css";
import ContactTemplate from "./components/ContactTemplate";

const initialState = [
  { id: 1, name: "Seok", phoneNum: "010-8697-2294", active: true },
  { id: 2, name: "test", phoneNum: "010-1234-5678", active: false },
  { id: 3, name: "ddddasd", phoneNum: "010-2312-5678", active: false },
];

function App() {
  const [userList, setUserList] = useState(initialState);
  const nextId = useRef(4);

  console.log(userList);

  const onCreate = (inputs) => {
    const { name, phoneNum } = inputs;
    setUserList((list) =>
      list.concat({ id: nextId.current, name, phoneNum, active: false })
    );
    nextId.current++;
  };

  return <ContactTemplate userList={userList} onCreate={onCreate} />;
}

export default App;
