import { useState } from 'react'
import FlashcardList from './component/flashcardLish';
import Questions from './component/Question.js'
import Navbar from './Navbar';
import  APIData from './component/fetcheApi.js'
import './App.css'
console.log(Questions);
function App() {
  const card =  Questions 
  console.log(card)
  return (
    <>
       <Navbar/>
       <FlashcardList flashcards ={card} key={card.id}/>
    </>
  )
}

export default App
