const List = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];
    
    return (
        <div>
      <h1>List of Names</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
    );
}

export default List;
