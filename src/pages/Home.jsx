import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Fetures/taskSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const maxCharacters = 100;

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleAddTask = () => {
        if (isChecked && name !== "" && title !== "" && description !== "") {
            const newTask = {
                id: Date.now().toString(32),
                name:name.toUpperCase(),
                title,
                description,
                createdAt: new Date().toString(),
            };
            toast.success('Task added successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                });
            dispatch(addTask(newTask));
            setName("");
            setTitle("");
            setDescription("");
            setIsChecked(false); 
        }
        else{
            toast.error('Please fill up the fields ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                });
        }
    };

    return (
        <>
        <Helmet><title>Home</title></Helmet>
        <ToastContainer/>
        <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-xl rounded-lg my-10 border-b-4 border-t-4 border-indigo-500">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <div className='bg-emerald-500 text-white rounded-md h-14 flex justify-center items-center mb-6'> 
                    <h1 className='font-sans font-bold text-2xl'>Add Your Project Idea</h1>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Project Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Project Description</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={maxCharacters}
                    />
                    <p className="text-sm text-gray-500 text-right">
                        {maxCharacters - description.length} characters remaining
                    </p>
                </div>
                <div className="mb-6 flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2 focus:ring-indigo-500"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label className="text-gray-700">I want to add this task</label>
                </div>
                <div className="flex justify-center">
                    <button
                        className={`bg-blue-500 text-white py-2 px-6 rounded-lg  duration-200 ${!isChecked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        disabled={!isChecked}
                        onClick={handleAddTask}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
