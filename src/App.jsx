import { Header } from "./Components/Header";
import { Container, friends } from "./Components/Container";
import { FormConta } from "./Components/FormConta";
import { useState } from "react";

const App = () => {
  const [friendsAcc, setFriendsAcc] = useState(friends);
  const [selectFriend, setSelectFriend] = useState(null);
  const [totalBill, setTotalBill] = useState("");
  const [mySpend, setMySpend] = useState("");
  const [whoWillpay, setWhoWillWpay] = useState("you");
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);

  const handleClickAddFriend = () => setShowFormAddFriend((b) => !b);
  const handleClickFriend = (friend) =>
    setSelectFriend((p) => (p?.name === friend.name ? null : friend));

  const handleChangeBill = (e) => setTotalBill(e.target.value);
  const handleChangeMySpend = (e) => setMySpend(e.target.value);
  const handleChangeWhoWillPay = (e) => setWhoWillWpay(e.target.value);

  const handleSubmitShareBill = (e) => {
    e.preventDefault();
    setFriendsAcc((prev) =>
      prev.map((friend) =>
        selectFriend.name === friend.name
          ? {
              ...friend,
              accountValue:
                whoWillpay === "you"
                  ? friend.accountValue + (+totalBill - +mySpend)
                  : friend.accountValue - mySpend,
            }
          : friend,
      ),
    );
    setSelectFriend(null);
    setTotalBill("");
    setMySpend("");
    setWhoWillWpay("you");
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
      />
      <FormConta
        totalBill={totalBill}
        mySpend={mySpend}
        whoWillpay={whoWillpay}
        handleChangeBill={handleChangeBill}
        handleChangeMySpend={handleChangeMySpend}
        handleChangeWhoWillPay={handleChangeWhoWillPay}
        handleSubmitShareBill={handleSubmitShareBill}
        selectFriend={selectFriend}
      />
    </>
  );
};

export { App };
