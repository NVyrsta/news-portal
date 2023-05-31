import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GiNewspaper } from 'react-icons/gi';
import { FiDelete, FiLogOut } from 'react-icons/fi';
import { setQuery, clearQuery } from '../features/querySlice';
import { resetUser } from '../features/userSlice';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const query = useSelector((state) => state.query);

  const handleLogout = () => {
    dispatch(resetUser());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link to="/news-portal" className="navbar-brand">
        <GiNewspaper size={32} className="mr-2" />
        News Portal
      </Link>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="input-group">
              <input
                type="text"
                value={query}
                onChange={(e) => dispatch(setQuery(e.target.value))}
                className="form-control"
                placeholder="Search articles..."
                style={{ width: '400px' }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => dispatch(clearQuery())}
                >
                  <FiDelete size={24} />
                </button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            {user && (
              <p className="nav-link">
                <span className="welcome-text">Welcome back:</span>{' '}
                <span className="user-name">{user}</span>
              </p>
            )}
          </li>
          <li className="nav-item">
            {user && (
              <button onClick={handleLogout} className="btn btn-secondary ml-2">
                <FiLogOut size={20} />
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
