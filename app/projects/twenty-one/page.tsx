'use client';
import React, { useState, useEffect } from 'react';
import { GlobalProvider } from '@/app/context/GlobalContext';
import { GlobalContext, GlobalContextType } from '@/app/context/GlobalContext';
import Image from 'next/image';
import style from '@/app/styles/twenty-one.module.css';

const TwentyOne = () => {
  const [deckId, setDeckId] = useState('');
  const [showDealerCard, setShowDealerCard] = useState(false);
  const [playerHand, setPlayerHand] = useState([]);

  const flippedCard = `
    transform: rotateY(180deg);
  `

  const getDeck = async () => {
    const deck = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/twentyone?action=new`);
    const deckData = await deck.json();
    return deckData;
  };

  const flipDealerCard = () => {
    setShowDealerCard(true);
  }

  const getPlayerHand = async () => {
    const playerHand = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/twentyone?action=draw&deckId=${deckId}`);
    const playerHandData = await playerHand.json();
    console.log(playerHandData);
    setPlayerHand(playerHandData.cards);
    return playerHandData;
  }

  useEffect(() => {
    const fetchDeck = async () => {
      const deckData = await getDeck();
      setDeckId(deckData.deck_id);
    };
    fetchDeck();
  }, []);
  
  return (
    <div className='w-full flex flex-row flex-wrap bg-white border-slate-900 text-slate-900'>
      <h1 className='text-3xl w-full text-center'>Let’s play cards!</h1>
      <div id='dealer-cards' className='md:w-1/2 w-full'>
        <h2 className='text-center'>Dealer</h2>
        <div id='dealer-hand' className='flex flex-row w-full justify-center'>
          <div className='blank-card'>
            <Image src='/images/back.png' alt='Card back' width={100} height={150} />
          </div>
          <div className='dealer-cardup flex flex-row'>
            <img src='https://deckofcardsapi.com/static/img/6S.png' alt='Card up' width={100} height={150}  />
            <img src='https://deckofcardsapi.com/static/img/4C.png' alt='Card up' width={100} height={150}  />
          </div>
        </div>
        <button id='stand' onClick={() => setShowDealerCard(true)}>flip card</button>
        <div id='dealer-score'></div>
      </div>
      <div id='player-cards' className='md:w-1/2 w-full'>
        <h2 className='text-center'>Player</h2>
        <div id='player-hand' className='flex flex-row w-full justify-center'>
          <div className='blank-card'>
            <Image src='/images/back.png' alt='Card back' width={100} height={150} />
          </div>
          <div className='player-cardup flex flex-row'>
            <img src='https://deckofcardsapi.com/static/img/0C.png' alt='Card up' width={100} height={150} />
            <img src='https://deckofcardsapi.com/static/img/4C.png' alt='Card up' width={100} height={150} />
          </div>
        </div>
        <div id='player-score'></div>
        <button id='hit' onClick={() => getPlayerHand()}>Hit</button>
      </div>
    </div>
  );
};

export default TwentyOne;
