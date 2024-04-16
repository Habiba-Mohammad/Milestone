import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { transportData} from '../Data';
import "./Audio.css"
const TransportAudio = () => {

  return (
   <>
<div className='d-flex align-items-center m-4 row'>
  {transportData.map((item=>{
   return (
    <>
<div className='Audio-container audio-player col-4 col-sm-3 m-2 p-3 '>
<img className="m-2 p-1 " src={item.image}/>
<ReactAudioPlayer className='audio '
  src={item.sound}
  
  controls
/>
<p className='Primary-color text-center font-weight-bold fs-5'> {item.name}</p>
</div>
    </>
   )
  }))}
</div>

</>
  )
}

export default TransportAudio