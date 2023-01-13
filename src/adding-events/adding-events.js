import React, { useState } from "react";
import "./adding-events.scss";
import Item from "./components/item";
import { initialList } from "./project-constants";
import useList from "./hooks/use-list";

function AddingEvents() {
  const items = useList(initialList);
  const [canEdit, setCanEdit] = useState(false);
  const handleRemoveItem = (e) => {
    items.removeItem(e.target.name);
  };
  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      setCanEdit(!canEdit);
      items.saveItem(index, e.target.value);
    }
  };
  const handleMakeEditable = () => {
    setCanEdit(true);
  };

  const [listQuantity, setQuantity] = useState(initialList);

  /*These two functions are incrementing and decrementing the quantity,
  but the DOM is not updating. Not sure if I'm using the hook properly.*/
  const handleQuantityIncrement = (itemId) => {
    const increaseItem = listQuantity.map((item) => {
      return itemId === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
      // return { ...item, quantity: item.quantity + 1 };
    });
    console.log(increaseItem);
    setQuantity([...increaseItem]);
  };
  const handleQuantityDecrement = (itemId) => {
    const decreaseItem = listQuantity.map((item) => {
      const formattedItemId = toString(itemId);
      const formattedObjectItemId = toString(item.id);
      return formattedItemId === formattedObjectItemId
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
    console.log(decreaseItem);
    setQuantity([...decreaseItem]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {/* <h2>test it here: {listQuantity[1].quantity}</h2> */}
        {/* <button onClick={handleQuantityIncrement}>up</button> */}
        {items.list.map((item, index) => {
          return (
            <Item
              key={`${index}${item.name}${item.calories}`}
              canEdit={canEdit}
              index={index}
              item={item}
              handleMakeEditable={handleMakeEditable}
              handleKeyPress={handleKeyPress}
              handleRemoveItem={handleRemoveItem}
              handleQuantityDecrement={handleQuantityDecrement}
              handleQuantityIncrement={handleQuantityIncrement}
            />
          );
        })}
      </header>
    </div>
  );
}

export default AddingEvents;
