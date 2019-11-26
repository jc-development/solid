import React from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../reusable/HeroVideo';
import { BroadheadCase } from './BroadheadCase';

import './assets/css/section-article.css';

export const SectionArticleVideo = (props) => {

  const articleBg = (imgBg) => {
    if (imgBg) {
      return {
        backgroundImage: 'url(' + imgBg + ')'
      };
    }
  };

  return (
    <article>
      <HeroVideo
        src="https://s3.amazonaws.com/solid-uploads/movies/SOLID+BROADHEADS-HD.mp4"
        poster="https://s3.amazonaws.com/solid-uploads/movies/solid-poster.jpeg"
      />
      <h1>{props.title}</h1>
      <header>
        <h2>{props.header}</h2>
        <p>{props.p}</p>
      </header>
      <div>

        {props.variants ?
          <BroadheadCase
            broadheadImg={props.broadheadImg}
            grains={props.grains}
            variants={props.variants}
          /> :
          null
      }

        <Link className="learn-more-link" to={props.learnMore}>Click to Learn More about the {props.name}</Link>
      </div>
    </article>
  );
}
