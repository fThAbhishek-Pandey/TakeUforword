import React, { useState } from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards }) => {
    let [count,setCount] = useState(1);
    const n = flashcards.length
    console.log(flashcards)
    function increment (){
       
        console.log("i am going to increase",n)
        count = (count+1)%n;
        setCount(count);
    }
    function decrement (){
        console.log("i am going to decre",n)
        count --;
        if(count<0) count= n-1;
        setCount(count);
    }
    return (
        <>
        <div className="card-grid">
             <Flashcard flashcard={flashcards[count]} num={count} key={flashcards[count].id} />
        </div>
        <div>
           <button className='Button' onClick={decrement}>prev</button>
           <button className='Button' onClick={increment}>next</button>
      </div>
      </>
    )
}

export default FlashcardList