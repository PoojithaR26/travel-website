import React from 'react';
import './Cards.styles.css';
import CardItem from './CardItem';
import mmt from '../../assets/images/mmt.jpg';
import tcsasset from '../../assets/images/tcsasset.jpg';
//import img3 from '../../assets/images/img-3.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>What is your query?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={mmt}
              text='Raising MMT Request and other related queries.'
              label='MMT Request'
              path='/services'
            />
            
            <CardItem
              src={tcsasset}
              text='Recieving TCS Asset and other related queries.'
              label='TCS Asset'
              path='/services'
            />
            <CardItem
              src={mmt}
              text='Issue 3 and other related queries.'
              label='Issue3'
              path='/services'
            />
            </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
