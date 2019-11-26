import React from 'react';
import { Link } from 'react-router-dom';
import { BroadheadCase } from './BroadheadCase';

import './assets/css/section-article.css';

export const SectionArticle = (props) => {
  const articleBg = (imgBg) => {
    if (imgBg) {
      console.log(imgBg);
      return {
        backgroundImage: 'url(' + imgBg + ')'
      };
    }
  };

  return (
    <article>
      <img className="section-article-img" src={props.imgBg} />
      <h1>{props.title}</h1>
      <header>
        <h2>{props.header}</h2>
        <p>{props.p}</p>
      </header>
      <Link className="learn-more-link" to={props.linkToProductPage}>Learn More about the {props.name}</Link>
    </article>
  );
}
