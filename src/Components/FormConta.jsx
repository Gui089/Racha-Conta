import { useState } from "react";

const FormConta = ({ selectFriend, onSubmitShareBill }) => {
  const [totalBill, setTotalBill] = useState("");
  const [mySpend, setMySpend] = useState("");
  const [whoWillpay, setWhoWillWpay] = useState("you");

  const handleChangeBill = (e) => setTotalBill(e.target.value);
  const handleChangeMySpend = (e) => setMySpend(e.target.value);
  const handleChangeWhoWillPay = (e) => setWhoWillWpay(e.target.value);

  const handleSubmitShareBill = (e) => {
    e.preventDefault();
    onSubmitShareBill({
      ...selectFriend,
      accountValue:
        whoWillpay === "you"
          ? selectFriend.accountValue + (+totalBill - +mySpend)
          : selectFriend.accountValue - +mySpend,
    });
    setTotalBill("");
    setMySpend("");
    setWhoWillWpay("you");
  };

  return (
    selectFriend && (
      <div className="form-conta">
        <form
          onSubmit={handleSubmitShareBill}
          className="form-split-bill"
          action=""
        >
          <h2>Rachar Conta Com {selectFriend.name}</h2>
          <label>valor total</label>
          <input value={totalBill} onChange={handleChangeBill} type="text" />
          <label>Seus gastos</label>
          <input value={mySpend} onChange={handleChangeMySpend} type="text" />
          <label>Quem vai pagar ?</label>
          <select value={whoWillpay} onChange={handleChangeWhoWillPay}>
            <option value="voce">Você</option>
            <option value={selectFriend.name}>{selectFriend.name}</option>
          </select>
          <button className="button">Rachar Conta</button>
        </form>
      </div>
    )
  );
};

export { FormConta };
