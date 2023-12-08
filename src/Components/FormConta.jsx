const FormConta = ({ selectFriend }) => {
  return (
    selectFriend && (
      <div className="form-conta">
        <form className="form-split-bill" action="">
          <h2>Rachar Conta Com {selectFriend.name}</h2>
          <label>valor total</label>
          <input type="text" />
          <label>Seus gastos</label>
          <input type="text" />
          <label>Quem vai pagar ?</label>
          <select name="">
            <option value="voce">Você</option>
            <option value="amigo">amigo</option>
          </select>
          <button className="button">Rachar Conta</button>
        </form>
      </div>
    )
  );
};

export { FormConta };
