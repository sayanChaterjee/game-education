import { useState } from 'react';
import Lottie from "lottie-react";
import Welcome from "../assets/AnimationWelcome.json";
import Arithmatic from "../assets/Animation-Arithmatic.json";
import Coin from '../assets/AnimationCoin.json'
import TypewriterComponent from "typewriter-effect";
import { CheckCircle, XCircle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "../components/ui/alert-dialog";
import { Link } from 'react-router-dom';

const Math = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const answers = [
    { id: 'a', text: '4' },
    { id: 'b', text: '3', correct: true },
    { id: 'c', text: '2' },
    { id: 'd', text: '1' },
  ];

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);
    const selectedAnswer = answers.find(answer => answer.id === answerId);
    if (selectedAnswer && selectedAnswer.correct) {
      setShowModal(true);
    }
  };

  const getAnswerColor = (answer) => {
    if (selectedAnswer === null) return 'border-gray-300';
    if (answer.correct) return 'border-green-500 bg-green-500';
    if (selectedAnswer === answer.id && !answer.correct) return 'border-red-500 bg-red-500';
    return 'border-gray-300';
  };

  const getTextColor = (answer) => {
    if (selectedAnswer === null) return 'text-gray-700';
    if (answer.correct) return 'text-green-500';
    if (selectedAnswer === answer.id && !answer.correct) return 'text-red-500';
    return 'text-gray-700';
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-evenly mb-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-4 md:mb-0">
          <TypewriterComponent
            options={{
              strings: ["Welcome to the world of numbers"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="w-64 h-64">
          <Lottie animationData={Welcome} />
        </div>
      </div>
      
      <div className="flex justify-center mb-8">
        <button className="text-3xl font-bold bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors duration-300">
          Get Started
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="w-64 h-64 mb-4 md:mb-0">
          <Lottie animationData={Arithmatic} />
        </div>
        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold mb-4">Q.1 Alex has 5 Apples. Sam ate 2 of them. How many Apples Alex left with?</p>
          {answers.map((answer) => (
            <div 
              key={answer.id} 
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleAnswerClick(answer.id)}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${getAnswerColor(answer)}`}>
                {selectedAnswer === answer.id && (
                  answer.correct ? 
                    <CheckCircle size={16} color="white" /> : 
                    <XCircle size={16} color="white" />
                )}
              </div>
              <p className={`font-semibold ${getTextColor(answer)}`}>
                {answer.id}. {answer.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <AlertDialog open={showModal} onOpenChange={setShowModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Congratulations!</AlertDialogTitle>
            <AlertDialogDescription>
              You answered correctly and earned 10 points!
              <Lottie animationData={Coin}/>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowModal(false)}>Continue</AlertDialogAction>
            <AlertDialogAction onClick={() => setShowModal(false)}>
              <Link to='/leaderboard'>
              View Leaderboard
              </Link>
              </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Math;