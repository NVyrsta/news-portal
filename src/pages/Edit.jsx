import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateMyArticle } from '../features/myArticlesSlice';
import Notification from '../components/Notification';

function Edit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myArticles = useSelector((state) => state.myArticles);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const article = myArticles.find((article) => article.id === id);
    if (article) {
      setTitle(article.title);
      setUrlToImage(article.urlToImage);
      setDescription(article.description);
    }
  }, [id, myArticles]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedArticle = {
      id,
      title,
      urlToImage,
      description,
      author: user,
    };

    dispatch(updateMyArticle(updatedArticle));
    Notification('Article updated successfully', 'success');

    navigate('/news-portal');
  };

  return (
    <div className="container mt-4">
      <h1>Edit Article</h1>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
