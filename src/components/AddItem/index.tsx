import { useState, KeyboardEvent } from "react";
import { Container, Button } from "./styles";

type Props = {
  onEnter: (itemName: string) => void;
};

export const AddItem = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  const handleAddItemClick = () => {
    onEnter(inputText);
    setInputText("");
  };

  return (
    <Container>
      <div className="image"> ➕ </div>
      <input
        type="text"
        placeholder="Adicione um item a lista"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <div>
        <Button onClick={handleAddItemClick}>Adicionar</Button>
      </div>
    </Container>
  );
};
