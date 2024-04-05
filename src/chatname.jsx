import { useEffect, useState } from "react";

export default function ChatName({
    name,
    avatar,
    isActive,
    className = "",
    onClick,
    ...props
}) {


    const [lastMessage, setLastMessage] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("Data"));
        const initialLastMessage = storedData && storedData.length > 0 ? storedData[0].lastMessage : null;
        setLastMessage(initialLastMessage);
    }, []);
    console.log(lastMessage);


    return (
        <div
            className={`flex items-center cursor-pointer space-x-2 border-b-[0.5px] border-gray-500 mb-2 hover:bg-[#393c5f] 
                        ${className} 
                        ${isActive ? "bg-[#393c5f]" : ""}`}
            onClick={onClick}>
            <img src={avatar}
                alt="profile"
                className='w-12 h-12 rounded-full mt-4'
            />
            <p>
                <h2 className="text-white">{name}</h2>
                <span>{lastMessage}</span>
            </p>
        </div>
    )
}