import { faEllipsisH, faEllipsisV, faEllipsisVertical, faFileInvoice, faPaperPlane, faPaperclip, faPhone, faPlus, faVideoCamera, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import avatar from './assets/avatar.jpg'
import './chat.css';

export default function ChatUser({ userName, ...props }) {

    const [msgs, setMsgs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [activeChat, setActiveChat] = useState(localStorage.getItem('activeChatId'));
    
    const sendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Update state with new message
        setMsgs([...msgs, inputValue]);

        // Get current date
        const date = new Date().toLocaleTimeString();

        // Update localStorage with the new message
        const storedData = JSON.parse(localStorage.getItem("Data"));
        console.log(activeChat)
        // const activeChatData = storedData.find(chat => chat.id === activeChat);
        // console.log(activeChatData)
        console.log(storedData)
        storedData[activeChat - 1].messageHistory.push(inputValue)
        console.log(storedData[0].id)

        // const user = storedData.find(chat => chat.id === activeChat);
        // user.messageHistory.push({ msg: inputValue, date: date })
        localStorage.setItem("Data", JSON.stringify(storedData))

        // Clear input field
        setInputValue('');
    };

    // useEffect(() => {
    //     setActiveChat(localStorage.getItem('activeChatId'));
    //     console.log(activeChat)
    // }, []);


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("Data"));
        console.log(storedData)
        const newid = localStorage.getItem('activeChatId');
        console.log(newid)
        if (storedData) {
            setMsgs(storedData[newid - 1].messageHistory);
            // setMsgs([""])
        }
        else {
            setMsgs([]);
        }
    }, [localStorage.getItem('activeChatId')]);



    return (
        <div className='flex flex-col w-full ml-auto'>
            <div className='flex justify-between space-x-4 font-mono pr-4 p-0 border-b-[0.5px] border-gray-500'>
                <div className='flex items-center space-x-2'>
                    <img src={avatar}
                        alt="profile"
                        className='w`-12 h-12 rounded-full mt-4'
                    />
                    <h2 className="text-white">{userName}</h2>
                </div>
                <div className='flex items-center space-x-6'>
                    <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                    <FontAwesomeIcon icon={faVideoCamera} className='w-6 h-6' />
                    <FontAwesomeIcon icon={faEllipsisV} className='w-6 h-6' />
                </div>
            </div>
            <div className='overflow-auto h-full mb-4 flex flex-col chatScrollBar'>
                <ul className="space-y-2 overflow-auto h-full mb-4 flex flex-col p-1">
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
    );
}
