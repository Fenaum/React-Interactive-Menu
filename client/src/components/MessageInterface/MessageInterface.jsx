import chat from "../../assets/images/message/chat.svg"
import "./MessageInterface.css"

export default function MessageInterface() {
    return (
        <div>
            <div></div>
            <button>
                <img className="chat-icon" src={chat} alt="chat-icon" />
            </button>
        </div>
    )
}