import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <div className="logo">

        QuizMaster 📚

      </div>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/create-quiz">Create Quiz</Link>
        </li>

        <li>
          <Link to="/quizhistory">History</Link>
        </li>

        {user ? (

          <li className="profile-menu">

            <div
              className="profile-btn"
              onClick={() => setShowMenu(!showMenu)}
            >
              👤 {user.name}
            </div>

            {showMenu && (

              <div className="dropdown">

                <p>
                  <strong>{user.name}</strong>
                </p>

                <p>{user.email}</p>

                <hr />

                <button onClick={logout}>
                  Logout
                </button>

              </div>

            )}

          </li>

        ) : (

          <>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>

          </>

        )}

      </ul>

    </nav>

  );

}

export default Navbar;