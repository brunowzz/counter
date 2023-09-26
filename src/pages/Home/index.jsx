import React, { useState } from "react";
import Button from "../../components/Button";
import { Container, Title, Text, Section } from "./style";

const Home = () => {
  const [number, setNumber] = useState(0);

  const handleButtonClick = (action) => {
    if (action === "add" && number >= 0 && number < 10) {
      setNumber(number + 1);
    } else if (action === "remove" && number > 0) {
      setNumber(number - 1);
    } else if (action === "reset") {
      setNumber(0);
    }
  };

  return (
    <Container>
      <Title> Contador </Title>
      <Text> {number} </Text>
      <Section>
        <Button onClick={() => handleButtonClick("add")}>Adicione +1</Button>
        <Button onClick={() => handleButtonClick("remove")}>Remova 1</Button>
        <Button onClick={() => handleButtonClick("reset")}>Reset</Button>
      </Section>
    </Container>
  );
};

export default Home;
