function ListGroup() {
  let capitals = ["Sofia", "Paris", "Madrid", "Rome", "Berlin", "London"];

  return (
    <>
      <h1>List</h1>
      { capitals.length === 0 && <p>No capitals</p> }
      <ul className="list-group">
        {capitals.map((capital, index) => (
          <li className="list-group-item" key={index}>
            {capital}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
