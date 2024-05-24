import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { outSideHome } from '../../../../Data/ListenData';
import "./Audio.css"
const ObjectAudio = () => {

  return (
   <>
<div className='d-flex align-items-center m-4 row'>
  {outSideHome.map((item=>{
   return (
    <>
<div className=' Audio-container audio-player col-4 col-sm-3 m-2 p-3 '>
<img className="  m-2 p-1  " src={item.image}/>
<ReactAudioPlayer className='audio'
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

export default ObjectAudio