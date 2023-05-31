import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addArticle, resetArticles } from '../features/articlesSlice';
import {
  incrementArticlesCount,
  resetArticlesCount
} from '../features/articlesCountSlice';
import { setCategory } from '../features/categorySlice';

import Article from '../components/Article';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { FiPlus } from 'react-icons/fi';

const Home = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles);
  const myArticles = useSelector((state) => state.myArticles);
  const articlesCount = useSelector((state) => state.articlesCount);
  const pinnedArticle = useSelector((state) => state.pinnedArticle);
  const category = useSelector((state) => state.category);
  const query = useSelector((state) => state.query);

  let combinedArticles = [];

  if (pinnedArticle) {
    combinedArticles.push(pinnedArticle);
  }

  combinedArticles = [...combinedArticles, ...myArticles, ...articles].filter(
    (article) => article !== null
  );

  combinedArticles = [pinnedArticle, ...myArticles, ...articles].filter(
    (article, index, arr) => {
      return (
        index === arr.findIndex((a) => a && article && a.id === article.id)
      );
    }
  );

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&pageSize=${articlesCount}&apiKey=da54110976114d1f890ab10bcaafe077`
        );
        const data = await response.json();

        dispatch(resetArticles());

        const fetchedArticles = data.articles.map((article) => ({
          ...article,
          id: article.url
        }));

        fetchedArticles.forEach((article) => {
          dispatch(addArticle(article));
        });
      } catch (error) {
        console.log('Fetch error', error);
      }
    }

    fetchNews();
  }, [dispatch, articlesCount, category]);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(resetArticles());
    dispatch(resetArticlesCount());
  };

  const handleLoadMore = () => {
    dispatch(incrementArticlesCount());
  };

  const filteredArticles = combinedArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />

      <div className="container mt-4">
        <Link to="/news-portal/add" className="btn btn-primary ml-2">
          <FiPlus size={20} className="mr-1" />
          Add Article
        </Link>
      </div>

      <div className="container mt-4 mb-4">
        <div className="btn-group d-flex flex-wrap">
          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('business')}
          >
            Business
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('entertainment')}
          >
            Entertainment
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('general')}
          >
            General
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('health')}
          >
            Health
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('science')}
          >
            Science
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('sports')}
          >
            Sports
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleCategoryClick('technology')}
          >
            Technology
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {filteredArticles &&
            filteredArticles.map((article) => {
              const { id } = article;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                  <Article
                    article={article}
                    combinedArticles={combinedArticles}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button onClick={handleLoadMore} className="btn btn-primary btn-lg">
          Load More
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
