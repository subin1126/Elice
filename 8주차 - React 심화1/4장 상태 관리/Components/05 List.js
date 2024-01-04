import React from "react";

const List = ({ memo }) => {
  const memoList = memo.map((memo) => <li>{memo}</li>);
  return <ul>{memoList}</ul>;
};

export default List;
