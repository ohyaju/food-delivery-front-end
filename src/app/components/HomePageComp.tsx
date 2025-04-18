import React from 'react';
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import CardComp from './CardComp';
import EmailComp from './EmailComp';
import AddFoodComp from './AddFoodComp';
// import Register from '../(auth)/Register';

const HomePageComp = () => {
  return (
    <div>
<div>
    <HeaderComp/>
    <CardComp/>
    <FooterComp/>
    <EmailComp/>
    {/* <Register/> */}
    <AddFoodComp/>
</div>
    </div>
  )
}

export default HomePageComp