import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateQuiz from "./pages/CreateQuiz";
import Dashboard from "./pages/Dashboard";
import TakeQuiz from "./pages/TakeQuiz";
import Result from "./pages/Result";
import EditQuiz from "./pages/EditQuiz";
import QuizHistory from "./pages/QuizHistory";

import ProtectedRoute from "./components/ProtectedRoute";



function App() {


  return (


    <BrowserRouter>


      <Routes>



        {/* Public Pages */}


        <Route 
          path="/" 
          element={<Home />} 
        />



        <Route 
          path="/login" 
          element={<Login />} 
        />



        <Route 
          path="/register" 
          element={<Register />} 
        />





        {/* Protected Pages */}



        <Route

          path="/create-quiz"

          element={

            <ProtectedRoute>

              <CreateQuiz />

            </ProtectedRoute>

          }

        />





        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }

        />






        <Route

          path="/take-quiz/:id"

          element={

            <ProtectedRoute>

              <TakeQuiz />

            </ProtectedRoute>

          }

        />







        <Route

          path="/edit-quiz/:id"

          element={

            <ProtectedRoute>

              <EditQuiz />

            </ProtectedRoute>

          }

        />







        <Route

          path="/result"

          element={

            <ProtectedRoute>

              <Result />

            </ProtectedRoute>

          }

        />







        <Route

          path="/quizhistory"

          element={

            <ProtectedRoute>

              <QuizHistory />

            </ProtectedRoute>

          }

        />




      </Routes>



    </BrowserRouter>


  );


}


export default App;