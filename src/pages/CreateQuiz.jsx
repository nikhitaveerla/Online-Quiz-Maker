import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
    const navigate = useNavigate();

  const [quizTitle, setQuizTitle] = useState("");
  const [category, setCategory] = useState("");

  const [questions, setQuestions] = useState([
    {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      answer: ""
    }
  ]);


  const handleChange = (index, field, value) => {

    const updatedQuestions = [...questions];

    updatedQuestions[index][field] = value;

    setQuestions(updatedQuestions);

  };


  const addQuestion = () => {

    setQuestions([
      ...questions,
      {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: ""
      }
    ]);

  };


  const removeQuestion = (index) => {

    const updatedQuestions = questions.filter(
      (_, i) => i !== index
    );

    setQuestions(updatedQuestions);

  };


const handleCreateQuiz = () => {


  const quizData = {

    id: Date.now(),

    quizTitle,

    category,

    questions

  };


  const oldQuizzes = JSON.parse(
    localStorage.getItem("quizzes")
  ) || [];



  const updatedQuizzes = [
    ...oldQuizzes,
    quizData
  ];



  localStorage.setItem(
    "quizzes",
    JSON.stringify(updatedQuizzes)
  );



  alert("Quiz Created Successfully!");



  navigate("/dashboard");


};


  return (

    <>

      <Navbar />

      <div className="quiz-page">

        <div className="quiz-box">

          <h1>Create New Quiz 📝</h1>

          <label>Quiz Title</label>

          <input
            type="text"
            placeholder="Enter quiz title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />


          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option value="">Select Category</option>

            <option>Programming</option>

            <option>Artificial Intelligence</option>

            <option>Cyber Security</option>

            <option>General Knowledge</option>

          </select>


          {questions.map((q, index) => (

            <div key={index}>

              <h3>Question {index + 1}</h3>

              <input
                type="text"
                placeholder="Enter question"
                value={q.question}
                onChange={(e) =>
                  handleChange(index, "question", e.target.value)
                }
              />

              <label>Option A</label>

              <input
                type="text"
                placeholder="Enter option A"
                value={q.optionA}
                onChange={(e) =>
                  handleChange(index, "optionA", e.target.value)
                }
              />

              <label>Option B</label>

              <input
                type="text"
                placeholder="Enter option B"
                value={q.optionB}
                onChange={(e) =>
                  handleChange(index, "optionB", e.target.value)
                }
              />

              <label>Option C</label>

              <input
                type="text"
                placeholder="Enter option C"
                value={q.optionC}
                onChange={(e) =>
                  handleChange(index, "optionC", e.target.value)
                }
              />
                            <label>Option D</label>

              <input
                type="text"
                placeholder="Enter option D"
                value={q.optionD}
                onChange={(e) =>
                  handleChange(index, "optionD", e.target.value)
                }
              />

              <label>Correct Answer</label>

              <select
                value={q.answer}
                onChange={(e) =>
                  handleChange(index, "answer", e.target.value)
                }
              >
                <option value="">Select Answer</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeQuestion(index)}
                >
                  Remove Question
                </button>
              )}

              <hr style={{ margin: "25px 0" }} />

            </div>

          ))}

          <button
            type="button"
            onClick={addQuestion}
          >
            + Add Another Question
          </button>

          <button
            type="button"
            onClick={handleCreateQuiz}
          >
            Create Quiz
          </button>

        </div>

      </div>

    </>

  );
}

export default CreateQuiz;