export default function LightBox({open,setlightbox}){
  // let [pointer,setPointer] = useState(mark)
  return (
    <div className={"light-box" +(open?'':' hide')}>
      <p>
        YOU WIN
      </p>
      <button onClick={()=>{setlightbox(false)}}>close</button>
    </div>
  )
}