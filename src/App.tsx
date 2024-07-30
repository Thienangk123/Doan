// import { useEffect } from 'react';
// import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './components/Login';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileExport } from '@fortawesome/free-solid-svg-icons';
// import './styles.css';

// const App = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     navigate('/login');
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <div className="logo">
//           <Link to="/">
//             <FontAwesomeIcon icon={faFileExport} className="icon" />
//             <h1>Task flow</h1>
//           </Link>
//         </div>
//         <div className="user-info">
//           <span>Username</span>
//           <img src="profile.jpg" alt="User Profile" />
//         </div>
//       </header>
//       <aside>
//         <nav>
//           <ul>
//             <li><br /><Link to="/">Home</Link></li>
//             <li><Link to="/abc">Go to ABC</Link></li>
//             <li><Link to="/xyz">Go to XYZ</Link></li>
//           </ul>
//         </nav>
//         <div className="actions">
//           <button onClick={handleLogout}>Log Out</button>
//         </div>
//       </aside>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="abc" element={<h1>abc</h1>} />
//           <Route path="xyz" element={<h1>xyz</h1>} />
//         </Routes>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default App;
// src/App.tsx
// import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const App = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <FontAwesomeIcon icon={faFileExport} className="icon" />
            <h1>Task flow</h1>
          </Link>
        </div>
        <div className="user-info">
          <span>Username</span>
          <img src="profile.jpg" alt="User Profile" />
        </div>
      </header>
      <aside>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/abc">Go to ABC</Link></li>
            <li><Link to="/xyz">Go to XYZ</Link></li>
          </ul>
        </nav>
        <div className="actions">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="abc" element={<h1>abc</h1>} />
          <Route path="xyz" element={<h1>xyz</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

