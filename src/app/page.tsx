import React from 'react'
import HomePageComp from './components/HomePageComp'
import dotenv from 'dotenv';
// import EmailComp from './components/EmailComp'

dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const page = () => {
  return (
    <div >
      <HomePageComp />
      {/* <EmailComp/> */}
    </div>
  )
}

export default page
