import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Sparkles } from 'lucide-react';
import productsData from '../data/myProducts.json'


const FaceProductsChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your skincare assistant. I can help you find the perfect face products for your skin type. I have products for:\n\n• Normal skin\n• Dry skin\n• Oily skin\n• Combination skin\n• Sensitive skin\n\nWhat's your skin type or what can I help you with today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const filterProductsByCategory = (category) => {
    return productsData.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  const detectSkinType = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('dry skin') || msg.includes('dry')) {
      return 'dry skin';
    }
    if (msg.includes('oily skin') || msg.includes('oily')) {
      return 'oily skin';
    }
    if (msg.includes('normal skin') || msg.includes('normal')) {
      return 'normal skin';
    }
    if (msg.includes('combination skin') || msg.includes('combination') || msg.includes('combo')) {
      return 'combination skin';
    }
    if (msg.includes('sensitive skin') || msg.includes('sensitive')) {
      return 'sensitive skin';
    }
    
    return null;
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    const skinType = detectSkinType(message);

    // Handle greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! 😊 I'm here to help you find the perfect skincare products. What's your skin type? (normal, dry, oily, combination, or sensitive)"
      };
    }

    // Handle skin type queries
    if (skinType) {
      const products = filterProductsByCategory(skinType);
      
      if (products.length > 0) {
        return {
          text: `Great! Here are our recommended products for ${skinType}:\n\n${products.map(p => `• ${p.name} - ${p.price}\n  ${p.description}`).join('\n\n')}`,
          products: products
        };
      } else {
        return {
          text: `I don't have specific products for ${skinType} in our current inventory. Would you like to see products for a different skin type?`
        };
      }
    }

    // Handle general product inquiries
    if (message.includes('product') || message.includes('recommend') || message.includes('suggest')) {
      return {
        text: "I'd love to recommend the perfect products for you! First, could you tell me your skin type?\n\n• Normal skin\n• Dry skin\n• Oily skin\n• Combination skin\n• Sensitive skin"
      };
    }

    // Handle pricing questions
    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return {
        text: "Our products range from $22.99 to $42.99. Would you like to see products for your specific skin type to get exact pricing?"
      };
    }

    // Default response
    return {
      text: "I'm here to help you choose the right skincare products! 💆‍♀️\n\nPlease tell me your skin type:\n• Normal skin\n• Dry skin\n• Oily skin\n• Combination skin\n• Sensitive skin\n\nOr ask me about specific products!"
    };
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        products: botResponse.products
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle size={24} />
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Skincare Assistant</h3>
                <p className="text-sm opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.products && (
                    <div className="mt-3 space-y-2">
                      {message.products.map((product, idx) => (
                        <div key={idx} className="bg-gray-100 p-2 rounded-lg">
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-purple-600 font-semibold">{product.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skincare products..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceProductsChatbot;