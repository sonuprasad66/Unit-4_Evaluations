let TodoItem = ({title, id, status, handleDelete, Toggle}) => {
  return (
    <div className="Iten_todo">
      <h3>{title}</h3>
      <p>{status ? "Done" : "Pending"}</p>
      <button
        onClick={() => {
          Toggle(id);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export {TodoItem};
