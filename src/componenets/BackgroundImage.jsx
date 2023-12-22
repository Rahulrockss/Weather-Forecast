import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BackgroundImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch a random image from Lorem Picsum
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('https://picsum.photos/200/300/?blur=2');

        const image = response.request.responseURL;

        // Set image URL state
        setImageUrl(image);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    // Call the function to fetch a random image
    fetchRandomImage();
  }, []); // Run only once on component mount

  return (
    <div className="bg-dark"
    style={{backgroundImage:`url(${imageUrl})`}}>
     
    </div>
  );
};

export default BackgroundImage;