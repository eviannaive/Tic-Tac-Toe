import { useState } from "react"

export default function Cell({mark,markHandler}){
  // let [pointer,setPointer] = useState(mark)
  return (
    <div className={'cell'+ (mark === ''?'':' none')} onClick={markHandler}>
      {mark !== '' ? (mark === 0?'O':'X'):''}
    </div>
  )
}