import React from "react";
import "./item.scss";

function Item(props) {
  const {
    canEdit,
    handleKeyPress,
    handleRemoveItem,
    index,
    item: { id, name, calories, quantity },
    handleMakeEditable,
    handleQuantityIncrement,
    handleQuantityDecrement,
  } = props;
  // console.log(props.item);

  return (
    <div className="item-style">
      {canEdit ? (
        <input
          onKeyPress={(e) => handleKeyPress(e, index)}
          defaultValue={name}
        />
      ) : (
        <h3 onDoubleClick={handleMakeEditable}>Name: {name}</h3>
      )}
      <h3>Calories: {calories}</h3>
      <button
        className="quantity-increment-button"
        propindex={index}
        name={name}
        onClick={() => handleQuantityIncrement(id)}
      >
        Raise
      </button>
      <p className="quantity">{quantity}</p>
      <button
        className="quantity-decrement-button"
        propindex={index}
        name={name}
        onClick={() => handleQuantityDecrement(id)}
      >
        Lower
      </button>
      <button className="remove-button" onClick={handleRemoveItem} name={name}>
        Remove
      </button>
    </div>
  );
}
export default Item;
