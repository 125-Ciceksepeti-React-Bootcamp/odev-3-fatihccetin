import React from 'react';
import '../sass/CardStar.scss';
import { GiStaryu } from 'react-icons/gi';

export default function CardStar(props) {
  // changing popularity star
  const handleStar = (star) => {
    props.handleStar(props.id, star);
  };
  return (
    <>
      <GiStaryu
        onClick={() => handleStar(1)}
        className="icon"
        size="2rem"
        color={props.star >= 1 ? '#fed34d' : '#120d1b'}
      />
      <GiStaryu
        onClick={() => handleStar(2)}
        className="icon"
        size="2rem"
        color={props.star >= 2 ? '#fed34d' : '#120d1b'}
      />
      <GiStaryu
        onClick={() => handleStar(3)}
        className="icon"
        size="2rem"
        color={props.star >= 3 ? '#fed34d' : '#120d1b'}
      />
      <GiStaryu
        onClick={() => handleStar(4)}
        className="icon"
        size="2rem"
        color={props.star >= 4 ? '#fed34d' : '#120d1b'}
      />
      <GiStaryu
        onClick={() => handleStar(5)}
        className="icon"
        size="2rem"
        color={props.star >= 5 ? '#fed34d' : '#120d1b'}
      />
    </>
  );
}
