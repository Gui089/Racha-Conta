import { Header } from "./Components/Header";
import { Container, friends } from "./Components/Container";
import { FormConta } from "./Components/FormConta";
import { useState } from "react";

const App = () => {
  const [friendsAcc, setFriendsAcc] = useState(friends);
  const [selectFriend, setSelectFriend] = useState(null);

  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const [nameOffFriend, setNameOffFriend] = useState("");
  const [imgOffFriend, setImgOffFriend] = useState("");

  const handleClickAddFriend = () => setShowFormAddFriend((b) => !b);
  const handleClickFriend = (friend) =>
    setSelectFriend((p) => (p?.name === friend.name ? null : friend));

  const handleChangeNameOffFriend = (e) => setNameOffFriend(e.target.value);
  const handleChangeImgOffFriend = (e) => setImgOffFriend(e.target.value);

  const handleSubmitAddFriend = (e) => {
    e.preventDefault();

    setFriendsAcc((prev) => [
      ...prev,
      { name: nameOffFriend, accountValue: 0, imgUrl: imgOffFriend },
    ]);
    setNameOffFriend("");
    setImgOffFriend("");
    setShowFormAddFriend(false);
  };

  const handleSubmitShareBill = (friend) => {
    setFriendsAcc((prev) =>
      prev.map((p) => (friend.name === p.name ? friend : p)),
    );
    setSelectFriend(null);
  };

  return (
    <>
      <Header />
      <Container
        selectFriend={selectFriend}
        handleClickFriend={handleClickFriend}
        friendsAcc={friendsAcc}
        handleClickAddFriend={handleClickAddFriend}
        showFormAddFriend={showFormAddFriend}
        handleSubmitAddFriend={handleSubmitAddFriend}
        handleChangeNameOffFriend={handleChangeNameOffFriend}
        handleChangeImgOffFriend={handleChangeImgOffFriend}
        nameOffFriend={nameOffFriend}
        imgOffFriend={imgOffFriend}
      />
      <FormConta
        selectFriend={selectFriend}
        onSubmitShareBill={handleSubmitShareBill}
      />
    </>
  );
};

export { App };
