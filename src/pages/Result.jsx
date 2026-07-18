import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Result() {


  const location = useLocation();

  const navigate = useNavigate();



  const score = location.state?.score || 0;

  const total = location.state?.total || 0;


  const questions = location.state?.questions || [];

  const answers = location.state?.answers || [];




  const percentage = total === 0 
    ? 0 
    : Math.round((score / total) * 100);





  return (

    <>


      <Navbar />



      <div className="result-page">


        <div className="result-card">



          <h1>
            {percentage}%
          </h1>




          <h2>
            🎉 Congratulations! Good Job
          </h2>




          <p>
            You scored {score} out of {total}
          </p>







          <div className="result-details">


            <h2>
              Answer Review 📝
            </h2>



            {

              questions.map((question,index)=>(


                <div key={index}>


                  <p>

                    <b>
                      Q{index+1}. {question.question}
                    </b>

                  </p>



                  <p>
                    Your Answer: {answers[index] || "Not Answered"}
                  </p>



                  <p>
                    Correct Answer: {question.answer}
                  </p>



                  <hr />

                </div>


              ))

            }



          </div>








          <div className="result-buttons">


            <button
              onClick={() => navigate("/dashboard")}
            >

              Back To Dashboard

            </button>





            <button
              onClick={() => navigate("/dashboard")}
            >

              Try Again

            </button>



          </div>





        </div>


      </div>


    </>


  );


}


export default Result;