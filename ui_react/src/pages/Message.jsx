import React, { useState } from 'react';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSend = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, inputMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/04/60/70/81/1000_F_460708112_GBRO4BayAxV4316wqpvyt3LcSNEufZaX.jpg)' }}>
      <div className="fixed bottom-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Chat</h3>
        </div>
        <div className="h-48 overflow-y-auto">
        <p className="bg-gray-100 rounded-md p-2">Hello, how can I help you?</p>
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col mb-2">
            
              <p className="bg-gray-100 rounded-md p-2">{message}</p>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <textarea 
            className="w-full border border-gray-300 rounded-md p-2 resize-none" 
            placeholder="Type your message..."
            value={inputMessage}
            onChange={handleInputChange}
          ></textarea>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
