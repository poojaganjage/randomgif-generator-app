import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useGif(tag) {
  const [gif, setGif] = useState('');
  const apikey = process.env.REACT_APP_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=7eBrVNzzdASa1WWpCUb49aX9SRRd3sxc`;
  
  const response = async(tag) => {
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const image = data.data.images.downsized_large.url;
    setGif(image);
  }
  
  useEffect(() => {
    response(tag);
  }, [tag]);

  return {gif, response};
}
export default useGif;
