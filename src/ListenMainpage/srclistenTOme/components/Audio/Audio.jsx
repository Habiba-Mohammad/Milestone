import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Data } from '../../../../Data/ListenData';
import { useState } from 'react';
import "./Audio.css"
const Audio = ({card,handleChoice,flipped,disabled}) => {

  return (
   <>
<div className=' row  d-flex Main-Audio-Container   m-4 row'>
  {Data.map((item=>{
   return (
    <>
 
<div className=' Audio-container  audio-player col-4 col-sm-3 m-2 p-3 '>
<img className="  m-2  p-1" src={item.image} />
<ReactAudioPlayer

 className=' audio   '
  src={item.sound}
  
  controls
/>
<p className='font-weight-bold fs-4'> {item.name}</p>

</div>
    </>
   )
  }))}
</div>

</>
  )
}

export default Audio


