export default function ActiveChats({
    avatar,
    className = "",
    ...props
}) {
    return (
            <img src={avatar} alt="profile" className={`w-8 h-8 mx-2 border-white border-[0.5px] rounded-full ${className}`} />
    )
}