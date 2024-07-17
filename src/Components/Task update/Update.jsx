import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RxCross1 } from 'react-icons/rx';
import { updateTask } from '../../../Fetures/taskSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = ({ setVisible, editedName, setEditedName, editedTitle, editedDescription, editedId, setEditedDescription, setEditedTitle }) => {
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedValue = {
      id: editedId,
      name: editedName.toUpperCase(),
      title: editedTitle,
      description: editedDescription,
      createdAt: new Date().toString(),    
    };
    dispatch(updateTask(updatedValue));
    toast.success('Task updated successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    setVisible(false);
  }

  return (
    <>
      <Helmet><title>Update Task</title></Helmet>
      <div className='w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
        <div className='w-11/12 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6 relative'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-semibold text-gray-800'>Update Task</h1>
            <div 
              className='w-8 h-8 flex justify-center items-center bg-red-600 text-white rounded-full cursor-pointer'
              onClick={() => setVisible(false)}
            >
              <RxCross1 />
            </div>
          </div>
          <div className='space-y-4'>
            <input
              placeholder='Name'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              placeholder='Title'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              placeholder='Description'
              maxLength={400}
              rows={5}
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none'
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button 
              className='w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition'
              onClick={handleEdit}
            >
              Update Task
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Update;
