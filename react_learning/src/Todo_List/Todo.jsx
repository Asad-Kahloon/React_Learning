import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, text]);
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="write todo"
        />
        <button onClick={addTodo}>Add</button>
      </form>

      <ul>
        {todo.map((todo, i) => {
          return (
            <li>
              <span>
                {i} &nbsp;{todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>Delete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
