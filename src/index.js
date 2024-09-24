import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Leaderboard from './pages/LeaderBoard';
import Treasurehunt from './pages/Treasurehunt';
import Jeopardysections from './pages/JeopardySections';
import Team from './pages/Team';
import JeopardyQuestions from './pages/JeopardyQuestions';
const router = createBrowserRouter([
  {
    path: "/",        
    element: <App />
  },
  {
    path: "/home",        
    element: <Homepage />
  },
  {
    path: "/leaderboard",        
    element: <Leaderboard />
  },
  {
    path: "*",        
    element: <Homepage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
