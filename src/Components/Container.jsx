const friends = [
  {
    name: "Henrique",
    imgUrl: "./imgs/friends/henrique-48.jpg",
    accountValue: -8,
  },
  {
    name: "Alessandra",
    imgUrl: "./imgs/friends/alessandra-48.jpg",
    accountValue: 8,
  },
  {
    name: "Renata",
    imgUrl: "./imgs/friends/renata-48.jpg",
    accountValue: 8,
  },
];

const Container = () => {
  const getMsgInfo = (balance) =>
    balance < 0
      ? { message: `Você deve ${Math.abs(balance)} reais`, color: "red-debit" }
      : balance > 0
      ? { message: `Te deve ${balance} reais`, color: "green-credit" }
      : { message: "Estão quites", color: "white-neutral" };

  return (
    <div className="app">
      <ul className="sidebar">
        {friends.map((item, index) => {
          const { message, color } = getMsgInfo(item.accountValue);

          return (
            <li key={index}>
              <img src={item.imgUrl} alt="" />
              <h3>{item.name}</h3>
              <p className={color}>{message}</p>
              <button className="button">Selecionar</button>
            </li>
          );
        })}
        <button className="button">Adicionar amigo(a)</button>
      </ul>
    </div>
  );
};

export { Container };
