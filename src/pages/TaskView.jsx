import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../Fetures/taskSlice';
import { ToastContainer, toast } from 'react-toastify';
import Update from '../Components/Task update/Update';

const TaskView = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const initialRow = 3;
  const [showRow, setShowRow] = useState(initialRow);
  const [visible,setVisible] = useState(false)
  const [editedName,setEditedName]=useState("")
  const [editedTitle,setEditedTitle] = useState("")
  const [editedDescription,setEditedDescription] = useState("")
  const [editedId,setEditedId] = useState()


  const handleLoadMore = () => {
    setShowRow((prev) => prev + 3);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    toast.success('Deleted successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
      });
  };

  const handleUpdate=(task)=>{
    setVisible(true)
    setEditedName(task.name)
    setEditedTitle(task.title)
    setEditedDescription(task.description)
    setEditedId(task.id) 
    
  
  }
  if(visible){
    return <Update
       setVisible={setVisible}
       editedName={editedName}
       setEditedName={setEditedName}
       editedTitle={editedTitle}
       editedDescription={editedDescription}
       editedId={editedId}
       setEditedTitle={setEditedTitle}
       setEditedDescription={setEditedDescription}/>
  }

  return (
    <>
      <Helmet>
        <title>Task View</title>
      </Helmet>
      <div className='container mx-auto p-6'>
        <div className='flex justify-center items-center'>
          <h1 className='bg-slate-500 p-5 text-white text-4xl font-serif rounded-3xl'>Task List</h1>
        </div>
        <div>
          {tasks.slice(0, showRow).map((task) => (
            <div key={task.id} className='shadow-xl mt-3 bg-gradient-to-r from-slate-400 to-emerald-500 rounded-lg p-6 border border-gray-200 transform transition-transform hover:scale-105'>
              <div className='text-white flex items-center justify-start mb-2'>
                <h3 className='font-mono text-4xl font-bold'>{task.name}</h3>
                <p className='text-center ml-2'>showed the project</p>
              </div>
              <div className='mb-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>Title:</h2>
                <p className=' text-black mb-3'>{task.title}</p>
              </div>
              <div className='mb-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>Description:</h2>
                <p className='text-black mb-4'>{task.description}</p>
              </div>
              <div className='flex justify-end space-x-3'>
                <button
                  className='bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors'
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <button 
                className='bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors'
                onClick={()=>handleUpdate(task)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {tasks.length > showRow && (
          <div className='flex justify-center my-4'>
            <button
              className='bg-emerald-700 text-white rounded-md px-4 py-2 hover:bg-emerald-500 transition-colors'
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default TaskView;
