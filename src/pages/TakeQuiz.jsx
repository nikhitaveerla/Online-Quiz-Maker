import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function TakeQuiz() {


  const { id } = useParams();

  const navigate = useNavigate();



  const quizzes =
    JSON.parse(localStorage.getItem("quizzes")) || [];



  const quiz = quizzes.find(
    (item) => item.id === Number(id)
  );



  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [answers, setAnswers] = useState([]);

  const [timeLeft, setTimeLeft] = useState(30);





  if (!quiz) {

    return (

      <>
        <Navbar />

        <h2>
          Quiz Not Found
        </h2>

      </>

    );

  }





  const questions = quiz.questions;





  // Timer Logic

  useEffect(() => {


    if(timeLeft === 0){

      handleNextQuestion();

      return;

    }



    const timer = setInterval(()=>{


      setTimeLeft((prev)=>prev - 1);


    },1000);



    return ()=>clearInterval(timer);



  },[timeLeft]);







  const handleAnswer = (answer) => {


    setSelectedAnswer(answer);



    const updatedAnswers = [...answers];


    updatedAnswers[currentQuestion] = answer;


    setAnswers(updatedAnswers);


  };









  const handleNextQuestion = () => {



    if(currentQuestion < questions.length - 1){


      setCurrentQuestion(currentQuestion + 1);


      setSelectedAnswer("");


      setTimeLeft(30);



    }

    else{


      submitQuiz();


    }


  };









  const submitQuiz = () => {


    let score = 0;



    questions.forEach((question,index)=>{


      if(question.answer === answers[index]){

        score++;

      }


    });






    const attempt = {


      quizTitle: quiz.quizTitle,


      score: score,


      total: questions.length,


      date: new Date().toLocaleDateString()


    };







    const oldHistory =

      JSON.parse(localStorage.getItem("quizHistory")) || [];





    const updatedHistory = [

      ...oldHistory,

      attempt

    ];





    localStorage.setItem(

      "quizHistory",

      JSON.stringify(updatedHistory)

    );






    navigate("/result",{

  state:{

    score: score,

    total: questions.length,

    questions: questions,

    answers: answers

  }

});



  };









  return (

    <>


      <Navbar />



      <div className="takequiz-page">


        <div className="takequiz-box">





          <h1>

            {quiz.quizTitle} 📝

          </h1>






          <h3>

            Question {currentQuestion + 1} / {questions.length}

          </h3>






          <h2>

            ⏳ Time Left: {timeLeft} seconds

          </h2>






          <h2>

            {questions[currentQuestion].question}

          </h2>








          {[

            questions[currentQuestion].optionA,

            questions[currentQuestion].optionB,

            questions[currentQuestion].optionC,

            questions[currentQuestion].optionD


          ].map((option,index)=>(


            <div

              className="option-box"

              key={index}

            >



              <input

                type="radio"

                name="answer"

                checked={selectedAnswer === option}

                onChange={()=>handleAnswer(option)}

              />



              <label>

                {option}

              </label>



            </div>


          ))}









          {

            currentQuestion === questions.length - 1 ?


            (

              <button onClick={submitQuiz}>

                Submit Quiz 🎉

              </button>


            )


            :


            (

              <button onClick={handleNextQuestion}>

                Next Question →

              </button>


            )


          }





        </div>


      </div>


    </>


  );


}


export default TakeQuiz;