export default function ChatName({
    name,
    avatar,
    className = "",
    ...props
}) {
    return (
        <div className='flex items-center space-x-2 border-b-[0.5px] border-gray-500 mb-2 hover:bg-[#393c5f]'>
            <img src={avatar}
                alt="profile"
                className='w-12 h-12 rounded-full mt-4'
            />
            <p>
                <h2 className="text-white">{name}</h2>
                <span>Hello alok!!</span>
            </p>
        </div>
    )
}