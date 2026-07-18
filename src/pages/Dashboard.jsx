import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Dashboard() {


  const [quizzes, setQuizzes] = useState([]);

  const [attempts, setAttempts] = useState(0);


  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");




  useEffect(() => {


    const savedQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];


    setQuizzes(savedQuizzes);



    const history =
      JSON.parse(localStorage.getItem("history")) || [];


    setAttempts(history.length);



  }, []);






  const deleteQuiz = (id) => {



    const updatedQuizzes = quizzes.filter(

      (quiz) => quiz.id !== id

    );



    setQuizzes(updatedQuizzes);



    localStorage.setItem(

      "quizzes",

      JSON.stringify(updatedQuizzes)

    );


  };






  const totalQuestions = quizzes.reduce(

    (sum, quiz) => sum + quiz.questions.length,

    0

  );








  const filteredQuizzes = quizzes.filter((quiz)=>{


    const matchesSearch =

      quiz.quizTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());




    const matchesCategory =

      selectedCategory === "All" ||

      quiz.category === selectedCategory;



    return matchesSearch && matchesCategory;


  });









  return (


    <>


      <Navbar />



      <div className="dashboard-page">



        <h1>
          Quiz Dashboard 📚
        </h1>







        <div className="stats-container">



          <div className="stats-card">

            <h2>
              {quizzes.length}
            </h2>

            <p>
              Total Quizzes
            </p>

          </div>





          <div className="stats-card">

            <h2>
              {totalQuestions}
            </h2>

            <p>
              Total Questions
            </p>

          </div>





          <div className="stats-card">

            <h2>
              {attempts}
            </h2>

            <p>
              Quiz Attempts
            </p>

          </div>



        </div>








        {/* Search and Filter */}



        <div className="search-filter">



          <input

            type="text"

            placeholder="🔍 Search Quiz..."

            value={searchTerm}

            onChange={(e)=>setSearchTerm(e.target.value)}

          />





          <select

            value={selectedCategory}

            onChange={(e)=>setSelectedCategory(e.target.value)}

          >

            <option value="All">
              All Categories
            </option>

            <option value="Programming">
              Programming
            </option>

            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>

            <option value="Cyber Security">
              Cyber Security
            </option>

            <option value="General Knowledge">
              General Knowledge
            </option>


          </select>



        </div>









        <div className="quiz-container">



          {

            filteredQuizzes.length === 0 ? (


              <h2>
                No Matching Quizzes Found
              </h2>


            )

            :



            filteredQuizzes.map((quiz)=>(


              <div

                className="dashboard-card"

                key={quiz.id}

              >



                <h2>
                  {quiz.quizTitle}
                </h2>




                <p>
                  Category: {quiz.category}
                </p>



                <p>
                  Questions: {quiz.questions.length}
                </p>








                <div className="dashboard-buttons">



                  <Link to={`/take-quiz/${quiz.id}`}>

                    <button>
                      Start Quiz
                    </button>

                  </Link>





                  <Link to={`/edit-quiz/${quiz.id}`}>

                    <button>
                      Edit
                    </button>

                  </Link>






                  <button

                    onClick={() => deleteQuiz(quiz.id)}

                  >

                    Delete

                  </button>




                </div>




              </div>


            ))


          }





        </div>



      </div>


    </>


  );


}


export default Dashboard;