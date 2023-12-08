const FormConta = ({ visibleBtn }) => {
  return (
    !visibleBtn && (
      <div className="form-conta">
        <form action="">
          <h2>Rachar Conta Com Renata</h2>
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
