import React from 'react';
import useGif from './useGif';

function Random() {
  const {gif, response} = useGif();

  return (
    <div className='random'>
        <h1>Random Gif</h1>
        <img width='500' src={gif} alt='gif' />
        <div className='randomB'>
          {/* <button onClick={response()}>Click for new GIF</button> */}
          <button onClick={() => response()}>Click for new GIF</button>
        </div>
    </div>
  );
}
export default Random;
