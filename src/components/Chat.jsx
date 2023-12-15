import { IoChatbubbleEllipsesOutline } from "react-icons/io5"


const ChatBox = () => {
    return (
        <>
            <div className="fixed bottom-10 right-10 bg-orange-500 w-20 h-20 rounded-full flex justify-center items-center">
                <IoChatbubbleEllipsesOutline className="text-white text-5xl" />
            </div>
        </>
    )
}

export default ChatBox