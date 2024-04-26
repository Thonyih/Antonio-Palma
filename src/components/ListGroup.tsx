import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selecectedIndex, setselecectedIndex] = useState(-1);

  const aviso = items.length === 0 ? <p>Nada</p> : null;

  return (
    <>
      <h3> {heading} </h3>
      {aviso}
      <ul className="list-group bg-dark">
        {items.map((item, index) => (
          <li
            className={
              selecectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselecectedIndex(index);
            }}
            role="button"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
