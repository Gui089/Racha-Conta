const friends = [
  {
    name: "Henrique",
    imgUrl:
      "https://github.com/Gui089/Racha-Conta/blob/main/imgs/friends/henrique-48.jpg?raw=true",
    accountValue: -8,
  },
  {
    name: "Alessandra",
    imgUrl:
      "https://github.com/Gui089/Racha-Conta/blob/main/imgs/friends/alessandra-48.jpg?raw=true",
    accountValue: 8,
  },
  {
    name: "Renata",
    imgUrl:
      "https://github.com/Gui089/Racha-Conta/blob/main/imgs/friends/renata-48.jpg?raw=true",
    accountValue: 8,
  },
];

const Container = ({
  handleClickFriend,
  selectFriend,
  friendsAcc,
  handleClickAddFriend,
  showFormAddFriend,
  handleSubmitAddFriend,
  handleChangeNameOffFriend,
  handleChangeImgOffFriend,
  nameOffFriend,
  imgOffFriend,
}) => {
  const getMsgInfo = (balance) =>
    balance < 0
      ? { message: `Você deve ${Math.abs(balance)} reais`, color: "red-debit" }
      : balance > 0
      ? { message: `Te deve ${balance} reais`, color: "green-credit" }
      : { message: "Estão quites", color: "white-neutral" };

  return (
    <aside className="app">
      <ul className="sidebar">
        {friendsAcc.map((item, index) => {
          const { message, color } = getMsgInfo(item.accountValue);

          const isSelectedFriend = item.name === selectFriend?.name;
          console.log("isSelectedFriend: ", isSelectedFriend);

          return (
            <li key={index}>
              <img src={item.imgUrl} alt="" />
              <h3>{item.name}</h3>
              <p className={color}>{message}</p>
              <button
                onClick={() => handleClickFriend(item)}
                className={`button ${isSelectedFriend ? "button-close" : ""}`}
              >
                {isSelectedFriend ? "Fechar" : "Selecionar"}
              </button>
            </li>
          );
        })}
        {showFormAddFriend && (
          <form onSubmit={handleSubmitAddFriend} className="form-add-friend">
            <label>Nome</label>
            <input
              value={nameOffFriend}
              onChange={handleChangeNameOffFriend}
              type="text"
            />
            <label>Foto</label>
            <input
              value={imgOffFriend}
              onChange={handleChangeImgOffFriend}
              type="text"
            />
            <button className="button">Adicionar</button>
          </form>
        )}
        <button
          onClick={handleClickAddFriend}
          className={`button ${showFormAddFriend ? "button-close" : ""}`}
        >
          {showFormAddFriend ? "Fechar" : "Adicionar amigo(a)"}
        </button>
      </ul>
    </aside>
  );
};

export { Container, friends };
