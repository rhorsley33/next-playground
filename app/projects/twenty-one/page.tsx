'use client';
import React, { useState, useEffect } from 'react';

const TwentyOne = () => {
  const getDeck = async () => {
    const deck = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/twentyone`);
    const deckData = await deck.json();
    return deckData;
  };

  useEffect(() => {
    const fetchDeck = async () => {
      const deckData = await getDeck();
      console.log(deckData);
    };
    fetchDeck();
  }, []);

  return (
    <div className='w-full flex flex-row flex-wrap bg-white border-slate-900 text-slate-900'>
      <h1 className='text-3xl w-full text-center'>Let’s play cards!</h1>
      <div id='dealer-cards' className='w-1/2'>
        <h2 className='text-center'>Dealer</h2>
        <div id='dealer-hand'></div>
        <div id='dealer-score'></div>
      </div>
      <div id='player-cards' className='w-1/2'>
        <h2 className='text-center'>Player</h2>
        <div id='player-hand'></div>
        <div id='player-score'></div>
      </div>
    </div>
  );
};

export default TwentyOne;
