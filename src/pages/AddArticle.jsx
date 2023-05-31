import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addMyArticle } from '../features/myArticlesSlice';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';

const AddArticle = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const article = {
      id,
      title,
      urlToImage,
      description,
      author: user
    };

    dispatch(addMyArticle(article));

    setTitle('');
    setUrlToImage('');
    setDescription('');
    Notification('Article added successfully', 'success');

    navigate('/news-portal');
  };

  return (
    <div className="container mt-4">
      <h1>Add Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="urlToImage" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="urlToImage"
            value={urlToImage}
            onChange={(e) => setUrlToImage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
