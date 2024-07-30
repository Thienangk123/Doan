import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


/* eslint-disable react-refresh/only-export-components */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, useNavigate, Outlet } from "react-router-dom";
// // import "./index.css";
// // import Home from "./pages/Home";
// // import Products from "./pages/Products";
// // import Contact from "./pages/Contact";
// // import Header from "./components/Header";
// // import Login from "./components/login";
// // import Layout from "./components/Layout";
// // import App from "./App";

// const Page = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Page</h1>
//       <nav>
//         <button onClick={() => navigate("/page/abc")}>Go to ABC</button>
//         <button onClick={() => navigate("/page/xyz")}>Go to XYZ</button>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Page />}>
//           <Route path="abc" element={<h1>abc</h1>} />
//           <Route path="xyz" element={<h1>xyz</h1>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );