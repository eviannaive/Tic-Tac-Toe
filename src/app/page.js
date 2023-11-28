"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Cell from './components/Cell'
import LightBox from './components/LightBox';

export default function Home() {
  let [player,setPlayer] = useState(true)
  let [marks, setMarks] = useState(Array(9).fill(''))
  let [round,setRound] = useState(0)
  let [lightbox,setlightbox] = useState(false)
  let [over,setOver] = useState(false)
  const markHandler = (index)=> {
    let newArr = marks;
    newArr[index] = player ? 0:1;
    setMarks(newArr)
    setPlayer(!player)
    if(player) setRound(round+1)
    // checkWinner(newArr)
  }
  useEffect(()=>{
    
      for(let i = 0;i<=2;i++){
        if(marks[i] !== ''){
          if(marks[i] === marks[i+3] && marks[i] === marks[i+6]){
            setlightbox(true)
            setOver(true)
            return
          }
        }
      }
      for(let i = 0;i<=6;i+=3){
        if(marks[i] !== ''){
          if(marks[i] === marks[i+1] && marks[i] === marks[i+2]){
            setlightbox(true)
            setOver(true)
            return
          }
        }
      }
      if(marks[0] !== '' && marks[0] === marks[4] && marks[4] === marks[8]){
        setlightbox(true)
        setOver(true)
        return;
      }
      if(marks[2] !== '' && marks[2] === marks[4] && marks[4] === marks[6]){
        setlightbox(true)
        setOver(true)
        return;
      }
    
  },[player])
  const playAgain = () => {
    setOver(false);
    setMarks(Array(9).fill(''));
    setPlayer(true);
    setRound(0)
  }
  return (
    <div className='board'>
      <div className='round'>回合: {round}</div>
      <div className={'game-wrapper'+(over?' gameover':'')}>
        {marks.map((value,index)=><Cell key={index} mark={value} markHandler={()=>{markHandler(index)}}/>)}
      </div>
      <div className={"play-again"+(over?' show':'')} onClick={playAgain}>PLAY AGAIN</div>
      <LightBox open={lightbox} setlightbox={setlightbox}/>
    </div>
  )
}
