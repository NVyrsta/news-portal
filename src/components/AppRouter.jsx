import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import AddArticle from '../pages/AddArticle';
import Edit from '../pages/Edit';

const AppRouter = () => {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/news-portal" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/add"
          element={user ? <AddArticle /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={user ? <Edit /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
