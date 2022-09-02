import {useState} from "react";
import {TodoAdd} from "./TodoAdd";
import {TodoItem} from "./TodoItem";
import {nanoid} from "nanoid";

let Todo = () => {
  const [todo, setTodo] = useState([]);
  const [disable, setDisable] = useState(false);

  let handleAdd = (value) => {
    if (todo.length >= 5) {
      setDisable(true);
      return;
    }
    let payload = {
      title: value,
      id: nanoid(),
      status: false,
    };
    let newTodo = setTodo([...todo, payload]);
  };

  let Toggle = (id) => {
    const newToggle = todo.map((el) =>
      el.id === id ? {...el, status: !el.status} : el
    );
    setTodo(newToggle);
  };

  let handleDelete = (id) => {
    const Newdelete = todo.filter((el) => el.id != id);

    setTodo(Newdelete);
  };

  return (
    <div>
      <TodoAdd handleAdd={handleAdd} />
      {todo.map((el) => (
        <TodoItem
          {...el}
          key={el.id}
          handleDelete={handleDelete}
          Toggle={Toggle}
        />
      ))}
    </div>
  );
};

export default Todo;
