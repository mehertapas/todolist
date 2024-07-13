import React, { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';

const TodoForm = ({handleSubmitData,handleBackData}) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false});

      };

      const handleSubmit = (event) => {
        
        event.preventDefault();
        handleSubmitData(inputValue);
        setInputValue({id:"", content:"", checked:false});
       
      };
      const handleBack = ()=>{
        handleBackData()
      }
  return (
    <section className="bg-white min-h-screen flex flex-col border  transition-opacity duration-500  ">
    <div className="bg-purple-500 px-4 py-10 mb-7">
      <div className="text-white font-semibold text-3xl flex items-center">
        <div onClick={handleBack} className="cursor-pointer hover:text-black">
          <IoMdArrowRoundBack />
        </div>
        <h1>Add Task</h1>
      </div>
    </div>
    <div className="px-6">
      <form onSubmit={handleSubmit}>
        <div className="text-lg py-1">
          <label>Enter your task:</label>
        </div>
        <input
          type="text"
          value={inputValue.content}
          onChange={(event)=>handleInputChange(event.target.value)}
          className="w-full p-2 border border-gray-500 rounded-md focus:outline-none mb-9"
          placeholder="Enter text here"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
  )
}

export default TodoForm
