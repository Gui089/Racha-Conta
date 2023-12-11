const FormConta = ({
  selectFriend,
  totalBill,
  handleChangeBill,
  mySpend,
  handleChangeMySpend,
  whoWillPay,
  handleChangeWhoWillPay,
  handleSubmitShareBill,
}) => {
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
          <select value={whoWillPay} onChange={handleChangeWhoWillPay}>
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
