import React from 'react';

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id} id={task.id}>
            {task.text}
            <button onClick={deleteTask}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
