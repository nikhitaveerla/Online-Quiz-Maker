import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function EditQuiz() {

  const { id } = useParams();

  const navigate = useNavigate();


  const quizzes =
    JSON.parse(localStorage.getItem("quizzes")) || [];


  const quizIndex = quizzes.findIndex(
    (item) => item.id === Number(id)
  );


  const oldQuiz = quizzes[quizIndex];


  // Quiz dorakakapothe
  if (!oldQuiz) {

    return (
      <>
        <Navbar />

        <h2 style={{
          textAlign: "center",
          marginTop: "50px"
        }}>
          Quiz Not Found
        </h2>

      </>
    );

  }



  const [quizTitle, setQuizTitle] = useState(
    oldQuiz.quizTitle
  );


  const [category, setCategory] = useState(
    oldQuiz.category
  );


  const [questions, setQuestions] = useState(
    oldQuiz.questions
  );



  const handleChange = (index, field, value) => {

    const updatedQuestions = [...questions];

    updatedQuestions[index][field] = value;

    setQuestions(updatedQuestions);

  };



  const updateQuiz = () => {


    const updatedQuiz = {

      ...oldQuiz,

      quizTitle,

      category,

      questions

    };



    quizzes[quizIndex] = updatedQuiz;



    localStorage.setItem(
      "quizzes",
      JSON.stringify(quizzes)
    );



    alert("Quiz Updated Successfully!");


    navigate("/dashboard");


  };



  return (

    <>

      <Navbar />


      <div className="quiz-page">


        <div className="quiz-box">


          <h1>
            Edit Quiz ✏️
          </h1>



          <label>
            Quiz Title
          </label>


          <input

            type="text"

            value={quizTitle}

            onChange={(e)=>
              setQuizTitle(e.target.value)
            }

          />



          <label>
            Category
          </label>


          <select

            value={category}

            onChange={(e)=>
              setCategory(e.target.value)
            }

          >

            <option>Programming</option>

            <option>Artificial Intelligence</option>

            <option>Cyber Security</option>

            <option>General Knowledge</option>


          </select>





          {
            questions.map((q,index)=>(

              <div key={index}>


                <h3>
                  Question {index + 1}
                </h3>



                <input

                  type="text"

                  value={q.question}

                  placeholder="Question"

                  onChange={(e)=>
                    handleChange(
                      index,
                      "question",
                      e.target.value
                    )
                  }

                />



                <input

                  type="text"

                  value={q.optionA}

                  placeholder="Option A"

                  onChange={(e)=>
                    handleChange(
                      index,
                      "optionA",
                      e.target.value
                    )
                  }

                />



                <input

                  type="text"

                  value={q.optionB}

                  placeholder="Option B"

                  onChange={(e)=>
                    handleChange(
                      index,
                      "optionB",
                      e.target.value
                    )
                  }

                />



                <input

                  type="text"

                  value={q.optionC}

                  placeholder="Option C"

                  onChange={(e)=>
                    handleChange(
                      index,
                      "optionC",
                      e.target.value
                    )
                  }

                />



                <input

                  type="text"

                  value={q.optionD}

                  placeholder="Option D"

                  onChange={(e)=>
                    handleChange(
                      index,
                      "optionD",
                      e.target.value
                    )
                  }

                />



                <label>
                  Correct Answer
                </label>


                <select

                  value={q.answer}

                  onChange={(e)=>
                    handleChange(
                      index,
                      "answer",
                      e.target.value
                    )
                  }

                >

                  <option value="">Select Answer</option>

                  <option value="A">A</option>

                  <option value="B">B</option>

                  <option value="C">C</option>

                  <option value="D">D</option>


                </select>



                <hr style={{
                  margin:"25px 0"
                }}/>


              </div>

            ))
          }





          <button onClick={updateQuiz}>

            Update Quiz

          </button>



        </div>


      </div>


    </>

  );

}


export default EditQuiz;