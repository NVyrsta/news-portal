import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  BsPencilSquare,
  BsTrash,
  BsBookmarkPlus,
  BsBookmarkCheck
} from 'react-icons/bs';
import { pinArticle, unpinArticle } from '../features/pinnedArticleSlice';
import { removeMyArticle } from '../features/myArticlesSlice';
import Notification from '../components/Notification';
import scrollreveal from 'scrollreveal';

const Article = ({ article, combinedArticles }) => {
  const { id, urlToImage, description, title, author, url } = article;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const pinnedArticle = useSelector((state) => state.pinnedArticle);

  const isUserAuthor = (author) => {
    return user === author;
  };
  const handlePin = (id) => {
    if (pinnedArticle && pinnedArticle.id === id) {
      dispatch(unpinArticle());
    } else {
      const article = combinedArticles.find((article) => article.id === id);
      if (article) {
        dispatch(pinArticle(article));
      }
    }
  };

  const handleDelete = (id) => {
    dispatch(removeMyArticle(id));
    Notification('Article deleted successfully', 'success');
  };

  useEffect(() => {
    const sr = scrollreveal({
      origin: 'left',
      distance: '20px',
      duration: 500,
      reset: false
    });

    sr.reveal(`.card`, {
      opacity: 0,
      interval: 300
    });
  }, []);

  return (
    <article className="card mb-4" style={{ position: 'relative' }}>
      {urlToImage && (
        <img
          src={urlToImage}
          className="card-img-top"
          alt=""
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}

      <div className="card-body">
        {pinnedArticle && pinnedArticle.id === id ? (
          <BsBookmarkCheck
            onClick={() => handlePin(id)}
            className="icon text-primary"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              marginTop: '1rem',
              cursor: 'pointer',
              fontSize: '24px',
              marginRight: '0.5rem',
              backgroundColor: 'white',
              padding: '4px',
              borderRadius: '4px'
            }}
          />
        ) : (
          <BsBookmarkPlus
            onClick={() => handlePin(id)}
            className="icon text-secondary"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              marginTop: '1rem',
              cursor: 'pointer',
              fontSize: '24px',
              marginRight: '0.5rem',
              backgroundColor: 'white',
              padding: '4px',
              borderRadius: '4px'
            }}
          />
        )}

        <h5 className="card-title">{title}</h5>

        {author && <p className="card-text">Author: {author}</p>}

        {description && <p className="card-text">{description}</p>}

        {url && (
          <a href={url} className="btn btn-primary" target="_blank">
            Read More
          </a>
        )}

        {isUserAuthor(author) && (
          <div className="d-flex justify-content-between align-items-center mt-2">
            <Link
              to={`/news-portal/edit/${id}`}
              className="btn btn-outline-primary btn-sm"
            >
              <BsPencilSquare size={20} className="mr-1" />
              Edit
            </Link>
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-outline-danger btn-sm"
              style={{ marginLeft: '1rem' }}
            >
              <BsTrash size={20} className="mr-1" />
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Article;
