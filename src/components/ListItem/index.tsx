import { useState } from "react";
import { Item } from "../../types/Item";
import { Container, Button } from "./styles";
import { CgClose } from "react-icons/cg";

type Props = {
  item: Item;
  handleDelete: (itemId: number) => void;
};

export const ListItem = ({ item, handleDelete }: Props) => {
  const [isChecked, setIsChecked] = useState(item.finished);
  const [isItem] = useState(item.id);

  const handleDeleteItem = () => {
    handleDelete(isItem);
  };

  return (
    <Container finished={isChecked}>
      <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
      <label>{item.name}</label>

      <div>
        <Button onClick={handleDeleteItem}>
          <CgClose />
        </Button>
      </div>
    </Container>
  );
};
