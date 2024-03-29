import { faEllipsisH, faEllipsisV, faEllipsisVertical, faFileInvoice, faPaperPlane, faPaperclip, faPhone, faPlus, faVideoCamera, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import avatar from './assets/avatar.jpg';
import ChatName from './chatname';
import { Data } from './contact';
import './chat.css';
import ActiveChats from './activechats';

export default function Chat() {

    const [msgs, setMsgs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setMsgs([...msgs, inputValue]);
        setInputValue('');
    };

    return (
        <div className="h-screen">
            <div className="bg-indigo-950 rounded-lg h-[90%] flex ">
                <div className='w-[50%] bg-transparent border-gray-500 border-r-[0.2px] overflow-y-auto hide-on-mobile'>
                    <div className='flex flex-col space-x-4 font-mono border-gray-500 border-b-[0.2px] pb-2'>
                        <h2 className='text-white text-lg mr-auto ml-2 mt-2 hover:bg-amber-500'>
                            Messages
                        </h2>
                        <p className='text-green-400 text-xs mt-4 flex mr-auto'>Active Chats</p>
                        <div className='flex mt-1'>
                            {
                                Data.map((data) => (
                                    <div className=''>
                                        <ActiveChats avatar={data.avatar} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex items-center space-x-2 bg-[#393c5f]'>
                        <img src={avatar}
                            alt="profile"
                            className='w-12 h-12 rounded-full mt-4'
                        />
                        <p className='flex flex-col'>
                            <h2 className="text-white">Shobhit Yadav</h2>
                            <span>Hello alok!!</span>
                        </p>
                    </div>
                    {
                        Data.map((data) => (
                            <ChatName name={data.name} avatar={data.avatar} />
                        ))
                    }
                </div>

                <div className='flex flex-col w-full ml-auto'>
                    <div className='flex justify-between space-x-4 font-mono pr-4 p-0 border-b-[0.5px] border-gray-500'>
                        <div className='flex items-center space-x-2'>
                            <img src={avatar}
                                alt="profile"
                                className='w`-12 h-12 rounded-full mt-4'
                            />
                            <h2 className="text-white">Shobhit Yadav</h2>
                        </div>
                        <div className='flex items-center space-x-6'>
                            <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                            <FontAwesomeIcon icon={faVideoCamera} className='w-6 h-6' />
                            <FontAwesomeIcon icon={faEllipsisV} className='w-6 h-6' />
                        </div>
                    </div>
                    <div className='overflow-auto h-full mb-4 flex flex-col chatScrollBar'>
                        <ul className="space-y-2 overflow-auto h-full mb-4 flex flex-col p-1">
                            <li className="bg-gray-100 text-left text-gray-800 p-1 rounded-md w-fit max-w-[50%] mt-auto mr-auto">
                                Hello Alok, I hope you're doing well.
                            </li>
                            <li className="bg-gray-100 text-left text-gray-800 p-1 rounded-md w-fit max-w-[50%] mt-auto ml-auto">
                                Hello sir, I'm doing great, thank you. How about you?
                            </li>
                            <li className="bg-gray-100 text-left text-gray-800 p-1 rounded-md w-fit max-w-[50%] mt-auto mr-auto">
                                We were incredibly impressed with your work on the task.Your work stood out among the other submissions,
                                and we believe you'd be a valuable addition to our team. So, we'd like to extend an offer for the position to you.
                            </li>
                            {msgs.map((msg, index) => (
                                <li key={index} className="bg-gray-100 text-gray-800 p-2 rounded-md w-fit max-w-[50%] mt-auto ml-auto">
                                    {msg}
                                </li>
                            ))}
                        </ul>
                        <form onSubmit={sendMessage} className="flex w-full mt-auto ml-auto items-center border-gray-500 border-t-[0.2px] pt-2">
                            <FontAwesomeIcon icon={faPaperclip} className="text-white p-2" />
                            <input
                                type="text"
                                id="msg"
                                className="flex-1 p-2 bg-[#393c5d] rounded-full text-white "
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2 mr-2"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
