import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const TasksList = ({ taskData, handleDeleteFun, onChecked }) => {
  return (
    <section className="px-4 py-7 border rounded-lg mx-3 bg-white mb-3 shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-lg text-purple-800 font-medium ${taskData.checked ? "line-through" : "no-underline"}`}>
            {taskData.content}
          </h1>
        </div>
        <div className="flex text-3xl gap-2">
          <FaRegCheckCircle className="text-green-500 cursor-pointer" onClick={() => onChecked(taskData)} />
          <MdDeleteForever className="text-red-500 cursor-pointer" onClick={() => handleDeleteFun(taskData)} />
        </div>
      </div>
    </section>
  );
};

export default TasksList;
