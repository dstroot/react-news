import React from 'react';
import newsList from './news.json';
import NewsItem from '../NewsItem';

const NewsList = () => {
  return (
    <>
      {newsList.map(newsItem => (
        <NewsItem key={newsItem.id} item={newsItem} />
      ))}
    </>
  );
};

export default NewsList;
