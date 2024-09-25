import React, { useState } from 'react';

import './ChatbotIcon.css'; 
import Chatbot from './Chatbot';
import { Person } from '@mui/icons-material';

const ChatbotIcon = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    const toggleChatbot = () => {
      setIsChatbotVisible(!isChatbotVisible);
    }; 
  return (
<>
            <div className="chatbot-container" onClick={toggleChatbot}>
                <div className="chatbot-icon"><Person /> {/* Person icon */}
                </div>
                    
                <div className="chatbot-speech-bubble">
                    <div className="chatbot-text">Any help?</div>
                </div>
            </div>
            <Chatbot visible={isChatbotVisible} onClose={toggleChatbot} />
        </>
  )
}

export default ChatbotIcon