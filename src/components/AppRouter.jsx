import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import AddArticle from '../pages/AddArticle';
import Edit from '../pages/Edit';

function AppRouter() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/news-portal/login" />}
        />
        <Route
          path="/news-portal"
          element={user ? <Home /> : <Navigate to="/news-portal/login" />}
        />
        <Route
          path="/news-portal/add"
          element={user ? <AddArticle /> : <Navigate to="/news-portal/login" />}
        />
        <Route
          path="/news-portal/edit/:id"
          element={user ? <Edit /> : <Navigate to="/news-portal/login" />}
        />
        <Route
          path="/news-portal/login"
          element={user ? <Navigate to="/news-portal" /> : <LoginPage />}
        />
        <Route path="*" element={<Navigate to="/news-portal" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
