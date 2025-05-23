import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Sparkles } from 'lucide-react';

const FaceProductsChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your skincare assistant. I can help you find the perfect face products for your skin type and concerns. What can I help you with today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample product database - replace with your actual products
  const products = {
    cleanser: [
      { name: "Gentle Foam Cleanser", price: "$24", skin: "all", description: "Perfect for daily cleansing" },
      { name: "Acne Fighting Cleanser", price: "$28", skin: "acne-prone", description: "Contains salicylic acid" },
      { name: "Hydrating Cream Cleanser", price: "$26", skin: "dry", description: "Moisturizing formula" }
    ],
    moisturizer: [
      { name: "Daily Hydrating Moisturizer", price: "$32", skin: "all", description: "Lightweight, non-greasy" },
      { name: "Oil-Free Gel Moisturizer", price: "$30", skin: "oily", description: "Controls shine" },
      { name: "Rich Night Cream", price: "$45", skin: "dry", description: "Deep overnight hydration" }
    ],
    serum: [
      { name: "Vitamin C Brightening Serum", price: "$38", skin: "all", description: "Antioxidant protection" },
      { name: "Niacinamide Pore Refining Serum", price: "$35", skin: "oily", description: "Minimizes pores" },
      { name: "Hyaluronic Acid Serum", price: "$42", skin: "dry", description: "Intense hydration boost" }
    ],
    sunscreen: [
      { name: "Daily SPF 50 Sunscreen", price: "$28", skin: "all", description: "Broad spectrum protection" },
      { name: "Tinted SPF 30 Moisturizer", price: "$34", skin: "all", description: "Coverage + protection" }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Product recommendations based on keywords
    if (message.includes('dry skin') || message.includes('dehydrated')) {
      return {
        text: "For dry skin, I recommend our hydration-focused products:\n\n• Hydrating Cream Cleanser ($26)\n• Rich Night Cream ($45)\n• Hyaluronic Acid Serum ($42)\n\nThese will help restore moisture and strengthen your skin barrier. Would you like more details about any of these products?",
        products: [products.cleanser[2], products.moisturizer[2], products.serum[2]]
      };
    }
    
    if (message.includes('oily skin') || message.includes('shine') || message.includes('pores')) {
      return {
        text: "Perfect! For oily skin concerns, here are my top recommendations:\n\n• Acne Fighting Cleanser ($28)\n• Oil-Free Gel Moisturizer ($30)\n• Niacinamide Pore Refining Serum ($35)\n\nThese will help control oil production and minimize pores. Shall I explain how to use them together?",
        products: [products.cleanser[1], products.moisturizer[1], products.serum[1]]
      };
    }
    
    if (message.includes('acne') || message.includes('breakout') || message.includes('pimple')) {
      return {
        text: "I understand acne concerns! Here's what I recommend for clearer skin:\n\n• Acne Fighting Cleanser with salicylic acid ($28)\n• Oil-Free Gel Moisturizer ($30)\n• Daily SPF 50 Sunscreen ($28)\n\nConsistency is key with acne care. Would you like a complete routine breakdown?",
        products: [products.cleanser[1], products.moisturizer[1], products.sunscreen[0]]
      };
    }
    
    if (message.includes('routine') || message.includes('order') || message.includes('steps')) {
      return {
        text: "Here's the perfect skincare routine order:\n\n🌅 MORNING:\n1. Cleanser\n2. Serum (Vitamin C)\n3. Moisturizer\n4. Sunscreen\n\n🌙 EVENING:\n1. Cleanser\n2. Serum (targeted treatment)\n3. Night moisturizer\n\nWhat's your main skin concern so I can customize this for you?"
      };
    }
    
    if (message.includes('sensitive') || message.includes('irritated')) {
      return {
        text: "For sensitive skin, gentle is the way to go:\n\n• Gentle Foam Cleanser ($24)\n• Daily Hydrating Moisturizer ($32)\n• Daily SPF 50 Sunscreen ($28)\n\nThese are formulated without harsh ingredients. Start slowly and patch test first!"
      };
    }
    
    if (message.includes('vitamin c') || message.includes('brightening') || message.includes('dark spots')) {
      return {
        text: "Our Vitamin C Brightening Serum ($38) is perfect for:\n\n✨ Fading dark spots\n✨ Evening skin tone\n✨ Antioxidant protection\n✨ Natural glow\n\nUse it in the morning under sunscreen for best results!"
      };
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return {
        text: "Our products range from $24-$45:\n\n💰 Budget-friendly: Gentle Foam Cleanser ($24)\n💰 Mid-range: Most serums ($35-$38)\n💰 Premium: Rich Night Cream ($45)\n\nWhat's your budget range? I can recommend the best products within it!"
      };
    }
    
    // Default responses for common greetings/questions
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! I'm excited to help you find your perfect skincare routine. What's your main skin concern today? (dry skin, oily skin, acne, aging, etc.)"
      };
    }
    
    if (message.includes('help') || message.includes('recommend')) {
      return {
        text: "I'd love to help! To give you the best recommendations, could you tell me:\n\n• What's your skin type? (dry, oily, combination, sensitive)\n• Any specific concerns? (acne, dark spots, aging, etc.)\n• Current routine or budget?\n\nThe more you tell me, the better I can help! 😊"
      };
    }
    
    // Default fallback
    return {
      text: "I'd be happy to help you with that! I specialize in skincare recommendations. You can ask me about:\n\n• Product recommendations for your skin type\n• Skincare routines and order\n• Specific concerns (acne, dryness, aging)\n• Product ingredients and benefits\n\nWhat would you like to know more about?"
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

    // Simulate bot thinking time
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
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      zIndex: 9999
    }}>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            color: 'white',
            padding: '16px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
          }}
        >
          <MessageCircle size={24} />
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '12px',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'pulse 2s infinite'
          }}>
            !
          </div>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Need skincare help?
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          width: '320px',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles size={20} />
              <div>
                <h3 className="font-semibold">Skincare Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
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
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.products && (
                    <div className="mt-2 space-y-1">
                      {message.products.map((product, idx) => (
                        <div key={idx} className="bg-gray-100 p-2 rounded-lg text-xs">
                          <div className="font-semibold text-purple-600">{product.name}</div>
                          <div className="text-gray-600">{product.price}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl">
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
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
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
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
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