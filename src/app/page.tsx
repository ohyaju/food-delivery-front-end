
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

import React from 'react'
import HomePageComp from './components/HomePageComp'

export default function Home (){
  return (
    <div>
        <HomePageComp/>
    </div>
  );
}

