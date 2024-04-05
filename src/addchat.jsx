export default function AddChat() {


    const addUser = () => {
        const inputUser = document.getElementById('inputUser').value;
        console.log(inputUser);
        if (!inputUser.trim()) return;
        Data.push({
            name: inputUser,
            avatar: 'https://api.dicebear.com/8.x/pixel-art/svg',
        })
        setInputBox(false);
    }

    
    return (
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
    )
}