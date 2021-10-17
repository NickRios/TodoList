import { useState } from "react";
import GlobalStyle from "./styles/global";

import { Container, Header } from "./App.styles";

import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddItem } from "./components/AddItem";

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddItem = (itemName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: itemName,
      finished: false,
    });

    setList(newList);
  };

  const handleDeleteItem = (itemId: number) => {
    let newList = list.filter((item) => item.id !== itemId);

    setList(newList);
  };

  return (
    <>
      <Container>
        <Header>
          <h1>TodoList</h1>
        </Header>

        <AddItem onEnter={handleAddItem} />

        {list.map((item) => (
          <ListItem key={item.id} item={item} handleDelete={handleDeleteItem} />
        ))}
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
