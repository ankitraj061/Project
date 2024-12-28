import React, { useState } from "react";

function SkincareQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How does your skin feel after washing it?",
      options: ["Tight and dry", "Normal", "Oily", "Dry in some areas and oily in others"],
    },
    {
      id: 2,
      question: "How often does your skin feel oily during the day?",
      options: ["Rarely", "Sometimes", "Frequently", "Only in the T-zone"],
    },
    {
      id: 3,
      question: "Do you experience redness or irritation on your skin?",
      options: ["Often", "Sometimes", "Rarely", "Never"],
    },
  ];

  const getRecommendation = () => {
    let products = [];

    if (answers[0] === "Tight and dry") {
      products = ["Moisturizing Facial Cleanser", "Intense Hydration Cream"];
      return {
        skinType: "Dry Skin",
        products,
      };
    }

    if (answers[0] === "Oily") {
      products = ["Oil Control Cleanser", "Oil-Free Mattifying Moisturizer"];
      return {
        skinType: "Oily Skin",
        products,
      };
    }

    if (answers[0] === "Dry in some areas and oily in others") {
      products = ["Balancing Hydrating Cleanser", "Multi-Action Moisturizer"];
      return {
        skinType: "Combination Skin",
        products,
      };
    }

    return {
      skinType: "Normal Skin",
      products: ["Gentle Cleanser", "Light Moisturizer"],
    };
  };

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [step]: option });

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const recommendationResult = getRecommendation();
      setRecommendation(recommendationResult);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setName("");
    setRecommendation(null);
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {step === 0 && (
          <div>
            <h1 className="text-xl font-semibold mb-4">Get started to identify your skincare</h1>
            <p className="text-gray-600 mb-4">Please enter your name to get started:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            />
            <button
              onClick={() => setStep(1)}
              disabled={!name}
              className={`w-full py-2 rounded-lg ${
                name ? "bg-emerald-600 text-white" : "bg-gray-300 text-gray-500"
              }`}
            >
              Start Quiz
            </button>
          </div>
        )}

        {step > 0 && step < questions.length && (
          <div>
            <h2 className="text-lg font-semibold mb-4">{questions[step - 1].question}</h2>
            <div className="grid gap-2">
              {questions[step - 1].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full py-2 border rounded-lg bg-emerald-50 hover:bg-emerald-100"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === questions.length && recommendation && (
          <div>
            <h1 className="text-xl font-semibold mb-4">Hi {name},</h1>
            <p className="text-gray-600 mb-4">{`Based on your answers, we recommend the following for ${recommendation.skinType}:`}</p>
            <ul className="list-disc pl-6 mb-4">
              {recommendation.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
            <button
              onClick={handleRestart}
              className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkincareQuiz;
