import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Rooted in Wellness.</h1>
      <h2>Rooted in Holistic Health.</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Jalen-25.jpg'
              text='Explore Our Different Techniques for Relaxation'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/Jalen-34.jpg'
              text='Ask your Therapist'
              label='FAQ'
              path='/About'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Jalen-1.jpg'
              text='Check out our Content!'
              label='Media'
              path='/'
            />
            <CardItem
              src='images/Jalen-191.jpg'
              text="Therapist's Thought: Fill your cup!"
              label='Blog'
              path='/'
            />
            <CardItem
              src='images/Jalen-182.jpg'
              text='Pick up your favorite items!'
              label='Products'
              path='/book-now'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
