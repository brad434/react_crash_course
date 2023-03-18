import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "London", "Japan", "Italy", "Haiti"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Listed Items</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
