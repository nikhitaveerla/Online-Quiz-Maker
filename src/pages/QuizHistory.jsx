import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


function QuizHistory() {


  const [history, setHistory] = useState([]);



  useEffect(() => {


    const savedHistory =
      JSON.parse(localStorage.getItem("quizHistory")) || [];


    setHistory(savedHistory);


  }, []);




  return (

    <>


      <Navbar />



      <div className="dashboard-page">


        <h1>
          Quiz History 📜
        </h1>




        {
          history.length === 0 ? (


            <h2 style={{
              textAlign:"center"
            }}>

              No Quiz Attempts Yet

            </h2>



          ) : (



            <div className="quiz-container">



              {
                history.map((item,index)=>(



                  <div

                    className="dashboard-card"

                    key={index}

                  >



                    <h2>
                      {item.quizTitle}
                    </h2>



                    <p>
                      Score: {item.score} / {item.total}
                    </p>



                    <p>
                      Date: {item.date}
                    </p>



                  </div>



                ))
              }



            </div>



          )
        }



      </div>



    </>

  );

}


export default QuizHistory;