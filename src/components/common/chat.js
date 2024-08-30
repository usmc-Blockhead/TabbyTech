import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import "../../App.css"; 

function AppChat() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            <div
                className="chatbot-icon"
                onClick={toggleChat}>
                <FiMessageCircle
                    size={30}
                    color="#FF4500"
                />
            </div>
            {isChatOpen && (
                <div className="chatbot-window">
                    <iframe
                        src="https://aichatbot.sendbird.com/playground/index.html?app_id=80CF263C-8F39-41EA-A92C-3F91105F8D64&bot_id=onboarding_bot&region=us-1"
                        title="tabbybot"
                        width="100%"
                        style={{ height: "100%", minHeight: "700px" }}
                        frameBorder="0"></iframe>
                </div>
            )}
        </div>
    );
}

export default AppChat;
