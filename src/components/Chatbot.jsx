import React, { useState } from 'react';
import './Chatbot.css';
const Chatbot = ({ visible, onClose }) => {
    const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, from: 'user' };
    const botMessage = { text: getBotResponse(input), from: 'bot' };

    setMessages(prevMessages => [
      ...prevMessages,
      userMessage,
      botMessage
    ]);

    setInput('');
  };

  const getBotResponse = (userInput) => {
    // Convert user input to lowercase for easier matching
    const query = userInput.toLowerCase();
    //return'Hi i am AYUSH bot';
    if (query.includes('ayush') && query.includes('registration')) {
      return 'To register a startup with AYUSH, you need to click the register button given in the home page of AYUSH start-up registration. Make sure to have all necessary documents and meet the eligibility criteria.';
    } else if (query.includes('eligibility') || query.includes('eligibilities')) {
      return 'The eligibility criteria for AYUSH startup registration typically include being an Indian citizen, having a viable business idea in the AYUSH sector, and meeting the financial and technical requirements specified by AYUSH.';
    } else if (query.includes('documents')) {
      return 'You will need to provide documents such as a certificate of incorporation if its a company or registration certificate for partnerships, proof of identity(Aadhar/PAN etc), Business Address Proof and NOC if rented,AYUSH license,GMP certificate ,Bank account details or proof for the same.';
    } else if (query.includes('process')) {
      return 'The registration process usually involves submitting an application online, providing necessary documentation, and possibly attending an interview or presentation as part of the evaluation process.';
    }
    else if(query.includes('ok') || query.include('thank you')){return 'Thank you for reaching out.Always pleasure to help' } else {
      return 'I am not sure about that. Please visit the AYUSH official website or contact their support for more detailed information.';
    }
  };

  if (!visible) return null;
  return (
    <div className="chatbot">
        <button className="chatbot-close" onClick={onClose}>×</button>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={'message ${msg.from}'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Hi, I am AYUSH bot"
          className="chatbot-input"
        />
        <button onClick={handleSend} className="send-button">Send</button>
      </div>
    </div>
  )
}

export default Chatbot