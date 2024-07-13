import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TasksList from './TasksList';
import DateTime from './DateTime';
import {  GetLocalData, SetLocalData } from './LocalData';

const Todo = () => {
  const [form, setForm] = useState(false);
  const [tasks, setTasks] = useState(() => GetLocalData() );

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) {
      alert('Please enter a task!');
      return;
    }

    const checkArray = tasks.find((curTask) => curTask.content === content);
    if (checkArray) return alert("you already have this task!");

    if (!checkArray) {
      setTasks([...tasks, { id, content, checked }]);
      setForm(false);
    }
    
  };

  SetLocalData(tasks);
  
  const handleAddTask = () => {
    setForm(true);
  };

  const handleBack = () => {
    setForm(false);
  };

  const handleDelete = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTasks);
  };

  const handleCheck = (curData) => {
    setTasks(tasks.map((cureElement) => {
      if (cureElement.content === curData.content) {
        return { ...cureElement, checked: !cureElement.checked };
      } else {
        return cureElement;
      }
    }));
  };

  return (
    <>
      {form ? (
        <TodoForm handleSubmitData={handleSubmit} handleBackData={handleBack} />
      ) : (
        <>
          <section className="px-4 pb-8 pt-11 bg-purple-400 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold text-white">TODO APP</h1>
                <DateTime />
              </div>
              <div>
                <button onClick={handleAddTask} className="border rounded-lg shadow-lg bg-green-500 text-white px-5 py-1 hover:text-black">
                  + Add
                </button>
              </div>
            </div>
          </section>
          {tasks.map((task) => (
            <TasksList
              key={task.id}
              taskData={task}
              handleDeleteFun={handleDelete}
              onChecked={handleCheck}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Todo;
