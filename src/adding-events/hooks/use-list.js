import { useState } from "react";

function useList(init) {
  const [list, setList] = useState(init);
  return {
    list,
    removeItem(item) {
      const filteredlist = list.filter((val) => val.name !== item);
      setList(filteredlist);
    },
    saveItem(index, newValue) {
      const copyList = [...list];
      copyList[index].name = newValue;
    },
  };
}

export default useList;
