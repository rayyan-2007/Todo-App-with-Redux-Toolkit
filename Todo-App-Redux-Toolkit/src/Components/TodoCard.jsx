import { useState } from "react";

const TodoCard = ({ todo, UpdateStatus, editTodo, deleteTodo }) => {
  const [isEdit, setEdit] = useState(false);

  const [Newname, setName] = useState(todo.name);

  const [Newdesc, setDesc] = useState(todo.desc);

  function handleUpdate() {
    //  dispatch({
    //    type: "EDIT_TODO",
    //    payload: {
    //      name: Newname,
    //      desc: Newdesc,
    //      todoId: todo.id,
    //    },
    //  });

    editTodo({
      name: Newname,
      desc: Newdesc,
      id: todo.id,
    });
    setEdit(false);
  }

  return (
    <>
      <div className="card-parent">
        <div className="card-input">
          {isEdit ? (
            <>
              <p>Name:</p>
              <input
                value={Newname}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />

              <p>Description:</p>
              <input
                value={Newdesc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                required
              />
            </>
          ) : (
            <>
              <p>Name: {todo.name}</p>
              <p>Description: {todo.desc}</p>
            </>
          )}

          <div className="option-parent">
            <label>Status:</label>
            <select
              value={todo.status}
              onChange={(e) =>
                // dispatch({
                //   type: "UPDATE_STATUS",
                //   payload: {
                //     todoStatus: e.target.value,
                //     todoId: todo.id,
                //   }

                // })

                UpdateStatus({
                  status: e.target.value,
                  id: todo.id,
                })
              }
            >
              <option className="op2" value="Completed">
                Completed
              </option>
              <option className="op2" value="Not Completed">
                Not Completed
              </option>
            </select>
            {isEdit && (
              <button className="update" onClick={handleUpdate}>
                Update
              </button>
            )}
          </div>
        </div>

        <div className="btn-parent">
          <button className="edit" onClick={() => setEdit(true)}>
            Edit
          </button>
          <button
            className="delete"
            onClick={() =>
              // dispatch({
              //   type: "DELETE_TODO",
              //   payload: todo.id
              // })
              deleteTodo(todo.id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
