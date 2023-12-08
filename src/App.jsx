import { Header } from "./Components/Header";
import { Container } from "./Components/Container";
import { FormConta } from "./Components/FormConta";
import { useState } from "react";

const App = () => {
  const [selectFriend, setSelectFriend] = useState(null);

  const handleClickFriend = (friend) =>
    setSelectFriend((p) => (p?.name === friend.name ? null : friend));

  return (
    <>
      <Header />
      <Container
        selectFriend={selectFriend}
        handleClickFriend={handleClickFriend}
      />
      <FormConta selectFriend={selectFriend} />
    </>
  );
};

export { App };
