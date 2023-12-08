import { Header } from "./Components/Header";
import { Container } from "./Components/Container";
import { FormConta } from "./Components/FormConta";
import { useState } from "react";

const App = () => {
  const [visibleBtn, setVisibleBtn] = useState(true);

  const handleChangeVisible = () => setVisibleBtn((v) => !v);

  return (
    <>
      <Header />
      <Container
        visibleBtn={visibleBtn}
        handleChangeVisible={handleChangeVisible}
      />
      <FormConta
        visibleBtn={visibleBtn}
        handleChangeVisible={handleChangeVisible}
      />
    </>
  );
};

export { App };
