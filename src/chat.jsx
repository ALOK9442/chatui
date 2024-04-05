import { faEllipsisH, faEllipsisV, faEllipsisVertical, faFileInvoice, faPaperPlane, faPaperclip, faPhone, faPlus, faVideoCamera, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import avatar from './assets/avatar.jpg';
import ChatName from './chatname';
// import { Data } from './contact';
import './chat.css';
import ActiveChats from './activechats';
import ChatUser from './chatuser';

export default function Chat() {

    const [Data, setData] = useState(JSON.parse(localStorage.getItem('Data')) || []);
    const [activeChatId, setActiveChatId] = useState(null);
    const [activeChat, setActiveChat] = useState(false);
    const [msgs, setMsgs] = useState([]);
    const [userName, setUserName] = useState('');
    const [inputBox, setInputBox] = useState(false);

    const handleChatClick = (chatId) => {
        setActiveChatId(chatId);
        localStorage.setItem('activeChatId', chatId);
        setActiveChat(true);
    };

    useEffect(() => {
        const messages = localStorage.getItem('currentUser');
        if (messages) {
            setMsgs(JSON.parse(messages)[0].msg);
        } else {
            setMsgs([]);
        }
    }, []);

    useEffect(() => {
        if (activeChatId !== null && Data[activeChatId]) {
            setUserName(Data[activeChatId - 1].name);
        } else if (Data.length > 0) {
            setUserName(Data[Data.length - 1].name);
        }
    }, [activeChatId, Data]);

    const onClick = () => {
        setInputBox(true);
    };

    const addUser = () => {
        const inputUser = document.getElementById('inputuser').value;
        if (!inputUser.trim()) return;
        const newUser = {
            id: Data.length + 1,
            name: inputUser,
            avatar: 'https://api.dicebear.com/8.x/pixel-art/svg',
            lastMessage: '',
            messageHistory: []
        };

        const newData = [...Data, newUser];
        setData(newData);
        localStorage.setItem('Data', JSON.stringify(newData));
        setUserName(newUser.name);
        setActiveChatId(newUser.id);
        localStorage.setItem('activeChatId', newUser.id);
        setActiveChat(true);
        setInputBox(false);
    };
    
    return (
        <div className="h-screen">

            {
                inputBox &&
                <div className='absolute z-10 w-[25%] h-[30%] bg-indigo-950 border-gray-500 border-2 rounded-lg
                    top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] space-y-4 p-4'>
                    <p>Enter User Name and start Chatting</p>
                    <input type="text"
                        id="inputuser"
                        className='bg-transparent border-[0.2px] border-gray-500 w-[90%] h-[20%] mt-auto p-1'
                    />
                    <button className='border-2 border-gray-500'
                        onClick={addUser}
                    >
                        Add User to Chat
                    </button>
                </div>
            }
            <div className={`bg-indigo-950 rounded-lg h-[90%] flex  ${inputBox ? 'blur-background' : ''}`}>
                <div className='w-[50%] bg-transparent border-gray-500 border-r-[0.2px] overflow-y-auto hide-on-mobile'>
                    <div className='flex flex-col space-x-4 font-mono border-gray-500 border-b-[0.2px] pb-2'>
                        <div className='flex pr-2'>
                            <h2 className='text-white text-lg mr-auto ml-2 mt-2 hover:bg-amber-500'>
                                Messages
                            </h2>
                            <button onClick={onClick}>
                                <FontAwesomeIcon icon={faPlus} className='w-4 h-4' />
                            </button>
                        </div>
                        <p className='text-green-400 text-xs mt-4 flex mr-auto'>Active Chats</p>
                        <div className='flex mt-1'>
                            {
                                Data.map((data, index) => (
                                    <div className=''
                                        key={index}
                                    >
                                        <ActiveChats avatar={data.avatar} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        Data.map((data) => (
                            <ChatName
                                key={data.id}
                                name={data.name}
                                avatar={data.avatar}
                                isActive={data.id === activeChatId}
                                onClick={() => handleChatClick(data.id)}
                                className={`hover:bg-[#393c5f]`}
                            />
                        ))
                    }
                </div>
                {
                    activeChat ?
                        <ChatUser
                            userName={userName}
                        />
                        :
                        <div className='flex flex-col w-full ml-auto my-auto'>
                            Click on any chat to start conversation
                        </div>
                }
            </div>
        </div>
    );
}
